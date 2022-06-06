/** @format */

import React, { useEffect, useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import Footer from "../dashboard-layout/Footer";
import Header from "../dashboard-layout/Header";
import SideBarDriver from "../dashboard-layout/SideBarDriver";

const Driverlayout=({ children })=> {
	return (
		<div className="grid h-screen w-screen overflow-x-hidden grid-cols-12 grid-rows-12 font-Nunito bg-[#f3f3f3]">
			<Header />
			<main className=" flex flex-col col-start-1 sm:col-start-3 md:col-start-4 lg:col-start-3 col-end-13 row-start-2 row-end-12 px-3 mx-0 sm:mx-2  mt-2 bg-white">
				{children}
			</main>
			<SideBarDriver />
			<Footer/>
		</div>
	);
}
export default Driverlayout;
