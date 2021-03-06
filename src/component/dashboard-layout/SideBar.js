/** @format */

import { VscCompass } from "react-icons/vsc";
import { FaBus, FaRoute } from "react-icons/fa";
import { MdAltRoute } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi"
import { VscSymbolProperty } from "react-icons/vsc"
import { MdAssignmentTurnedIn } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai"
import logo from "../../assets/images/logo.jpg";

import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
	return (
    <aside className="bg-white sm:col-start-1 sm:col-end-3 md:col-end-4 lg:col-end-3 hidden sm:block text-black row-span-full border-r-2 border-solid border-[#f3f3f3]">
      <img src={logo} className="mx-7 mt-3" />
      <br />
      <div className="tracking-wider mt-8 ml-5 flex justify-start gap-5">
        <VscCompass className="text-[26px] text-darkBluePhant" />
        <p>Map overview</p>
      </div>
      <p className="text-xl tracking-wider  m-auto font-bold mt-3 ml-3 mb-2 ">
        Management
      </p>
      <div className="ml-5 flex flex-col gap-4">
      <div className="flex gap-5">
				    <MdAssignmentTurnedIn size={25} className="mt-1 text-darkBluePhant " />
					<Link to='/operator-assign' >

					<p className="ml-1 mt-1">Assign</p>
					</Link>
				</div>
				<div className="flex gap-5 ">
			        <FaBus size={25} className="mt-1 text-darkBluePhant " />
					<Link to='/operator-bus'>

					<p className="ml-1 mt-1">Bus</p>
					</Link>
				</div>
				<div className="flex gap-5">
					<Link to='/driver-journey'>

					<FaRoute size={25} className="mt-1 text-darkBluePhant " />
					</Link>
					<Link to="/operator-routes">
						<p className="ml-1 mt-1">Routes</p>
					</Link>
				</div>
				<div className="flex gap-5">
					<Link to='/driver-map'>
					<MdAltRoute size={25} className="mt-1 text-darkBluePhant " />
					</Link>
					<Link to="/create-driver">
						<p className="ml-1">Driver</p>
					</Link>
				</div>

				<div className="flex gap-5">
				<Link to="/operator">
                <VscSymbolProperty size={25} className="mt-1 text-darkBluePhant " />
                </Link>
				<Link to="/operator">
						<p className="ml-1">Operator</p>
				</Link>
				</div>
      </div>
    </aside>
  );
};

export default SideBar;
