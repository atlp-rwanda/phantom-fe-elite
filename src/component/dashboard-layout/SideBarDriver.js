/** @format */

import { VscCompass } from "react-icons/vsc";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { FaRoute } from "react-icons/fa";
import { MdAltRoute } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import React from "react";

const SideBarDriver = () => {
	return (
		<aside className="bg-white sm:col-start-1 sm:col-end-3 md:col-end-4 lg:col-end-3 hidden sm:block text-black row-span-full border-r-2 border-solid border-[#f3f3f3]">
            <Link to='/'>

			<img src={logo} className="mx-7 mt-3" />
            </Link>
			<br />
			<p className="text-xl tracking-wider  m-auto font-bold mt-3 ml-3 mb-2 ">
				Management
			</p>
            <div className="ml-5 flex flex-col gap-4">
            <div className="flex gap-5">
            <FaRoute size={25} className="text-darkBluePhant" />
            <Link to='/driver-journey'>

            <p className="mt-1">Journey</p>
            </Link>
            </div>

            <div className="flex gap-5">
            <AiOutlineSetting size={25} className="text-darkBluePhant" />
            <Link to='/operator'>

            <p className="mt-1">Operator</p>
            </Link>
            </div>
           </div>
		</aside>
	);
};

export default SideBarDriver;
