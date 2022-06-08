import React from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import image from "../../../src/assets/FINAL-LOGO.png";
import "../../../src/main.css"

const HeaderUserPlan = () => {  
  return (
    <header id="header-user-view" className="bg-white col-start-1 col-end-13 border-solid border-b-4  row-start-1 row-end-3">
      <section className="w-full flex justify-between items-center h-full px-10">
        <div className="w-[10%]">
          <img className="w-full" src={image} alt="" />
        </div>
        <form
          action=""
          className="w-1/3 h-7"
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full h-5/6 border-1 border-solid border-[#6C757D] rounded-md"
          />
        </form>
        <div className="flex justify-around w-1/5 items-center h-full">
          <FaUserCircle className="text-[30px] bg-white text-darkBluePhant w-26 h-26"/>
          <div className="flex">
            <div className="flex flex-col">
              <div className="font-black text-lg">Andela Rwanda</div>
              <div className="font-gray-400">User</div>
            </div>
            <RiArrowDropDownFill className="text-[50px] text-darkBluePhant" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeaderUserPlan;
