import { VscCompass } from "react-icons/vsc";
import { FaBus } from "react-icons/fa";
import { MdAltRoute } from "react-icons/md";
import logo from "../../assets/images/logo.jpg";
import { RiCloseFill } from "react-icons/ri";
import { GiGearStickPattern } from "react-icons/gi";
import { VscSymbolProperty } from "react-icons/vsc";

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AsideAdminOnPhone = ({ setAsideOpen }) => {
  let sideRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!sideRef.current.contains(event.target)) {
        setAsideOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.addEventListener("mousedown", handler);
    };
  });
  return (
    <aside
      className="bg-white w-4/6 h-full absolute text-black row-span-full border-2 border-solid border-[#f3f3f3] pb-4"
      ref={sideRef}
    >
      <div className="flex mx-3 justify-between items-center ">
        <img src={logo} className=" mt-3" />
        <RiCloseFill
          className="m-3 text-4xl"
          onClick={() => {
            setAsideOpen(false);
          }}
        />
      </div>
      <br />
      <div className="text-xl tracking-wider m-auto font-semibold my-1 ml-3 flex justify-evenly">
        <VscCompass className="text-[30px]" />
        <p>Map overview</p>
      </div>
      <p className="text-xl tracking-wider  m-auto font-bold mt-3 ml-3 mb-2 ">
        Management
      </p>
      <div className="ml-5 flex flex-col gap-4">
        <div className="flex gap-5">
          <FaBus size={25} className="mt-1 text-darkBluePhant " />
          <Link to="/operator-bus">
            <p className="ml-1">Bus</p>
          </Link>
        </div>
        <div className="flex gap-5 ">
          <MdAltRoute size={25} className="mt-1 text-darkBluePhant " />
          <Link to="/route">
            <p className="ml-1">Route</p>
          </Link>
        </div>
        <div className="flex gap-5">
          <GiGearStickPattern size={25} className="mt-1 text-darkBluePhant " />
          <Link to="/driver">
            <p className="ml-1">Driver</p>
          </Link>
        </div>
        <div className="flex gap-5">
          <VscSymbolProperty size={25} className="mt-1 text-darkBluePhant " />
          <Link to="/operator">
            <p className="ml-1">Operator</p>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default AsideAdminOnPhone;
