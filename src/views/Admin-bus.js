import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { RiAddCircleLine } from "react-icons/ri";
import EditOperatorForm from "../admin-bus-stuff/EditBusForm";
import NewOperatorForm from "../admin-bus-stuff/NewBusForm";
import TableGenerator from "../admin-bus-stuff/TableGenerator";
import TableHeader from "../admin-bus-stuff/TableHeader";
import FooterAdmin from "../admin-bus-stuff/TemplateComponent/FooterAdmin";
import HeaderAdmin from "../admin-bus-stuff/TemplateComponent/HeaderAdmin";
import toast, { Toaster } from "react-hot-toast";
import AsideAdmin from "../admin-bus-stuff/TemplateComponent/AsideAdmin";

const AdminBus = () => {
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

  // function to check for dupplicate while creating new operator
  const isRegisterDuplicated = (email) => {
    let index = datas.findIndex((operator) => operator.email === email);
    return index !== -1;
  };

  // function containing the errorMessage functionality
  const displayPopupMessage = (promise, actionPerformed) => {
    const messages = () => {
      if (actionPerformed === "Save") {
        return {
          // this opens the loading icon and display this messsge while loading "Saving operator ..."
          loading: "Saving operator ...",

          // this is the success function which receive anonymous function which is automatically
          //  passed the response for RESOLVED promise
          success: (response) =>
            `Successfully saved ${response.data.data.bus_number.toUpperCase()}`,

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
            `Successfully updated ${response.data.data.bus_number.toUpperCase()}`,

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

    // this toast.promise is handling the async behaviours of the fetching or posting data to the database
    // and it receives that promise (operator) as a first argument and second argument is series of objects containing the configulation for
    // handling the error message when promise rejects and success message when promise resolves
    // it also receives the object containing the styles of the modal which pops up.
    toast.promise(promise, messages(), {
      style: {
        minWidth: "250px",
      },

      // configuring the success message, setting the time in millsecond it will remain on the page after being
      // popped and the icon it should have while rendered on the screen
      success: {
        duration: 5000,
        icon: "???",
      },

      // configuring the error message, setting the time in millsecond it will remain on the page after being
      // popped and the icon it should have while rendered on the screen
      error: {
        duration: 7000,
        icon: "???",
      },
    });
  };

  // fetch all data once and populate them on the table before doing any thing else
  useEffect(() => {
    const fetchAll = async () => {
      // allow display the loading component
      setLoading(true);
      try {
        const operatorsData = await axios.get(
          "http://localhost:3001/api/v1/bus"
        );
        setDatas(operatorsData.data.data);
        setLoading(false);
        setError({
          message: "",
          isError: false,
        });
      } catch (errors) {
        // if an error occur it should render it
        console.log(errors)
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

  // this function is called by the edit button down down on the table row component
  // which capture the data of the current row edited
  const captureDataForUpdate = (data) => {
    setUpdate(data);
  };

  // function for handling updating data into the database and rerendering UI.
  const addDataFromForm = async (dataFromForm) => {
    const dataMapper = {
      bus_number: dataFromForm.busName,
      plate_number: dataFromForm.busPlate,
      route: dataFromForm.busRoute
    };
    try {
        const operator = axios.post(
          "http://localhost:3001/api/v1/bus",
          dataMapper
        );
        // function to handle popup loading while saving and display the status message
        displayPopupMessage(operator, "Save");
        // the promise is awaited to resove so that it can have the values. NB: The following code
        // cant run before promise is resolved due to this await.
        await operator;
      // }

      // fetch all data from the database
      const operatorsDataCurrrent = await axios.get(
        "http://localhost:3001/api/v1/bus"
      );
      // update what is renderd on the screen
      setDatas(operatorsDataCurrrent.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // function to add the data from edit form to the the database and rerender UI with the updated data
  const addDataToUpdate = async (dataFromEditForm) => {
    // dataFromEditForm.id = update.id;
      const dataMapper = {
        bus_number: dataFromEditForm.busName,
        plate_number: dataFromEditForm.busPlate,
        route: dataFromEditForm.busRoute,
      };
    try {
      // this axios returns a promise which is stored into the operator
      console.log(update.id);
      console.log(dataMapper);
      const operator = axios.put(
        `http://localhost:3001/api/v1/bus/${update.id}`,
        dataMapper
      );
      // function to handle popup loading while saving and display the status message
      displayPopupMessage(operator, "Update");
      // the promise is awaited to resove so that it can have the values. NB: The following code
      // cant run before promise is resolved due to this await.
      await operator;
      // }

      // fetch all data from the database
      const operatorsDataCurrrent = await axios.get(
        "http://localhost:3001/api/v1/bus"
      );
      // update what is renderd on the screen
      setDatas(operatorsDataCurrrent.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandle = async (id) => {
    try {
      const deletedOperator = axios.delete(
        `http://localhost:3001/api/v1/bus/${id}`
      );

      displayPopupMessage(deletedOperator, "Delete");
      await deletedOperator;

      const remainingOperator = await axios.get(
        `http://localhost:3001/api/v1/bus`
      );
      setDatas(remainingOperator.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // showing modals when new operator or edit button is clicked
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
          <div className="m-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-[45px]">
            Bus
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
              Create Bus
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

export default AdminBus;
