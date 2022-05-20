// import { useState, useEffect } from "react";

import React, { useEffect, useState } from "react";
// modal toggle
function toggleUpdate() {
  document.getElementById("UpdateRouteLine").classList.toggle("hidden");
}

const UpdateRouteLine = ({ update,setDataFetched }) => {
	useEffect(()=>{
		// alert(JSON.stringify(update));
	},[update])

const originUpdate=update.origin;
const destinationUpdate = update.destination
const [origin, setOrigin] = useState("");
const [destination, setDestination] = useState("");



  const handleChangeOrigin = (event) => {
    setOrigin(event.target.value);
  };
  const handleChangeDest = (event) => {
    setDestination(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
	toggleUpdate();
    newData({
      origin: originUpdate,
      destination: destinationUpdate,
    });
  };

  const setOutModal = () => {
	  setOrigin("");
	setDataFetched();
  }


  return (
    <div
      className="fixed z-10 overflow-y-auto top-0 w-full left-0 "
      id="UpdateRouteLine"
    >
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
                Update Route
              </div>
              <label className="font-semibold">Origin</label>
              <input
                type="text"
                id="origin"
                name="origin"
                data-testid="busName-input"
                onChange={handleChangeOrigin}
                defaultValue = {`${originUpdate}`}
                // value={formik.values.origin}
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
                defaultValue={`${destinationUpdate}`}

                placeholder="Destination"
                className="w-full bg-gray-100 p-2 mt-2 mb-3"
              />
   
            </div>
            <div className="bg-gray-200 px-4 py-3 text-left">
              <button
                type="button"
                data-testid="backBtn"
                className="py-2 px-4 bg-green-600 text-white rounded hover:bg-gray-700 mr-2"
                onClick={setOutModal}
              >
                <i className="fas fa-times"></i> Back
              </button>
              <button
                type="submit"
                data-testid="updateBtn"
                className="py-2 px-4 bg-textBluePhant text-white rounded hover:bg-textBluePhant mr-2"
              >
                <i className="fas fa-plus"></i> Update Route
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateRouteLine;