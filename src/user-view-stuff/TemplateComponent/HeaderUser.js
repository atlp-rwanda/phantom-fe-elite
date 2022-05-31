import React from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import image from "../../../src/assets/FINAL-LOGO.png";
import "../../../src/main.css"

const HeaderUser = () => {  
  return (
    <header
      id="header-user-view"
      className="bg-white col-start-1 sm:col-start-3 md:col-start-4 border-solid border-b-4 shadow border-adminFooterBackground lg:col-start-1 col-end-13  row-start-1 row-end-3"
    >
      <section className="w-full flex justify-between items-center h-full px-10">
        <div className="w-[10%]">
          <img className="w-full" src={image} alt="" />
        </div>
        <form
          action=""
          className="w-1/3 sm:w-2/5 h-7 mx-2 sm:mx-12 md:mx-3 lg:mx-12 sm:flex sm:items-center"
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full h-5/6 sm:h-full pl-2 border-1 border-solid border-[#6C757D] rounded-md"
          />
        </form>
        <div className="flex justify-around w-1/5 items-center h-full">
          <FaUserCircle className="text-[30px] sm:text-[40px] bg-white text-darkBluePhant my-1" />
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

export default HeaderUser;
