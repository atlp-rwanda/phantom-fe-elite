import React from "react";
import busImage from "../assets/admin-panel/emojione_oncoming-bus.jpg";
import driversImage from "../assets/admin-panel/healthicons_truck-driver-outline.jpg";
import { FaRoute } from 'react-icons/fa';
 import { AiOutlineUser } from 'react-icons/ai';
function Topview() {
  return (
    <div title="alltypes">
      <div className="bg-[#f3f3f3] pb-3 px-2 text-Nunito grid ">
        <div className="p-4 md:px-0 grid  gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className=" bg-white rounded-md  justify-between p-2">
            <h1>
              <strong>Buses </strong>
              <span className=" text-Nunito text-sm ">
                All buses
              </span>
            </h1>
            <div className="flex flex-row gap-3 p-2 ">
              <img src={busImage} alt="image1"></img>
              <p className="text-5xl mr-5 mt-5">40</p>
            </div>
          </div>

          <div className=" bg-white rounded-md p-2 ">
            <h1>
              <strong>Driver </strong>
              <span className=" text-Nunito text-sm ">
                All drivers
              </span>
            </h1>
            <div className="flex flex-row gap-3 p-2 ">
            <img src={driversImage} alt="image1"></img>
              <p className="text-5xl mr-5 mt-5">40</p>
            </div>
          </div>

          <div className=" bg-white rounded-md  p-2">
            <h1>
              <strong>Router </strong>
              <span className=" text-Nunito text-sm text-third-text3">
                All routes
              </span>
            </h1>
            <div className="flex flex-row gap-3 p-2 ">
            <FaRoute  className="text-6xl  mt-3 mr-6 text-sky-200"/>
              <p className="text-5xl mr-5 mt-5">40</p>
            </div>
          </div>

          <div className=" bg-white rounded-md p-2">
            <h1>
              <strong>Users </strong>
              <span className=" text-Nunito text-sm text-third-text3">
                All users
              </span>
            </h1>
            <div className="flex flex-row gap-3 p-2 ">
            <AiOutlineUser className="text-7xl  mt-3 mr-6 text-sky-200"/>
              <p className="text-5xl mr-5 mt-5">40</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Topview;
