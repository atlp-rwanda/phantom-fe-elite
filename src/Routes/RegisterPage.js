import "regenerator-runtime/runtime";
import './reset.css';
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import trackroute from "../assets/imgs/trackroute.jpg";
import secondimage from "../assets/images/secondImage.jpg";
import { Formik } from "formik";
import * as Yup from "yup";
import FooterBlock from "../component/footer-and-nav-template/FooterBlock";
import NavBar from "../component/footer-and-nav-template/NavBar";

const RegisterPage = ({ onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const signUpSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
    username: Yup.string()
      .min(4, "Minimum of 4 letters")
      .required("Username is Required"),
    password: Yup.string()
      .min(4, "Minimum of 4 letters")
      .required("password is Required"),
  });

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <>
    <NavBar/>
    <div className="flex flex-col w-full h-full lg:w-full">
      <h1 className="text-center text-2xl text-textBluePhant font-bold h-[8%]">
        REGISTER
      </h1>

      <div
        style={{ backgroundImage: `url(${secondimage})` }}
        className="flex flex-row  justify-center items-start my-6 w-full h-[60%]"
      >
        <div
          style={{ backgroundImage: `url(${trackroute})` }}
          className="hidden md:flex text-center rounded-l-md  w-72 lg:w-80  h-full bg-no-repeat bg-cover"
        ></div>

        <div className="w-72 lg:w-80 h-full lg:h-full flex justify-center items-start  border border-darkBluePhant rounded-r-md  ">
          <Formik
            initialValues={{ email: "", username: "", password: "" }}
            validationSchema={signUpSchema}
            onSubmit={async (values) => {
              setIsLoading(true);
              onSubmit && onSubmit(values);
              await sleep(2000);
              setIsLoading(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form className=" h-full w-5/6 pb-9 " onSubmit={handleSubmit}>
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
                    className="text-errorText text-xs"
                  >
                    {errors.email}
                  </span>
                ) : null}

                <br />

                <input
                  type="text"
                  name="username"
                  placeholder="Username..."
                  value={values.username}
                  data-testid="username-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="h-10 lg:h-9 md:h-12 w-full pl-3 mt-3 lg:mt-3 md:mt-6 border border-darkBluePhant rounded text-md font-Montserrat"
                />
                {touched.username && errors.username ? (
                  <span
                    data-testid="error-msg"
                    className="text-errorText text-xs"
                  >
                    {errors.username}
                  </span>
                ) : null}
                <br />

                <input
                  type="password"
                  name="password"
                  placeholder="Password..."
                  data-testid="password-input"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="h-10 lg:h-9 md:h-12 w-full mt-3 lg:mt-3 md:mt-6 mb-4 pl-3 border border-darkBluePhant rounded text-md font-Montserrat"
                />
                {touched.password && errors.password ? (
                  <span
                    data-testid="error-msg"
                    className="text-errorText text-xs"
                  >
                    {errors.password}
                  </span>
                ) : null}
                <br />

                <a href="/reset-password" className="font-Montserrat text-sm">
                  Reset Password
                </a>
                <br />

                <button
                  type="submit"
                  data-testid="submit-form"
                  disabled={isLoading}
                  className={`h-10 lg:h-9 md:h-12 mt-2 lg:mt-2 md:mt-6 mb-3 w-full text-md ${
                    isLoading ? "bg-blue-100" : "bg-darkBluePhant"
                  } text-whitePhant rounded text-lg font-bold`}
                >
                  Register
                </button>
                <br />

                <p className="flex flex-row mt-2 lg:mt-2 md:mt-10 font-Montserrat text-sm">
                  or login with
                  <a href="" className="ml-4 ">
                    <FaLinkedin className="text-2xl text-darkBluePhant " />
                  </a>
                  <a href="" className="ml-4">
                    <FcGoogle className="text-2xl " />
                  </a>
                </p>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
    <FooterBlock /> 
    </>
  );
};

export default RegisterPage;
