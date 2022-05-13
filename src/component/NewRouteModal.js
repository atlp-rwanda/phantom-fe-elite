/** @format */
import { useState, useEffect } from "react";

import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";



// modal toggle
function toggleModal() {
	document.getElementById("NewRouteModal").classList.toggle("hidden");
}




const NewRouteModal = ({onCreate}) => {



	const formik = useFormik({
		initialValues: {
			origin: "",
			destination: "",
	
		},
		validationSchema: Yup.object({
			origin: Yup.string()
				.min(4, "Must be 15 characters or less")
				.required("Origin station is Required"),
			destination: Yup.string()
				.min(3, "Minimum of 6 characters")
				.required("Destination station is Required"),
		}),
		onsubmit: (values) => {},
	});
	return (
		<div
			className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
			id="NewRouteModal">
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
					<form>
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="flex flex-row my-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-fit">
								Register Route
							</div>
							<label className="font-semibold">Origin</label>
							<input
								type="text"
								id="origin"
								name="origin"
								data-testid="busName-input"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.origin}
								placeholder="Origin"
								className="w-full bg-gray-100 p-2 mt-2 mb-3"
							/>
							{formik.touched.busName && formik.errors.origin ? (
								<p className="text-red-600" data-testid="error-msg">
									{formik.errors.origin}
								</p>
							) : null}
							<label className="font-semibold">Destination</label>
							<input
								type="text"
								name="destination"
								id="destination"
								data-testid="busPlate-input"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.destination}
								placeholder="Destination"
								className="w-full bg-gray-100 p-2 mt-2 mb-3"
							/>
							{formik.touched.destination && formik.errors.destination ? (
								<p className="text-red-600" data-testid="error-msg">
									{formik.errors.destination}
								</p>
							) : null}
						</div>
						<div className="bg-gray-200 px-4 py-3 text-left">
							<button
								type="button"
								className="py-2 px-4 bg-green-600 text-white rounded hover:bg-gray-700 mr-2"
								onClick={() => toggleModal()}
								data-testid = "backBtn"
								>
								<i className="fas fa-times"></i> Back
							</button>
							<button
								type="submit"
								onClick={(e) => {e.preventDefault; toggleModal()}}
								data-testid = "saveBtn"
								className="py-2 px-4 bg-textBluePhant text-white rounded hover:bg-textBluePhant mr-2">
								<i className="fas fa-plus"></i> Save Route
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewRouteModal;
