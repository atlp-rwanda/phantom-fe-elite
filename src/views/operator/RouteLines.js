/** @format */

import React from "react";
import Admin from "../../component/layout/Layout";
import { RiAddCircleLine } from "react-icons/ri";
import NewRouteModal from "../../component/NewRouteModal";
import ListHeader from "../../component/new_route/ListHeader";
import ListContent from "../../component/new_route/ListContent";


// modal toggle
function toggleModal() {
	document.getElementById("NewRouteModal").classList.toggle("hidden");
}


const RouteLine = () => {

	return (
		<>
			<Admin>
				<div className="flex justify-center sm:justify-start md:justify-center lg:justify-start ">
					<div className="m-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-[90px]"
					data-testid="head1" >
						Route
					</div>
				</div>
				<div className="flex flex-row justify-between sm:justify-start md:justify-evenly lg:justify-start items-center my-3">
					<div
						onClick={() => toggleModal()}
						className="bg-darkBluePhant cursor-pointer p-1 sm:px-0 sm:p-2 rounded-md font-bold text-white flex items-center justify-evenly w-1/2 sm:w-1/6 md:w-2/6 xl:w-1/6">
						<RiAddCircleLine className="text-white text-xl sm:text-2xl" />
						<button
						data-testid = "newRouteBtn">Add New Route</button>
					</div>
					<form
						action=""
						className="w-1/2 sm:w-2/5 h-10 mx-2 sm:mx-12 md:mx-3 lg:mx-12 sm:flex sm:items-center">
						<input
							type="text"
							placeholder="Search"
							className="w-full h-5/6 sm:h-full pl-2 border-2 border-solid border-[#6C757D] rounded-md"
						/>
					</form>
				</div>
				<ListHeader/>
				<div className="overflow-auto ">
				<ListContent/>
				</div>

				{/* Modal section */}
				<NewRouteModal />
			</Admin>
		</>
	);
};

export default RouteLine;
