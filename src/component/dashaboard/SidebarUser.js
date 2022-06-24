/** @format */

import { VscCompass } from "react-icons/vsc";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdAltRoute } from "react-icons/md";
import { FaBus,FaRoute } from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"
import logo from "../../assets/images/logo.jpg";

import React from "react";
import { Link } from "react-router-dom";

const SidebarUser = () => {
	return (
		<aside className="bg-white sm:col-start-1 sm:col-end-3 md:col-end-4 lg:col-end-3 hidden sm:block text-black row-span-full border-r-2 border-solid border-[#f3f3f3]">
			<Link to='/'>

			<img src={logo} className="mx-7 mt-3" />
			</Link>
			<br />
			<p className="text-xl tracking-wider  m-auto font-bold mt-3 ml-3 mb-2 ">
				User View
			</p>
			<div className="ml-5 flex flex-col gap-4">
				<div className="flex gap-5">
				    <MdAssignmentTurnedIn size={25} className="mt-1 text-darkBluePhant " />
					<Link to='/User-plan' >

					<p className="ml-1 mt-1">User Plan</p>
					</Link>
				</div>
			</div>
		</aside>
	);
};

export default SidebarUser;
