import React from "react";
import { RiArrowDropDownFill, RiMenuLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import image from "../../../src/assets/FINAL-LOGO.png";
import "../../../src/main.css"

const HeaderUser = ({ setAsideOpen }) => {
  return (
    <header
      id="header-user-view"
      className="bg-white col-start-1 border-solid border-b-4 shadow border-adminFooterBackground lg:col-start-1 col-end-13  row-start-1 row-end-2 lg:row-end-3"
    >
      <section className="w-full flex justify-between items-center h-full px-3 sm:px-10">
        <div className=" hidden lg:block w-[10%]">
          <img className="w-full" src={image} alt="" />
        </div>
        <div
          className="lg:hidden text-black text-2xl"
          onClick={() => {
            setAsideOpen(true);
          }}
        >
          <RiMenuLine />
        </div>
        <form action="" className="hidden sm:block md:w-2/5 lg:w-2/5 h-7 mx-12">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-5/6 sm:h-full pl-2 border-1 border-solid border-[#6C757D] rounded-md"
          />
        </form>
        <div className="flex justify-around w-3/4 md:w-2/5 lg:w-1/4 xl:1/5 items-center h-full">
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
