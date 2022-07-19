/** @format */

import React, { useState } from "react";
import destImg from "./../assets/desti.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import "./reset.css";
import FooterBlock from "../component/footer-and-nav-template/FooterBlock";
import NavBar from "../component/footer-and-nav-template/NavBar";
import { Formik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { url } from "../api/index";

const ResetP = ({ onSubmit }) => {
	const [isLoading, setIsLoading] = useState(false);
	const signUpSchema = Yup.object({
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is Required"),
		password: Yup.string()
			.min(8, "Minimum of 8 letters")
			.required("password is Required"),
		confirmPassword: Yup.string()
			.min(8, "Minimum of 8 letters")
			.required("Confirm password is Required"),
	});

	onSubmit = async (fields) => {
		const { email, password, confirmPassword } = fields;
		var formData = new FormData();
		formData.append("email", email);
		formData.append("passsword", password);
		formData.append("confirmPassword", confirmPassword);

		if (password !== confirmPassword) {
			toast.error("Password does not match");
    } else {
      try {
				const update = await axios
					.put(`${url}/resetpassword`, fields)
					.then((response) => {
						toast.success(response.data.message);
						location.href = "/login";
					});
			} catch (error) {
				toast.error(error.response.data.message);
			}
    }
	};

	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
	return (
		<React.Fragment>
			<>
				<NavBar />
				<div className="minGr  h-[61%]">
					<div className="minGr container mx-w-md mx-auto mx-w-sm pt-8">
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
						<div className="flex justify-center px-6 mt-1 mb-4 py-2 relative">
							<div className=" flex justify-center  rounded">
								<div className="w-full xl:w-3/4 lg:w-11/12 flex">
									<div className="w-full h-96 bg-gray-200 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg border border-textBluePhant">
										<img
											src={destImg}
											alt=""
											className=" w-full md:w-full md:h-full mx-0"
											role="image"
										/>
									</div>
									<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none border border-textBluePhant">
										<Formik
											initialValues={{
												email: "",
												password: "",
												confirmPassword: "",
											}}
											validationSchema={signUpSchema}
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
												<form className="mx-8 relative" onSubmit={handleSubmit}>
													<div className="">
														<input
															type="email"
															name="email"
															data-testid="email-input"
															placeholder="Email..."
															onChange={handleChange}
															onBlur={handleBlur}
															value={values.email}
															className="mt-5 lg:mt-6 md:mt-10 pl-3 h-10 lg:h-9 md:h-12 w-full  border border-darkBluePhant rounded text-md font-Montserrat"
														/>
														{touched.email && errors.email ? (
															<span
																data-testid="error-msg"
																className="text-errorText text-xs">
																{errors.email}
															</span>
														) : null}

														<input
															type="password"
															name="password"
															placeholder="Password..."
															data-testid="password-input"
															value={values.password}
															onBlur={handleBlur}
															onChange={handleChange}
															className="h-10 lg:h-9 md:h-12 w-full mt-3 lg:mt-3 md:mt-6 mb-1 pl-3 border border-darkBluePhant rounded text-md font-Montserrat"
														/>
														{touched.password && errors.password ? (
															<span
																data-testid="error-msg"
																className="text-errorText text-xs">
																{errors.password}
															</span>
														) : null}

														<input
															type="password"
															name="confirmPassword"
															placeholder="Confirm Password..."
															data-testid="confirm-password-input"
															value={values.confirmPassword}
															onBlur={handleBlur}
															onChange={handleChange}
															className="h-10 lg:h-9 md:h-12 w-full mt-3 lg:mt-3 md:mt-6 mb-4 pl-3 border border-darkBluePhant rounded text-md font-Montserrat"
														/>
														{touched.confirmPassword &&
														errors.confirmPassword ? (
															<span
																data-testid="error-msg"
																className="text-errorText text-xs">
																{errors.confirmPassword}
															</span>
														) : null}

														<button
															type="submit"
															data-testid="submit-form"
															disabled={isLoading}
															className={`h-10 lg:h-9 md:h-12 mt-2 lg:mt-2 md:mt-6 mb-3 w-full text-md ${
																isLoading ? "bg-blue-100" : "bg-darkBluePhant"
															} text-whitePhant rounded text-lg font-bold`}>
															Reset
														</button>
													</div>
													<div>
														<p className=" flex justify-between my-4 text-sm font-light font-Montserrat ">
															Or login with
															<a href="" className="ml-2 ">
																<FaLinkedin className="text-3xl text-textBluePhant" />
															</a>
															<a href="" className="ml-2 flex">
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
		</React.Fragment>
	);
};

export default ResetP;
