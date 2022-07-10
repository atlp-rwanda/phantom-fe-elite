/** @format */

import React, { useState } from "react";
import destImg from "./../assets/desti.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./reset.css";
import FooterBlock from "../component/footer-and-nav-template/FooterBlock";
import NavBar from "../component/footer-and-nav-template/NavBar";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { url } from "../api/index";
const Reset = ({ onSubmit }) => {
	const [isLoading, setIsLoading] = useState(false);
	const resetSchema = Yup.object({
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is Required"),
	});
	onSubmit = async (fields) => {
    const { email } = fields;
		var formData = new FormData();
		formData.append("email", email);
		try {
			const reset = await axios
				.post(`${url}/password`, fields)
        .then((response) => {
          toast.success(response.data.message);
        });
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	return (
		<>
			<NavBar />
			<div className=" minGr  h-[60%]">
				<div className=" container mx-w-md mx-auto mx-w-sm pt-4 ">
					<h1 className="pt-0 text-2xl text-center text-textBluePhant font-bold">
						RESET PASSWORD
					</h1>
					<div>
						<Toaster
							toastOptions={{
								className: "",
							}}
						/>
					</div>
					<div className="flex justify-center px-6 mt-4 mb-4 py-6">
						<div className=" flex justify-center  rounded">
							<div className="w-full xl:w-3/4 lg:w-11/12 flex">
								<div className="w-full h-auto bg-gray-200 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg border border-textBluePhant">
									<img
										src={destImg}
										alt=""
										className="w-full mx-0"
										role="image"
									/>
								</div>
								<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none border border-textBluePhant">
									<h3 className="pt-4 text-lg font-light font-Montserrat text-center ">
										Forgot password , provide your email and
									</h3>
									<Formik
										initialValues={{ email: "" }}
										validationSchema={resetSchema}
										onSubmit={async (values) => {
											setIsLoading(true);
											onSubmit && onSubmit(values);
											await sleep(2000);
											setIsLoading(false);
										}}>
										{({
											values,
											errors,
											touched,
											handleChange,
											handleBlur,
											handleSubmit,
										}) => (
											<form className="mx-6" onSubmit={handleSubmit}>
												<div>
													{/* <label >Enter your Email</label> */}
													<input
														className="emailInput w-full px-4 py-2 text-sm leading-tight text-gray-700 border my-5  border-textBluePhant rounded "
														type="email"
														name="email"
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.email}
														data-testid="emailInput"
														placeholder="Email ..."
													/>
													{touched.email && errors.email ? (
														<span
															data-testid="error-msg"
															className="text-errorText text-xs">
															{errors.email}
														</span>
													) : null}
												</div>
													<button
														type="submit"
														data-testid="submit-form"
														disabled={isLoading}
														className={`h-10 lg:h-9 md:h-12 mt-2 lg:mt-2 md:mt-6 mb-3 w-full text-md ${
															isLoading ? "bg-blue-100" : "bg-darkBluePhant"
														} text-whitePhant rounded text-lg font-bold`}>
														Reset Password
													</button>
												<div>
													<p className=" flex justify-between my-4 text-sm font-light font-Montserrat ">
														Or login with
														<a href="" className="ml-4 ">
															<FaLinkedin className="text-3xl text-textBluePhant" />
														</a>
														<a href="" className="ml-4 flex">
															<FcGoogle className="text-3xl" />
														</a>
													</p>
												</div>
											</form>
										)}
									</Formik>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<FooterBlock />
		</>
	);
};

export default Reset;
