/** @format */

import React, { useState } from "react";
import { RiArrowDropDownFill, RiMenuLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import MobileHeader from "./MobileHeader";
import { createPopper } from '@popperjs/core';

// import AsideAdminOnPhone from "./AsideAdminOnPhone";

const Header = () => {
		//------ popup setup----------------
		const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
		const btnDropdownRef = React.createRef();
		const popoverDropdownRef = React.createRef();
		const openDropdownPopover = () => {
			createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
			placement: "bottom-start"
			});
			setDropdownPopoverShow(true);
		};
		const closeDropdownPopover = () => {
			setDropdownPopoverShow(false);
		};
		// ---------------logout function-------------------
		const logout = () =>{
			location.href = '/login'
			const user = localStorage.getItem("user-info")
			this.token_info = JSON.parse(user).token_info
			if (token_info) {
				localStorage.removeItem('token_info')
				location.href = '/login'
			}
		}
	const [asideOpen, setAsideOpen] = useState(false);
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
					<div className="flex items-center border-l-2 border-solid border-black h-full" ref={btnDropdownRef} onClick={() => { dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();}}>
							<FaUserCircle className="text-[40px] bg-white text-darkBluePhant mx-3 my-1" />
							<div className="flex">
								<div className="flex flex-col">
									<div className="font-black">Andeela Rwanda</div>
									<div className="font-gray-400">User</div>
								</div>
								<RiArrowDropDownFill className="text-[50px] text-darkBluePhant" />
							</div>
						</div>
					<div ref={popoverDropdownRef} className={ (dropdownPopoverShow ? "block " : "hidden ")} >
						<div className="z-10 bg-white self-end shadow w-44">
							<ul class="py-1 text-sm text-gray-700" aria-labelledby="dropdownDefault">
							<li>
								<a href="#" className="block px-4 py-2 font-bold">Settings</a>
							</li>
							<li>
								<a className="block px-4 py-2 font-bold" onClickCapture={logout} href="#">Logout</a>
							</li>
							</ul>
						</div>
        			</div>
				</section>
			</div>
		</header>
	);
};

export default Header;
