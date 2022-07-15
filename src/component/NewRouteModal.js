/** @format */
import { useState, useEffect } from "react";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewRouteModal = ({ newData, setModalOpen, isModalOpen }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    if (!isModalOpen) {
      setOrigin("");
      setDestination("");
    }
  }, [isModalOpen]);

  function toggleModal() {
    setModalOpen();
  }

  const handleChangeOrigin = (event) => {
    setOrigin(event.target.value);
  };
  const handleChangeDest = (event) => {
    setDestination(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    newData({
      origin: origin,
      destination: destination,
    });
  };

  const saveRoute = (e) => {
    e.preventDefault();

    toast.success("Route Saved !!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div
      className="fixed z-10 overflow-y-auto top-0 w-full left-0"
      id="NewRouteModal"
      data-testid="NewRouteModal"
    >
      <ToastContainer />
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <form onSubmit={handleSubmit}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex flex-row my-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-fit">
                Register Route
              </div>
              <label className="font-semibold">Origin</label>
              <input
                type="text"
                id="origin"
                name="origin"
                data-testid="busName-input"
                onChange={handleChangeOrigin}
                value={origin}
                placeholder="Origin"
                className="w-full bg-gray-100 p-2 mt-2 mb-3"
              />
              <label className="font-semibold">Destination</label>
              <input
                type="text"
                name="destination"
                id="destination"
                data-testid="busPlate-input"
                onChange={handleChangeDest}
                value={destination}
                placeholder="Destination"
                className="w-full bg-gray-100 p-2 mt-2 mb-3"
              />
            </div>
            <div className="bg-gray-200 px-4 py-3 text-left">
              <button
                type="button"
                className="py-2 px-4 bg-gray-600 text-white rounded hover:bg-gray-700 mr-2"
                onClick={() => {
                  toggleModal();
                }}
                data-testid="backBtn"
              >
                <i className="fas fa-times"></i> Back
              </button>
              <button
                type="submit"
                data-testid="saveBtn"
                onClick={(e) => saveRoute()}
                className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
              >
                <i className="fas fa-plus"></i> Save Route
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewRouteModal;
