import React, { useState, useEffect } from "react";
import api from "./../api/driver";
import { v4 as uuidv4 } from "uuid";
import { async } from "regenerator-runtime";
import driver from "./../api/driver";

const Modal = ({ open, setOpen, children }) => {
  const [driverData, setDriverData] = useState(null);

  // AddDriverHandler
  const addDriverHandler = async (e, driver) => {
    e.preventDefault();
    console.log(driver);
    const request = {
      id: uuidv4(),
      ...driver,
    };
    const response = await api.post("/driver", request);
    console.log(response)
    setDriverData([...driver, response.data]);
  };

  const removeContactHandler = async()=>{
    await api.delete(`/driver/${id}`);
    const newDriverList = driver.filter((driver)=>{
      return driver.id;
    });
  }
  return (
    <>
      {open && (
        <div className="w-[100vw] h-[100vh] bg-black/20 absolute z-10 overflow-y-auto ">
          <div className="flex items-center justify-center min-height-100vh mt-80 ml-4 pt-4 px-4 pb-2 text-center sm:block sm:p-0 ">
            <div
              className="w-full py-[15px] px-[15px] space-y-4"
            >
               
              <div className="inline-block align-center  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <form className="">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex flex-row my-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-fit">
								Create Driver
							</div>
                  <label>Full Names</label>
                  <input
                    type="text"
                    className="w-full px-4 py-0.5 text-sm leading-tight text-gray-700 bg-gray-100 border my-0.5  border-textBluePhant rounded"
                    placeholder="Full Names"
                  />
                  <label>Driver ID</label>
                  <input
                    type="text"
                    className="w-full px-4 py-0.5 text-sm leading-tight text-gray-700 border bg-gray-100 my-0.5  border-textBluePhant rounded"
                    placeholder="Driver ID"
                  />
                  <label>License</label>
                  <input
                    type="text"
                    className="w-full px-4 py-0.5 text-sm leading-tight text-gray-700 border bg-gray-100 my-0.5  border-textBluePhant rounded"
                    placeholder="License"
                  />
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-0.5 text-sm leading-tight text-gray-700 border bg-gray-100 my-0.5  border-textBluePhant rounded"
                    placeholder="Mob Number"
                  />
                  <label>Route</label>
                  <select
                    name="route"
                    className="w-full px-4 py-0.5 text-sm leading-tight text-gray-700 border bg-gray-100 my-0.5  border-textBluePhant rounded"
                    placeholder=" Select Route"
                  >
                    <option defaultValue>Choose a Route</option>
                    <option value="Kimironko">Kimironko-DownTown</option>
                    <option value="Nyamirambo">Nyamirambo-DownTown</option>
                    <option value="Kimisagara">Kimisagara-DownTown</option>
                    <option value="Karuruma">Karuruma-DownTown</option>
                    <option value="Kabuga">Kabuga-DownTown</option>
                    <option value="Kabeza">Kabeza-DownTown</option>
                  </select>
                  <div className="overflow-auto ">
                    {driverData &&
                      driverData.map((driver) => (
                        <div
                          className="grid grid-cols-12 border-b border-black border-solid"
                          key={driver.id}
                        >
                          <div className="col-span-1 pl-1">{driver.id}</div>
                          <div className="col-span-2 pl-2">{driver.name}</div>
                          <div className="col-span-2 pl-2">
                            {driver.driverId}
                          </div>
                          <div className="col-span-2 pl-2">
                            {driver.license}
                          </div>
                          <div className="col-span-2 pl-2">
                            {driver.mobileNumber}
                          </div>
                          <div className="col-span-2 pl-2">{driver.route}</div>
                          <div className="col-span-1 py-1 pl-2 flex justify-between w-1/2">
                            <FiEdit className=" w-4 h-4 text-sky-500" />
                            <RiDeleteBin6Line
                              className=" text-red-500 w-5 h-5 cursor-pointer"
                              onClick={() => removeContactHandler(driver.id)}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="justify-between space-y-4 space-x-4">
                    <button
                      className="bg-green-500 text-white px-[5px] rounded-[5px] text-[0.8em]"
                      onClick={() => setOpen(false)}
                    >
                      Back
                    </button>
                    <button
                      className="bg-sky-600 text-white px-[5px] rounded-[5px] text-[0.8em]"
                      onClick={addDriverHandler}
                    >
                      <i className="fas fa-plus"></i>Save Driver
                    </button>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;