import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { RiAddCircleLine } from "react-icons/ri";
import EditOperatorForm from "../admin-operator-stuff/EditOperatorForm";
import NewOperatorForm from "../admin-operator-stuff/NewOperatorForm";
import TableGenerator from "../admin-operator-stuff/TableGenerator";
import TableHeader from "../admin-operator-stuff/TableHeader";
import FooterAdmin from "../admin-operator-stuff/TemplateComponent/FooterAdmin";
import HeaderAdmin from "../admin-operator-stuff/TemplateComponent/HeaderAdmin";
import SideBar from "../component/dashboard-layout/SideBar";
import toast, { Toaster } from "react-hot-toast";

const AdminOperator = () => {
  // to change the state for toggling the modal
  const [modalOpen, setModalOpen] = useState(false);

  // loading screen rendering is managed by this state is here
  const [loading, setLoading] = useState(false);

  // displaying the error message states
  const [error, setError] = useState({
    message: "",
    isError: false,
  });

  // global data setter when new operator is saved or updated into the database
  const [datas, setDatas] = useState([]);

  //  the state to manage the updating for getting the data pre-populate them into the form field
  const [update, setUpdate] = useState("");

  const displayPopupMessage = (promise, actionPerformed) => {
    // this toast.promise is handling the async behaviours of the fetching or posting data to the database
    // and it receives that promise (operator) as a first argument and second argument is series of objects containing the configulation for
    // handling the error message when promise rejects and success message when promise resolves
    // it also receives the object containing the styles of the modal which pops up.
    const messages = () => {
      if (actionPerformed === "Save") {
        return {
          // this opens the loading icon and display this messsge while loading "Saving operator ..."
          loading: "Saving operator ...",

          // this is the success function which receive anonymous function which is automatically
          //  passed the response for RESOLVED promise
          success: (response) =>
            `Successfully saved ${response.data.name.toUpperCase()}`,

          // this is the error function which receive anonymous function which is automatically
          //  passed the response for REJECTED promise
          error: (err) =>
            `This error occured while saving: ${err.message.toUpperCase()}`,
        };
      } else if (actionPerformed === "Update") {
        return {
          // this opens the loading icon and display this messsge while loading "Saving operator ..."
          loading: "Updating operator ...",

          // this is the success function which receive anonymous function which is automatically
          //  passed the response for RESOLVED promise
          success: (response) =>
            `Successfully updated ${response.data.name.toUpperCase()}`,

          // this is the error function which receive anonymous function which is automatically
          //  passed the response for REJECTED promise
          error: (err) =>
            `This error occured while updating: ${err.message.toUpperCase()}`,
        };
      } else {
        return {
          // this opens the loading icon and display this messsge while loading "Saving operator ..."
          loading: "Deleting operator ...",

          // this is the success function which receive anonymous function which is automatically
          //  passed the response for RESOLVED promise
          success: (response) => `Operator successfully deleted`,

          // this is the error function which receive anonymous function which is automatically
          //  passed the response for REJECTED promise
          error: (err) =>
            `This error occured while deleting operator: ${err.message.toUpperCase()}`,
        };
      }
    };

    toast.promise(promise, messages(), {
      style: {
        minWidth: "250px",
      },

      // configuring the success message, setting the time in millsecond it will remain on the page after being
      // popped and the icon it should have while rendered on the screen
      success: {
        duration: 5000,
        icon: "✅",
      },

      // configuring the error message, setting the time in millsecond it will remain on the page after being
      // popped and the icon it should have while rendered on the screen
      error: {
        duration: 7000,
        icon: "❌",
      },
    });
  };

  // fetch all data once and populate them on the table before doing any thing else
  useEffect(() => {
    const fetchAll = async () => {
      // allow display the loading component
      setLoading(true);
      try {
        const operatorsData = await axios.get("http://localhost:7000/operator");
        setDatas(operatorsData.data);
        setLoading(false);
        setError({
          message: "",
          isError: false,
        });
      } catch (errors) {
        // if an error occur it should render it
        setLoading(false);
        setError((prev) => {
          return {
            ...prev,
            isError: true,
            message: `${errors.code}: ${errors.message}`,
          };
        });
        console.log(errors);
      }
    };
    fetchAll();
  }, []);

  const deleteHandleForUpdate = async (data) => {
    setUpdate(data);
  };

  const addDataFromForm = async (dataFromForm) => {

    // uuid for creating the random id onCreating the new operator
    dataFromForm.id = uuidv4();
    try {
      // this axios returns a promise which is stored into the operator
      const operator = axios.post(
        "http://localhost:7000/operator",
        dataFromForm 
      );

      displayPopupMessage(operator, "Save");
      await operator;

      const operatorsDataCurrrent = await axios.get(
        "http://localhost:7000/operator"
      );
      setDatas(operatorsDataCurrrent.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addDataToUpdate = async (dataFromEditForm) => {
    try {
      const operator = axios.put(
        `http://localhost:7000/operator/${dataFromEditForm.id}`,
        dataFromEditForm
      );
      displayPopupMessage(operator, "Update");
      await operator;

      const operatorsDataCurrrent = await axios.get(
        "http://localhost:7000/operator"
      );
      setDatas(operatorsDataCurrrent.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandle = async (id) => {
    try {
      const deletedOperator = axios.delete(
        `http://localhost:7000/operator/${id}`
      );

      displayPopupMessage(deletedOperator, "Delete");
      await deletedOperator;

      const remainingOperator = await axios.get(
        `http://localhost:7000/operator`
      );
      setDatas(remainingOperator.data);
    } catch (error) {
      console.log(error);
    }
  };

  const showModal = () => {
    if (update) {
      return (
        <EditOperatorForm
          update={update}
          setCloseUpdate={setUpdate}
          setOpenModal={setModalOpen}
          setData={addDataToUpdate}
        />
      );
    } else {
      return (
        <NewOperatorForm
          setOpenModal={setModalOpen}
          setData={addDataFromForm}
        />
      );
    }
  };

  return (
    <div className="grid h-screen w-screen overflow-x-hidden grid-cols-12 grid-rows-12 font-Nunito bg-[#f3f3f3]">
      <HeaderAdmin />
      {/* conditional rendering of the edit when the button is pressed and modalOpen variable became true */}
      {modalOpen && showModal()}
      <main className=" flex flex-col col-start-1 sm:col-start-3 md:col-start-4 lg:col-start-3 col-end-13 row-start-2 row-end-12 px-3 mx-0 sm:mx-2  mt-2 bg-white">
        <div className="flex justify-center sm:justify-start md:justify-center lg:justify-start ">
          <div className="m-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-[90px]">
            Operator
          </div>
        </div>
        <div className="flex flex-row justify-between sm:justify-start md:justify-evenly lg:justify-start items-center my-3">
          <div className="bg-darkBluePhant p-1 sm:px-0 sm:p-2 rounded-md font-bold text-white flex items-center justify-evenly w-1/2 sm:w-1/6 md:w-2/6 xl:w-1/6">
            <RiAddCircleLine className="text-white text-xl sm:text-2xl" />
            <button
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Create Operator
            </button>
          </div>
          <form
            action=""
            className="w-1/2 sm:w-2/5 h-10 mx-2 sm:mx-12 md:mx-3 lg:mx-12 sm:flex sm:items-center"
          >
            <input
              type="text"
              placeholder="Search"
              className="w-full h-5/6 sm:h-full pl-2 border-2 border-solid border-[#6C757D] rounded-md"
            />
          </form>
        </div>
        <TableHeader />
        <div className="overflow-auto ">
          {/* rendering the all operators from the database using this component TableGenerator */}
          <TableGenerator
            giveMeData={deleteHandleForUpdate}
            handleDelete={deleteHandle}
            setOpenModal={setModalOpen}
            data={datas}
            loading={loading}
            error={error}
          />
        </div>
        <Toaster className="w-1/3" />
      </main>
      <SideBar />
      <FooterAdmin />
    </div>
  );
};

export default AdminOperator;
