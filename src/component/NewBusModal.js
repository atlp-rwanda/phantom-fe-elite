/** @format */

import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
const NewBusModal = () => {
	// modal
	function toggleModal() {
		document.getElementById("newBusModal").classList.toggle("hidden");
	}

	const formik = useFormik({
		initialValues: {
			busName: "",
			busPlate: "",
			busRoute: "",
		},
		validationSchema: Yup.object({
			busName: Yup.string()
				.max(15, "Must be 15 characters or less")
				.required("Bus Name Required"),
			busPlate: Yup.string()
				.min(4, "Minimum of 6 characters")
				.required("Bus Plate Number is Required"),
			busRoute: Yup.string()
				.min(7, "Minimum of 7 Numbers")
				.required("Bus Route is required"),
		}),
		onsubmit: (values) => {},
	});
	return (
		<div
			className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
			id="newBusModal">
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
								Create Bus
							</div>
							<label className="font-semibold">Bus Name</label>
							<input
								type="text"
								id="busName"
								name="busName"
								data-testid="busName-input"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.busName}
								placeholder="Bus Name"
								className="w-full bg-gray-100 p-2 mt-2 mb-3"
							/>
							{formik.touched.busName && formik.errors.busName ? (
								<p className="text-red-600" data-testid="error-msg">
									{formik.errors.busName}
								</p>
							) : null}
							<label className="font-semibold">Bus Plate</label>
							<input
								type="text"
								name="busPlate"
								id="busPlate"
								data-testid="busPlate-input"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.busPlate}
								placeholder="Bus Plate"
								className="w-full bg-gray-100 p-2 mt-2 mb-3"
							/>
							{formik.touched.busPlate && formik.errors.busPlate ? (
								<p className="text-red-600" data-testid="error-msg">
									{formik.errors.busPlate}
								</p>
							) : null}
							<label className="font-semibold">Bus Route</label>
							<select
								name="busRoute"
								id="busRoute"
								data-testid="busRoute-input"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.busRoute}
								className="w-full bg-gray-100 p-2 mt-2 mb-3">
								<option value="">--Select route--</option>
								<option value="Kimironko">Kimironko</option>
								<option value="Remera">Remera</option>
								<option value="Downtown">Downtown</option>
								<option value="Kanombe">Kanombe</option>
								<option value="Murindi">Murindi</option>
								<option value="Kimisagara">Kimisagara</option>
							</select>
							{formik.touched.busRoute && formik.errors.busRoute ? (
								<p className="text-red-600" data-testid="error-msg">
									{formik.errors.busRoute}
								</p>
							) : null}
						</div>
						<div className="bg-gray-200 px-4 py-3 text-left">
							<button
								type="button"
								className="py-2 px-4 bg-green-600 text-white rounded hover:bg-gray-700 mr-2"
								onClick={() => toggleModal()}>
								<i className="fas fa-times"></i> Back
							</button>
							<button
								type="submit"
								className="py-2 px-4 bg-textBluePhant text-white rounded hover:bg-textBluePhant mr-2">
								<i className="fas fa-plus"></i> Save Bus
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewBusModal;
