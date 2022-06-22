/** @format */

import React from "react";
import Admin from "../../component/layout/admin";
import { RiAddCircleLine } from "react-icons/ri";

const Operator = () => {
  return (
    <>
      <Admin>
        <div className="my-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-[90px]">
          Operator
        </div>
        <div className="flex flex-row items-center my-3">
          <button className="bg-darkBluePhant p-2 rounded-md font-bold text-white flex items-center justify-between w-fit">
            <RiAddCircleLine className="text-white text-2xl" />
            <div>Add New Operator</div>
          </button>
          <form action="" className="w-2/5 h-10 mx-12">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full pl-2 border-2 border-solid border-[#6C757D] rounded-md"
            />
          </form>
        </div>
        <div className="grid grid-cols-12 border-b-2 border-black font-bold border-solid">
          <div className="col-span-1">No</div>
          <div className="col-span-3 ">Operator Name</div>
          <div className="col-span-3 ">Operator Email</div>
          <div className="col-span-3 ">Operator Routes</div>
          <div className="col-span-2 ">Actions</div>
        </div>
        <div className="overflow-auto "></div>
      </Admin>
    </>
  );
};

export default Operator;
