/** @format */

import React, { useState } from "react";
import { RiArrowDropDownFill, RiMenuLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import MobileHeader from "./MobileHeader";
import Dropdown from "../dashboard-layout/Dropdown";
// import AsideAdminOnPhone from "./AsideAdminOnPhone";

const Header = () => {
	const [asideOpen, setAsideOpen] = useState(false);
	const [open, setopen] = useState(false);
	return (
		<header className="bg-white col-start-1 sm:col-start-3 md:col-start-4 lg:col-start-3 col-end-13  row-start-1 row-end-2">
			{asideOpen && <MobileHeader setAsideOpen={setAsideOpen} />}
			<div className="flex sm:justify-end h-full">
				<section className=" w-full sm:w-1/3 md:w-2/3 lg:w-1/2 xl:w-1/3 flex justify-around sm:justify-between md:justify-around lg:justify-evenly  xl:justify-between items-center h-full">
					<div
						className="sm:hidden text-darkBluePhant text-2xl"
						onClick={() => {
							setAsideOpen(true);
						}}>
						<RiMenuLine />
					</div>
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
							<RiArrowDropDownFill className="text-[50px] text-darkBluePhant" onClick={() => setopen(!open)} />
                            {open && <Dropdown />}
						</div>
					</div>
				</section>
			</div>
		</header>
	);
};

export default Header;
