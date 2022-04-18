import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  return (
    <div className="">
      <h1 className="text-center text-2xl text-blue-500 font-semiboldb">
        REGISTER
      </h1>
      <div className="flex flex-row  justify-center items-start mt-6 h-screen  ">
        <div className="h-3/4 w-96 text-center bg-slate-500"></div>
        <div className="flex justify-center items-start h-3/4 w-96 border border-blue-500 ">
          <form className=" h-full w-80">
            <input
              type="text"
              value=""
              placeholder="Email"
              className="mt-14 h-10 w-80 pl-3 border border-blue-500"
            />
            <br />
            <br />
            <input
              type="text"
              value=""
              placeholder="Username"
              className="h-10 w-80 pl-3 border border-blue-500"
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="h-10 w-80 pl-3 border border-blue-500 "
            />
            <br />
            <br />

            <a href="" className=" ">
              Reset Password
            </a>
            <br />
            <br />
            <button type="submit" className="h-10 w-80 bg-blue-500 text-white">
              Register
            </button>
            <br />
            <br />
            <br />
            <p className="flex flex-row">
              or login with
              <a href="" className="ml-4 ">
                <FaLinkedin className="text-3xl text-blue-500" />
              </a>
              <a href="" className="ml-4">
                <FcGoogle className="text-3xl" />
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
