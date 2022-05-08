import React, { Component } from "react";
import destImg from "./../assets/desti.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import "./reset.css";
import FooterBlock from "../component/footer-and-nav-template/FooterBlock";
import NavBar from "../component/footer-and-nav-template/NavBar";
// import './Resett'
const ResetP = () => {
  //handle event form && handle submit
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const onSubmit = (data) => alert(JSON.stringify(data));

  //check password
  const password = watch("password");
  return (
    <React.Fragment>
      <>
        <NavBar />
        <div className="minGr  h-[61%]">
          <div className="minGr container mx-w-md mx-auto mx-w-sm pt-8">
            <h1 className="pt-0 text-2xl text-center text-textBluePhant font-bold">
              RESET PASSWORD
            </h1>
            <div className="flex justify-center px-6 mt-1 mb-10 py-2 relative">
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
                    <form className="mx-8 relative" onSubmit={handleSubmit()}>
                      <div className="">
                        <input
                          placeholder="Password ..."
                          className={`npassword w-full px-4 py-2 text-sm leading-tight text-gray-700 border mt-12  mb-3  border-textBluePhant rounded ${
                            errors.password &&
                            "focus:border-errorText focus:ring-errorText border-errorText"
                          }`}
                          {...register("password", {
                            required: "Password is required",
                            pattern: {
                              value:
                                /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'< >,.?/_])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]\\:;"'< >,.?/-]{10,16}$/,
                              message:
                                "Password should include at least one uppercase, one numeric value and one special character ",
                            },

                            minLength: {
                              value: 8,
                              message: "Minimum 8 character",
                            },
                          })}
                          type="password"
                          data-testid="password"
                        />
                        {errors.password && (
                          <span
                            className="text-sm text-errorText "
                            data-testid="error-msg"
                          >
                            {errors.password.message}
                          </span>
                        )}
                        <input
                          role="pass"
                          className={`npassword w-full px-4 py-2 text-sm leading-tight text-gray-700 border mt-3  mb-3  border-textBluePhant rounded  ${
                            errors.ConfirmPassword &&
                            "focus:border-errorText focus:ring-errorText border-errorText"
                          }`}
                          {...register("ConfirmPassword", {
                            required: "Confirm Password is required",
                            validate: (value) =>
                              value === password ||
                              "The passwords do not match",
                          })}
                          type="password"
                          data-testid="passwordt"
                          placeholder="Confirm password ..."
                        />
                        <div className="">
                          {errors.ConfirmPassword && (
                            <span
                              className="text-sm text-errorText "
                              data-testid="error-msg"
                            >
                              {errors.ConfirmPassword.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        className=" btn w-full my-3 py-2 bg-adminFooterBackground shadow-lg shadow-sky-500/60 border-textBluePhant rounded text-whitePhant"
                        data-testid="btn-sub"
                      >
                        Reset
                      </button>
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
