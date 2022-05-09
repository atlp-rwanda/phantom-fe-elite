/** @format */

import React from "react";
import { useState, useEffect } from "react";
import Admin from "../../component/layout/Layout";
import { RiAddCircleLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
const Bus = () => {
	const [busData, setBusData] = useState(null);
	// modal toggle
	function toggleModal() {
		document.getElementById("modal").classList.toggle("hidden");
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
	const deleteTask = (busId) => {
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
								<div className="col-span-2 py-1 pl-3 flex justify-between w-1/2">
									<FiEdit className=" w-4 h-4" />
									<RiDeleteBin6Line
										className=" text-red-500 w-5 h-5 cursor-pointer"
										onClick={() => deleteTask(bus.id)}
									/>
								</div>
							</div>
						))}
				</div>

				{/* Modal section */}
				<div
					className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
					id="modal">
					<div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<div className="fixed inset-0 transition-opacity">
							<div className="absolute inset-0 bg-gray-900 opacity-75" />
						</div>
						<span className="hidden sm:inline-block sm:align-middle sm:h-screen">
							&#8203;
						</span>
						<div
							className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
							role="dialog"
							aria-modal="true"
							aria-labelledby="modal-headline">
							<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
								<div className="flex flex-row my-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-fit">
									Create Bus
								</div>
								<label className="font-semibold">Bus Name</label>
								<input
									type="text"
									name="busName"
									placeholder="Bus Name"
									className="w-full bg-gray-100 p-2 mt-2 mb-3"
								/>
								<label className="font-semibold">Bus Plate</label>
								<input
									type="text"
									name="busPlate"
									placeholder="Bus Plate"
									className="w-full bg-gray-100 p-2 mt-2 mb-3"
								/>
								<label className="font-semibold">Bus Route</label>
								<select
									name="route"
									id="route-select"
									className="w-full bg-gray-100 p-2 mt-2 mb-3">
									<option value="">--Select route--</option>
									<option value="Kimironko">Kimironko</option>
									<option value="Remera">Remera</option>
									<option value="Downtown">Downtown</option>
									<option value="Kanombe">Kanombe</option>
									<option value="Murindi">Murindi</option>
									<option value="Kimisagara">Kimisagara</option>
								</select>
							</div>
							<div className="bg-gray-200 px-4 py-3 text-left">
								<button
									type="button"
									className="py-2 px-4 bg-green-600 text-white rounded hover:bg-gray-700 mr-2"
									onClick={() => toggleModal()}>
									<i className="fas fa-times"></i> Back
								</button>
								<button
									type="button"
									className="py-2 px-4 bg-textBluePhant text-white rounded hover:bg-textBluePhant mr-2">
									<i className="fas fa-plus"></i> Save Bus
								</button>
							</div>
						</div>
					</div>
				</div>
			</Admin>
		</>
	);
};

export default Bus;
