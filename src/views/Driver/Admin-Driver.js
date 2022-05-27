import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { RiAddCircleLine } from "react-icons/ri";
import EditDriverForm from "../../admin-driver-stuff/EditDriverForm";
import NewDriverForm from "../../admin-driver-stuff/NewDriverForm";
import TableGenerator from "./../../admin-driver-stuff/TableGenerator";
import TableHeader from "./../../admin-driver-stuff/TableHeader";
import FooterAdmin from "./../../admin-driver-stuff/TemplateComponent/FooterAdmin";
import HeaderAdmin from "./../../admin-driver-stuff/TemplateComponent/HeaderAdmin";
import toast, { Toaster } from "react-hot-toast";
import AsideAdmin from "./../../admin-driver-stuff/TemplateComponent/AsideAdmin";

const AdminDriver = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    message: "",
    isError: false,
  });

  const [datas, setDatas] = useState([]);

  const [update, setUpdate] = useState("");

  const displayPopupMessage = (promise, actionPerformed) => {
    const messages = () => {
      if (actionPerformed === "Save") {
        return {
          loading: "Saving driver ...",

          success: (response) =>
            `Successfully saved ${response.data.name.toUpperCase()}`,

          error: (err) =>
            `This error occured while saving: ${err.message.toUpperCase()}`,
        };
      } else if (actionPerformed === "Update") {
        return {
          loading: "Updating Driver ...",

          success: (response) =>
            `Successfully updated ${response.data.name.toUpperCase()}`,

          error: (err) =>
            `This error occured while updating: ${err.message.toUpperCase()}`,
        };
      } else {
        return {
          loading: "Deleting Driver ...",

          success: (response) => `Driver successfully deleted`,

          error: (err) =>
            `This error occured while deleting Driver: ${err.message.toUpperCase()}`,
        };
      }
    };

    toast.promise(promise, messages(), {
      style: {
        minWidth: "250px",
      },

      success: {
        duration: 5000,
        icon: "✅",
      },

      error: {
        duration: 7000,
        icon: "❌",
      },
    });
  };

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const driverData = await axios.get("http://localhost:7000/driver");
        setDatas(driverData.data);
        setLoading(false);
        setError({
          message: "",
          isError: false,
        });
      } catch (errors) {
        setLoading(false);
        setError((prev) => {
          return {
            ...prev,
            isError: true,
            message: `${errors.code}: ${errors.message}`,
          };
        });
      }
    };
    fetchAll();
  }, []);

  const captureDataForUpdate = (data) => {
    setUpdate(data);
  };

  const addDataFromForm = async (dataFromForm) => {
    dataFromForm.id = uuidv4();
    try {
      const driver = axios.post("http://localhost:7000/driver", dataFromForm);

      displayPopupMessage(driver, "Save");

      await driver;

      const driverDataCurrrent = await axios.get(
        "http://localhost:7000/driver"
      );

      setDatas(driverDataCurrrent.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addDataToUpdate = async (dataFromEditForm) => {
    dataFromEditForm.id = update.id;
    try {
      const driver = axios.put(
        `http://localhost:7000/driver/${update.id}`,
        dataFromEditForm
      );

      displayPopupMessage(driver, "Update");

      await driver;

      const driverDataCurrrent = await axios.get(
        "http://localhost:7000/driver"
      );

      setDatas(driverDataCurrrent.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandle = async (id) => {
    try {
      const deletedDriver = axios.delete(
        `http://localhost:7000/driver/${id}`
      );

      displayPopupMessage(deletedDriver, "Delete");
      await deletedDriver;

      const remainingDriver = await axios.get(`http://localhost:7000/driver`);
      setDatas(remainingDriver.data);
    } catch (error) {
      console.log(error);
    }
  };

  const showModal = () => {
    if (update) {
      return (
        <EditDriverForm
          update={update}
          setCloseUpdate={setUpdate}
          setOpenModal={setModalOpen}
          setData={addDataToUpdate}
        />
      );
    } else {
      return (
        <NewDriverForm
          setOpenModal={setModalOpen}
          setData={addDataFromForm}
        />
      );
    }
  };

  return (
    <div className="grid h-screen w-screen overflow-x-hidden grid-cols-12 grid-rows-12 font-Nunito bg-[#f3f3f3]">
      <HeaderAdmin />

      {modalOpen && showModal()}
      <main className=" flex flex-col col-start-1 sm:col-start-3 md:col-start-4 lg:col-start-3 col-end-13 row-start-2 row-end-12 px-3 mx-0 sm:mx-2  mt-2 bg-white">
        <div className="flex justify-center sm:justify-start md:justify-center lg:justify-start ">
          <div className="m-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-[90px]" data-testid="head">
            Driver
          </div>
        </div>
        <div className="flex flex-row justify-between sm:justify-start md:justify-evenly lg:justify-start items-center my-3">
          <div className="bg-darkBluePhant p-1 sm:px-0 sm:p-2 rounded-md font-bold text-white flex items-center justify-evenly w-1/2 sm:w-1/6 md:w-2/6 xl:w-1/6">
            <RiAddCircleLine className="text-white text-xl sm:text-2xl" />
            <button
              onClick={() => {
                setModalOpen(true);
              }}
              title="button"
            >
              Create Driver
            </button>
          </div>
          <form
            action=""
            className="w-1/2 sm:w-2/5 h-10 mx-2 sm:mx-12 md:mx-3 lg:mx-12 sm:flex sm:items-center"
          >
            <input
              type="text"
              title="input"
              placeholder="Search"
              className="w-full h-5/6 sm:h-full pl-2 border-2 border-solid border-[#6C757D] rounded-md"
            />
          </form>
        </div>
        <TableHeader />
        <div className="overflow-auto ">
          <TableGenerator
            giveMeData={captureDataForUpdate}
            handleDelete={deleteHandle}
            setOpenModal={setModalOpen}
            data={datas}
            loading={loading}
            error={error}
          />
        </div>
        <Toaster className="w-1/3" />
      </main>
      <AsideAdmin />
      <FooterAdmin />
    </div>
  );
};

export default AdminDriver;
