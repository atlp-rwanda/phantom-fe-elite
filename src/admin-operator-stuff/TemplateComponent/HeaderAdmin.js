import React from 'react'
import {
  RiArrowDropDownFill,
} from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { FaBus, FaUserCircle } from "react-icons/fa";

const HeaderAdmin = () => {
  return (
    <header className="bg-white col-start-1 sm:col-start-3 md:col-start-4 lg:col-start-3 col-end-13  row-start-1 row-end-2">
      <div className="flex sm:justify-end h-full">
        <section className=" w-full sm:w-1/3 md:w-2/3 lg:w-1/2 xl:w-1/3 flex justify-around sm:justify-between md:justify-around lg:justify-evenly  xl:justify-between items-center h-full">
          <div className="flex items-center">
            <div className="font-black text-xl">EN</div>
            <RiArrowDropDownFill className="text-2xl sm:text-4xl" />
            <IoMdNotifications className="text-2xl sm:text-4xl" />
          </div>
          <div className="flex items-center border-l-2 border-solid border-black h-full">
            <FaUserCircle className="text-[30px] sm:text-[40px] bg-white text-darkBluePhant mx-3 my-1" />
            <div className="flex">
              <div className="flex flex-col">
                <div className="font-black text-lg">Andela Rwanda</div>
                <div className="font-gray-400">User</div>
              </div>
              <RiArrowDropDownFill className="text-[50px] text-darkBluePhant" />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default HeaderAdmin
