/** @format */

import React from "react";
// import Admin from "../../component/layout/Admin";
// import Topview from "./Topview";
import { RiAddCircleLine } from "react-icons/ri";
import logo from "../../assets/images/logo.jpg";
import { VscCompass } from "react-icons/vsc";
import {RiArrowDropDownFill,} from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { FaBus, FaUserCircle } from "react-icons/fa";
import { MdAltRoute } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import Topview from "./Topview";
import BusRoutedata from "./BusRoutedata";


const AdminView = () => {
	return (
		<div className="grid h-screen w-screen grid-cols-12 grid-rows-12 font-Nunito bg-[#f3f3f3]">
			<header className="bg-white col-start-3 col-end-13  row-start-1 row-end-2">
				<div className="flex justify-end h-full">
					<section className="w-1/3 flex justify-between items-center h-full">
						<div className="flex items-center">
							<div className="font-black text-xl">EN</div>
							<RiArrowDropDownFill className="text-4xl" />
							<IoMdNotifications className="text-4xl" />
						</div>
						<div className="flex items-center border-l-2 border-solid border-black h-full">
							<FaUserCircle className="text-[40px] bg-white text-darkBluePhant mx-3 my-1" />
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
			
			<main className=" flex flex-col col-start-3 col-end-13 row-start-2 row-end-12 mx-2 mt-2 bg-white">
			<Topview/>
			<BusRoutedata />
				
			</main>
			<aside className="bg-white col-start-1 col-end-3 text-black row-span-full border-r-2 border-solid border-[#f3f3f3]">
				<img src={logo} className="mx-7 mt-3" />
				<br />
				<div className=" tracking-wider mt-8 ml-5 flex justify-start gap-5 ">
					<VscCompass className="text-[26px]" />
					<p className="ml-1">Map overview</p>
				</div>
				<p className="text-xl tracking-wider  m-auto font-bold mt-3 ml-3 mb-2 ">
					Management
				</p>
				<div className="ml-5 flex flex-col gap-4">
					<div className="flex gap-5">
						<MdAssignmentTurnedIn size={25} className="mt-1 " />
						<p className="ml-1">Bus</p>
					</div>
					<div className="flex gap-5 ">
						<FaBus size={25} className="mt-1 " />
						<p className="ml-1">Route</p>
					</div>
					<div className="flex gap-5">
						<MdAltRoute size={25} className="mt-1 " />
						<p className="ml-1">Driver</p>
					</div>

					<div className="flex gap-5">
						<AiOutlineSetting size={25} className="mt-1 darkBluePhant" />
						<p className="ml-1">Operator</p>
					</div>
				</div>
			</aside>
		
		</div>
	);
		
};

export default AdminView;
