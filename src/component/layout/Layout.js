/** @format */

import React from "react";
import Footer from "../dashboard-layout/Footer";
import Header from "../dashboard-layout/Header";
import SideBar from "../dashboard-layout/SideBar";

const Layout = ({ children }) => {
	return (
		<div className="grid h-screen w-screen overflow-x-hidden grid-cols-12 grid-rows-12 font-Nunito bg-[#f3f3f3]">
			<Header />
		
			<main className=" flex flex-col col-start-1 sm:col-start-3 md:col-start-4 lg:col-start-3 col-end-13 row-start-2 row-end-12 px-3 mx-0 sm:mx-2  mt-2 bg-white">
				{children}
			</main>
			<SideBar />
			<Footer />
		</div>
	);
};

export default Layout;
