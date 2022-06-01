/** @format */

import Driverlayout from "../../component/layout/DriverDashboard";
import React from "react";
import Select from "react-select";
import { RiAddCircleLine } from "react-icons/ri";
function BusMotion() {
	const options = [
		{ value: "Kacyiru Bus station", label: "Kacyiru Bus station" },
		{ value: "Nyanza Bus station", label: "Nyanza Bus station" },
		{ value: "Kicukiro Bus station", label: "kicukiro Bus station" },
		{ value: "Kimironko Bus station", label: "Kimironko Bus station" },
		{ value: "Down Town Bus station", label: "Down Town Bus station" },
	];
	return (
		<Driverlayout >
			<div>
				<h3
					className="font-bold underline decoration-sky-500"
					data-testid="head1">
					Simulate Bus Motion
				</h3>
				<div className="w-full flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
					<div className="bg-blue-500 my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
						<div> this is map </div>
					</div>

					<div className="bg-gray-300 my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
						<form className="flex flex-col m-2">
							<div className="flex flex-col">
								<label>Available Seats</label>
								<input
									text=""
									name="seats"
									placeholder="20 seat"
									className="p-2 rounded-md"
								/>
							</div>
							<div className="-mt-3 flex flex-col">
								<br />
								<label>In Passangers</label>
								<input
									text=""
									name="inpassanger"
									placeholder="5"
									className="p-2 rounded-md"
								/>
							</div>
							<div className="-mt-3 flex flex-col">
								<br />
								<label>Out passangers</label>
								<input
									text=""
									name="outpassanger"
									placeholder="20 seat"
									className="p-2 rounded-md"
								/>
							</div>
							<div className="-mt-3 flex flex-col">
								<br />
								<label>Bus stop</label>
								<div>
									<Select options={options}  className="z-50"/>
								</div>
							</div>
							<div className="-mt-3 flex flex-col">
								<br />
								<label>Bus From</label>
								<div>
									<Select options={options} />
								</div>
							</div>
							<div className="-mt-3 flex flex-col">
								<br />
								<label>Bus to</label>
								<div>
									<Select options={options} />
								</div>
							</div>
						</form>
					</div>
				</div>
				<div>
					<button
						className="m-2 bg-blue-700 p-2 rounded-md font-bold"
						type="submit"
						title="button"
						data-testid="submit-form">
						<span className="flex items-center justify-between">
							<RiAddCircleLine className="text-white text-2xl mr-1 " />
							<span className="text-white">Start Journey</span>
						</span>
					</button>
					<button
						className="m-2 bg-black p-2 rounded-md font-bold"
						type="submit"
						title="button"
						data-testid="submit-form">
						<span className="flex items-center justify-between">
							<RiAddCircleLine className="text-white text-2xl mr-1" />
							<span className="text-white">Slow Down</span>
						</span>
					</button>
					<button
						className="m-2 bg-blue-700 p-2 rounded-md font-bold"
						type="submit"
						title="button"
						data-testid="submit-form">
						<span className="flex items-center justify-between">
							<RiAddCircleLine className="text-white text-2xl mr-1" />
							<span className="text-white">Speed Up</span>
						</span>
					</button>
					<button
						className="m-2 bg-green-700 p-2 rounded-md font-bold"
						type="submit"
						title="button"
						data-testid="submit-form">
						<span className="flex items-center justify-between">
							<RiAddCircleLine className="text-white text-2xl mr-1" />
							<span className="text-white">Jam</span>
						</span>
					</button>
					<button
						className="m-2 bg-slate-700 p-2 rounded-md font-bold"
						type="submit"
						title="button"
						data-testid="submit-form">
						<span className="flex items-center justify-between">
							<RiAddCircleLine className="text-white text-2xl mr-1" />
							<span className="text-white">Bus Stop</span>
						</span>
					</button>
					<button
						className="m-2 bg-red-600 p-2 rounded-md font-bold"
						type="submit"
						title="button"
						data-testid="submit-form">
						<span className="flex items-center justify-between">
							<RiAddCircleLine className="text-white text-2xl mr-1" />
							<span className="text-white">End Journey</span>
						</span>
					</button>
				</div>
			</div>

			{/* <div className="flex flex-row h-screen">
				<div className="bg-blue-500 h-100 w-1/2">
					<div> this is map </div>
				</div>
				<div className="bg-gray-300 h-5/6 w-1/2 pb-2 ml-3 p-5"></div>
			</div> */}
		</Driverlayout>
	);
}
export default BusMotion;
