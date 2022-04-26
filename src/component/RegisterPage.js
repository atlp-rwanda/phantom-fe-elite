import "regenerator-runtime/runtime";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import trackroute from "../assets/images/trackroute.jpg";
import { Formik } from "formik";
import * as Yup from "yup";

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
    <div className="">
      <h1 className="text-center text-2xl text-blue-500 font-bold ">
        REGISTER
      </h1>
      <div className="flex flex-row  justify-center items-start mt-6 h-screen w-full ">
        <div className="hidden md:flex md:h-3/5 md:w-2/5 lg:h-4/5 lg:w-2/6 text-center rounded-l-md  ">
          <img src={trackroute} alt="route" className="h-full w-full" />
        </div>
        <div className="w-5/6 h-fit flex justify-center items-start md:h-3/5 md:w-2/5 lg:h-4/5 lg:w-2/6  border border-blue-500 rounded-r-md  ">
          <Formik
            initialValues={{ email: "", username: "", password: "" }}
            validationSchema={signUpSchema}
            onSubmit={async (values) => {
              setIsLoading(true);
              onSubmit && onSubmit(values);
              await sleep(2000);
              console.log(values);
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
              isSubmitting,
              isValid,
              dirty,
              /* and other goodies */
            }) => (
              <form className=" h-full w-5/6 pb-10 " onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  data-testid="email-input"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="mt-8 pl-3 h-12 w-full  border border-blue-500 rounded text-xl md:text-2xl"
                />
                {touched.email && errors.email ? (
                  <span
                    data-testid="error-msg"
                    className="text-red-500 text-xs"
                  >
                    {errors.email}
                  </span>
                ) : null}

                <br />
                <br />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={values.username}
                  data-testid="username-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="h-12 w-full pl-3 border border-blue-500 rounded text-xl md:text-2xl"
                />
                {touched.username && errors.username ? (
                  <span
                    data-testid="error-msg"
                    className="text-red-500 text-xs"
                  >
                    {errors.username}
                  </span>
                ) : null}
                <br />
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  data-testid="password-input"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="h-12 w-full pl-3 border border-blue-500 rounded text-xl md:text-2xl"
                />
                {touched.password && errors.password ? (
                  <span
                    data-testid="error-msg"
                    className="text-red-500 text-xs"
                  >
                    {errors.password}
                  </span>
                ) : null}
                <br />
                <br />

                <a href="" className=" font-Montserrat text-xl">
                  Reset Password
                </a>
                <br />
                <br />
                <button
                  type="submit"
                  data-testid="submit-form"
                  disabled={isLoading}
                  className={`h-12 w-full md:text-2xl ${
                    isLoading ? "bg-blue-100" : "bg-blue-500"
                  } text-white rounded text-xl`}
                >
                  Register
                </button>
                <br />
                <br />

                <p className="flex flex-row font-Montserrat text-lg md:text-xl">
                  or login with
                  <a href="" className="ml-4 ">
                    <FaLinkedin className="text-2xl text-blue-500 " />
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
  );
};

export default RegisterPage;
