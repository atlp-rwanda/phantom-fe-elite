// import { useState, useEffect } from "react";


import React, { useEffect, useState } from "react";
import axios from "axios";

// modal toggle
function toggleUpdate() {
  document.getElementById("UpdateRouteLine").classList.toggle("hidden");
}

const UpdateRouteLine = ({ update,setDataFetched, setRoutes }) => {
  
  const [updated, setUpdated] = useState({origin:'', destination:''});



  // useEffect(()=>{

	// },[update])




let originUpdate=update.origin;
let destinationUpdate = update.destination

// const [modal,setModal] = useState(false);

  const handleChangeUpdate = (event) => {
    const {name, value} = event.target
    setUpdated(prevFormData => {
      return {
          ...prevFormData,
          [name]: value
      }
      });
  };

  const updateHandle = async () => {
    try {
      const renewed = await axios.patch(`http://localhost:7000/routes/${update.id}`, updated);
      const allData = await axios.get("http://localhost:7000/routes");
      setRoutes(allData.data);
      setDataFetched();
    } catch (error) {
    }
  };





  const handleSubmit = (event) => {
    event.preventDefault();
    updateHandle();
  };


  const setOutModal = () => {
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
                onChange={handleChangeUpdate}
                defaultValue = {`${originUpdate}`}
                placeholder="Origin"
                className="w-full bg-gray-100 p-2 mt-2 mb-3"
              />

              <label className="font-semibold">Destination</label>
              <input
                type="text"
                name="destination"
                id="destination"
                data-testid="busPlate-input"
                onChange={handleChangeUpdate}
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