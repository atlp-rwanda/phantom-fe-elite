import { VscCompass } from "react-icons/vsc";
import { FaBus } from "react-icons/fa";
import { MdAltRoute } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { VscSymbolProperty } from "react-icons/vsc";
import logo from "../../assets/images/logo.jpg";
import React from "react";
import { Link } from "react-router-dom";

const AsideAdmin = () => {
  return (
    <aside className="bg-white sm:col-start-1 sm:col-end-3 md:col-end-4 lg:col-end-3 hidden sm:block text-black row-span-full border-r-2 border-solid border-[#f3f3f3]">
      <Link to='/'>

      <img src={logo} className="mx-7 mt-3" />
      </Link>
      <br />
      <div className="text-xl tracking-wider m-auto font-semibold mt-8 ml-3 mb-3 flex justify-evenly">
        <VscCompass className="text-[26px] text-darkBluePhant" />
        <p>Map overview</p>
      </div>
      <p className="text-xl tracking-wider  m-auto font-bold mt-3 ml-3 mb-2 ">
        Management
      </p>
      <div className="flex flex-col">
        <div className="flex pl-5  gap-5 py-2 hover:bg-[#f3f3f3] w-full">
          <Link to="/operator-bus" className="flex ">
            <FaBus size={25} className="mt-1 text-darkBluePhant " />
            <p className="ml-1 px-3 hover:bg-[#f3f3f3] w-full">Bus</p>
          </Link>
        </div>
        <div className="flex pl-5  gap-5 py-2 hover:bg-[#f3f3f3] w-full">
          <Link to="/operator-routes" className="flex">
            <MdAltRoute size={25} className="mt-1 text-darkBluePhant" />
            <p className="ml-1 px-3">Route</p>
          </Link>
        </div>
        <div className="flex pl-5  gap-5 py-2 hover:bg-[#f3f3f3] w-full">
          <Link to="/create-driver" className="flex">
            <GiGearStickPattern
              size={25}
              className="mt-1 text-darkBluePhant "
            />
            <p className="ml-1 px-3">Driver</p>
          </Link>
        </div>
        <div className="flex pl-5  gap-5 py-2 hover:bg-[#f3f3f3] w-full">
          <Link to="/operator" className="flex">
            <VscSymbolProperty size={25} className="mt-1 text-darkBluePhant " />
            <p className="ml-1 px-3">Operator</p>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default AsideAdmin;
