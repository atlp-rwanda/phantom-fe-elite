/** @format */

import React from "react";
import Admin from "../../component/layout/Layout";
import NewOperatorForm from "../../admin/NewOperatorForm";
import TableGenerator from "../../admin/TableGenerator";
import DeleteModal from "../../admin/DeleteModal";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect, useRef } from "react";

const AssignDriversToBuses = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);
  const [Datas, setDatas] = useState([]);
  const [rowId, setRowId] = useState(null);

  // loading screen rendering is managed by this state is here
  const [loading, setLoading] = useState(false);

  // displaying the error message states
  const [error, setError] = useState({
    message: "",
    isError: false,
  });

  // function containing the errorMessage functionality
  const displayPopupMessage = (promise, actionPerformed) => {
    const messages = () => {
      if (actionPerformed === "Save") {
        return {
          // this opens the loading icon and display this messsge while loading "Saving operator ..."
          loading: "Saving assigned driver ...",

          // this is the success function which receive anonymous function which is automatically
          //  passed the response for RESOLVED promise
          success: (response) =>
            `Successfully saved ${response.data.driveremail.toUpperCase()}`,

          // this is the error function which receive anonymous function which is automatically
          //  passed the response for REJECTED promise
          error: (err) =>
            `This error occured while saving: ${err.message.toUpperCase()}`,
        };
      } else {
        return {
          // this opens the loading icon and display this messsge while loading "Saving operator ..."
          loading: "Deleting assigned driver ...",

          // this is the success function which receive anonymous function which is automatically
          //  passed the response for RESOLVED promise
          success: (response) => `Assigned driver successfully deleted`,

          // this is the error function which receive anonymous function which is automatically
          //  passed the response for REJECTED promise
          error: (err) =>
            `This error occured while deleting Assigned driver: ${err.message.toUpperCase()}`,
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

      loading: {
        duration: 2000,
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

  const allDatas = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:7000/assigned`);
      const assignedData = await res.json();

      setDatas(assignedData);
      setLoading(false);
      setError({
        message: "",
        isError: false,
      });
    } catch (err) {
      setLoading(false);
      setError((prev) => {
        return {
          ...prev,
          isError: true,
          message: `${err.code}: ${err.message}`,
        };
      });
    }
  };

  // Remove assigned driver
  const deleteAssignedDriver = async (id) => {
    try {
      const deletedData = fetch(`http://localhost:7000/assigned/${id}`, {
        method: "DELETE",
      });
      displayPopupMessage(deletedData, "Delete");
      await deletedData;

      allDatas();
    } catch (err) {}
  };

  const catchId = (id) => {
    // console.log(id);
    setRowId(id);
  };

  const form = useRef(null);

  const showDeleteModal = () => {
    return (
      <DeleteModal
        openDeleteModal={setdeleteModalOpen}
        confirmDelete={deleteAssignedDriver}
        idToDelete={rowId}
      />
    );
  };

  const showModal = () => {
    return (
      <NewOperatorForm
        setOpenModal={setModalOpen}
        setData={allDatas}
        saveMessage={displayPopupMessage}
      />
    );
  };

  useEffect(() => {
    allDatas();
  }, []);

  return (
    <>
      {modalOpen && showModal()}
      {deleteModalOpen && showDeleteModal()}
      <Admin>
        <div className="flex flex-col justify-center sm:justify-start md:justify-center lg:justify-start ">
          <div className="m-2 font-black text-xl border-b-2 border-solid border-darkBluePhant pt-6 lg:pt-0 w-[250px]">
            OPERATOR-DASHBOARD
          </div>

          <div className="bg-darkBluePhant  mt-3 p-1 sm:px-0 sm:p-2 rounded-md font-bold text-white flex items-center justify-evenly w-[250px]">
            <button
              className=""
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Assign Driver To Buse
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between sm:justify-start md:justify-evenly lg:justify-start items-center my-3">
          <div className="grid grid-cols-12 border-b-2 border-black w-full font-bold border-solid">
            <div className="col-span-1">No</div>
            <div className="col-span-4 ">Routes</div>
            <div className="col-span-3 ">Driver Email</div>
            <div className="col-span-2 ">Bus Plate</div>
            <div className="col-span-2 text-center">Action</div>
          </div>

          {/* /* rendering the all operators from the database using this component TableGenerator */}
          <TableGenerator
            // giveMeData={deleteHandleForUpdate}
            // handleDelete={deleteAssignedDriver}
            handleDelete={catchId}
            openDeleteModal={setdeleteModalOpen}
            setOpenModal={setModalOpen}
            Data={Datas}
            loading={loading}
            error={error}
          />
        </div>
        <Toaster className="w-1/3" />
      </Admin>
    </>
  );
};

export default AssignDriversToBuses;
