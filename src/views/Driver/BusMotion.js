/** @format */

import Driverlayout from "../../component/layout/DriverDashboard";
import React, { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import worldMap from "../../assets/images/world_map.png";

function BusMotion() {
	const [startMotion, setStartMotion] = useState(0);

	const startJourney = () => {
		setStartMotion(1);
	};

	const endJourney = () => {
		setStartMotion(0);
	};
	return (
		<Driverlayout>
			<div>
				<h3
					className="font-bold underline decoration-sky-500"
					data-testid="head1">
					Simulate Bus Motion
				</h3>
				<div className="w-full flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
					<div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
						<Link to={"/test"}>
							<div className="flex justify-center items-center">
								<img src={`${worldMap}`} alt="Map Image" />
								<br />
								<h1 className="font-bold">View On Map</h1>
							</div>
						</Link>
					</div>

					<div className="h-auto bg-gray-300 my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
						<form className="flex flex-col m-2">
							{startMotion ? (
								<div>
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
										<div className="h-auto">
											<select
												name="busRoute"
												id="busRoute"
												data-testid="busRoute-input"
												className="w-full bg-gray-100 p-2 mt-2 mb-3">
												<option value="">--Select Bus Stop --</option>
												<option value="Kimironko">Amahoro Stadium</option>
												<option value="Remera">Chez Lando</option>
												<option value="Downtown">Downtown</option>
												<option value="Kanombe">Kanombe</option>
												<option value="Murindi">Murindi</option>
												<option value="Kimisagara">Kimisagara</option>
											</select>
										</div>
									</div>
								</div>
							) : (
								<div>
									<div className="-mt-3 flex flex-col">
										<br />
										<label>Bus From</label>
										<div className="z-50">
											<select
												name="busRoute"
												id="busRoute"
												data-testid="busRoute-input"
												className="w-full bg-gray-100 p-2 mt-2 mb-3">
												<option value="">--Select Bus From --</option>
												<option value="Kimironko">Kimironko</option>
												<option value="Remera">Remera</option>
												<option value="Downtown">Downtown</option>
												<option value="Kanombe">Kanombe</option>
												<option value="Murindi">Murindi</option>
												<option value="Kimisagara">Kimisagara</option>
											</select>
										</div>
									</div>

									<div className="-mt-3 flex flex-col">
										<br />
										<label>Bus to</label>
										<select
											name="busRoute"
											id="busRoute"
											data-testid="busRoute-input"
											className="w-full bg-gray-100 p-2 mt-2 mb-3">
											<option value="">--Select Bus to --</option>
											<option value="Ex Kie">Ex Kie</option>
											<option value="Kwa Rwahama">Kwa Rwahama</option>
											<option value="Ex Remera Sector Office">
												Ex Remera Sector Office
											</option>
											<option value="Amahoro Stadium">Amahoro Stadium</option>
											<option value="Beau Sejour">Beau Sejour</option>
											<option value="Gishushu">Gishushu</option>
										</select>
									</div>
								</div>
							)}
						</form>
					</div>
				</div>
				<div>
					{startMotion ? (
						<div>
							<button
								className="m-2 bg-black p-2 rounded-md font-bold"
								type="submit"
								title="button"
								data-testid="submit-slow">
								<span className="flex items-center justify-between">
									<RiAddCircleLine className="text-white text-2xl mr-1" />
									<span className="text-white">Slow Down</span>
								</span>
							</button>
							<button
								className="m-2 bg-blue-700 p-2 rounded-md font-bold"
								type="submit"
								title="button"
								data-testid="submit-speed">
								<span className="flex items-center justify-between">
									<RiAddCircleLine className="text-white text-2xl mr-1" />
									<span className="text-white">Speed Up</span>
								</span>
							</button>
							<button
								className="m-2 bg-green-700 p-2 rounded-md font-bold"
								type="submit"
								title="button"
								data-testid="submit-jam">
								<span className="flex items-center justify-between">
									<RiAddCircleLine className="text-white text-2xl mr-1" />
									<span className="text-white">Jam</span>
								</span>
							</button>
							<button
								className="m-2 bg-slate-700 p-2 rounded-md font-bold"
								type="submit"
								title="button"
								data-testid="submit-stop">
								<span className="flex items-center justify-between">
									<RiAddCircleLine className="text-white text-2xl mr-1" />
									<span className="text-white">Bus Stop</span>
								</span>
							</button>
							<button
								onClick={() => endJourney()}
								className="m-2 bg-red-600 p-2 rounded-md font-bold"
								type="submit"
								title="button"
								data-testid="submit-end">
								<span className="flex items-center justify-between">
									<RiAddCircleLine className="text-white text-2xl mr-1" />
									<span className="text-white">End Journey</span>
								</span>
							</button>
						</div>
					) : (
						<button
							onClick={() => startJourney()}
							className="m-2 bg-blue-700 p-2 rounded-md font-bold"
							type="submit"
							title="button"
							data-testid="submit-start">
							<span className="flex items-center justify-between">
								<RiAddCircleLine className="text-white text-2xl mr-1 " />
								<span className="text-white">Start Journey</span>
							</span>
						</button>
					)}
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
