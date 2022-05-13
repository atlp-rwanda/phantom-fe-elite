/** @format */

import React, { useState, useEffect } from "react";
// import Admin from "../../component/layout/admin";
import Admin from "../../component/layout/Layout"
import { RiAddCircleLine } from "react-icons/ri";
import Modal from "../../component/Modal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import api from '../../api/driver'
import { v4 as uuidv4 } from 'uuid';
import { async } from "regenerator-runtime";
import { Link } from "react-router-dom"
const UpdateDriver = () => {
	const [driverData, setDriverData] = useState(null);
  const [open, setOpen] = useState(true);

// RetrieveDrivers
const RetrieveDrivers = async()=>{
	const response = await api.get('/driver');
	return response.data;
}



// const removeContactHandler = async(driverId)=>{
//     await api(`/driver/`+ driverId,{
//      method:"DELETE",
// }).then(()=>{
// 	RetrieveDrivers()
// })
//   }
  useEffect(()=>{
	  const getAllDrivers = async()=>{
		  const allDrivers = await RetrieveDrivers();
		  if(allDrivers) setDriverData(allDrivers);
	  };
	  getAllDrivers();

  },[]);

  return (
    <>
      <Admin>
        <div className="bg-whitePhant ">
          <div className="mt-2 h-full">
            <div className="my-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-[60px]">
              Driver
            </div>
            <div className="flex flex-row items-center my-3">
              <button
                className="bg-darkBluePhant p-2 rounded-md font-bold text-white flex items-center justify-between w-fit"
                onClick={() => setOpen(!open)}
                title="button"

              >
                <RiAddCircleLine className="text-white text-2xl" />
                <div>Add New Driver</div>
              </button>
              <Modal open={open} setOpen={setOpen}>
                <div className="my-2 font-black text-md border-b-2 border-solid border-darkBluePhant w-[50px]">
                  <h3 className="inline">Create Driver</h3>
                </div>
              </Modal>
              <form action="" className="w-2/5 h-10 mx-12">
                <input
                  type="text"
                  title="input"
                  placeholder="Search"
                  className="w-full h-full pl-2 border-2 border-solid border-[#6C757D] rounded-md"
                />
              </form>
            </div>
            <div className="overflow-auto rounded-lg shadow ">

            <div className="grid grid-cols-12 border-b-2 border-black font-bold border-solid ">
              <div className="  p-3 col-span-1">No</div>
              <div className=" p-3 col-span-2 ">Name</div>
              <div className=" p-3 col-span-2 ">Driver ID</div>
              <div className=" p-3 col-span-2 ">License</div>
              <div className=" p-3 col-span-2  ">Mobile Number</div>
              <div className=" p-3 col-span-2 ">Route</div>
              <div className=" p-3 col-span-1  ">Action</div>
            </div>
            <div className=" ">
			 {driverData &&
						driverData.map((driver) => (
							<div
								className="grid grid-cols-12 border-b border-black border-solid"
								key={driver.id}>
								<div className="whitespace-nowrap p-3 col-span-1 pl-1">{driver.id}</div>
								<div className="whitespace-nowrap p-3 col-span-2 pl-2">{driver.name}</div>
								<div className="whitespace-nowrap p-3 col-span-2 pl-2">{driver.driverId}</div>
								<div className="whitespace-nowrap p-3 col-span-2 pl-2">{driver.license}</div>
								<div className="whitespace-nowrap p-3 col-span-2 pl-2 ">{driver.mobileNumber}</div>
								<div className="whitespace-nowrap p-3 col-span-2 pl-2 ">{driver.route}</div>
								<div className="whitespace-nowrap p-3  col-span-1 py-1  pl-2 flex justify-between">
									<FiEdit className=" w-4 h-4 text-sky-500 cursor-pointer" />
									<RiDeleteBin6Line
                    role='delete'
										className=" text-red-500 w-5 h-5 cursor-pointer"
										// onClick={() => removeContactHandler(driver.id)}
									/>
								</div>
							</div>
						))}
            </div>
			</div>
          </div>
        </div>
      </Admin>
    </>
  );
};

export default UpdateDriver;