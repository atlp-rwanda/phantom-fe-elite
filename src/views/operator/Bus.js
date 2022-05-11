/** @format */

import React from "react";
import { useState, useEffect } from "react";
import Admin from "../../component/layout/Layout";
import { RiAddCircleLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import NewBusModal from "../../component/NewBusModal";
import EditBusModal from "../../component/EditBusModal";
const Bus = () => {
	const [busData, setBusData] = useState(null);
	// modal toggle
	function toggleModal() {
		document.getElementById("newBusModal").classList.toggle("hidden");
	}
	function toggleEditModal() {
		document.getElementById("editBusModal").classList.toggle("hidden");
	}
	// Retrieve all Buses
	const allBuses = () => {
		fetch(`http://localhost:7000/buses`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setBusData(data);
			});
	};
	// Delete Bus
	const deleteBus = (busId) => {
		fetch(`http://localhost:7000/buses/` + busId, {
			method: "DELETE",
		}).then(() => {
			allBuses();
		});
	};
	// render data on start
	useEffect(() => {
		allBuses();
	}, []);

	return (
		<>
			<Admin>
				<div className="flex justify-center sm:justify-start md:justify-center lg:justify-start ">
					<div className="m-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-[90px]">
						Bus
					</div>
				</div>
				<div className="flex flex-row justify-between sm:justify-start md:justify-evenly lg:justify-start items-center my-3">
					<div
						onClick={() => toggleModal()}
						className="bg-darkBluePhant cursor-pointer p-1 sm:px-0 sm:p-2 rounded-md font-bold text-white flex items-center justify-evenly w-1/2 sm:w-1/6 md:w-2/6 xl:w-1/6">
						<RiAddCircleLine className="text-white text-xl sm:text-2xl" />
						<button>Add New Bus</button>
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
				<div className="grid grid-cols-12 border-b-2 border-black font-bold border-solid">
					<div className="col-span-1">No</div>
					<div className="col-span-3 ">Bus Number</div>
					<div className="col-span-3 ">Bus Plate</div>
					<div className="col-span-3 ">Routes</div>
					<div className="col-span-2 ">Actions</div>
				</div>
				<div className="overflow-auto ">
					{busData &&
						busData.map((bus) => (
							<div
								className="grid grid-cols-12 border-b border-black border-solid"
								key={bus.id}>
								<div className="col-span-1 pl-1">{bus.id}</div>
								<div className="col-span-3 pl-1">{bus.busNumber}</div>
								<div className="col-span-3 pl-1">{bus.busPlate}</div>
								<div className="col-span-3 pl-2">{bus.routes}</div>
								<div className="col-span-2 py-1 pl-3 flex justify-between w-full px-4">
									<FiEdit
										className=" w-full h-12 md:w-8 md:h-8 lg:w-4 lg:h-4 cursor-pointer"
										onClick={() => toggleEditModal()}
									/>
									&nbsp;
									<RiDeleteBin6Line
										className=" text-red-500 w-full h-12 md:w-8 md:h-8 lg:w-5 lg:h-5 cursor-pointer"
										onClick={() => deleteBus(bus.id)}
									/>
								</div>
							</div>
						))}
				</div>

				{/* Modal section */}
				<NewBusModal />
				<EditBusModal />
			</Admin>
		</>
	);
};

export default Bus;
