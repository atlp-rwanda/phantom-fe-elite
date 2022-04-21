import React from "react";
import destImg from "./../assets/desti.jpg";
import {FaLinkedin} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import './reset.css';
const Reset = () => {
  return (
    <div className="container mx-auto ">
      <h1 className="pt-0 text-2xl text-center text-sky-500 font-bold">
        RESET PASSWORD
      </h1>
      <div className="flex justify-center px-6 my-10">
        <div className=" flex justify-center  rounded">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-200 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg border border-sky-500">
              <img src={destImg} alt="" className="w-full mx-0" />
            </div>
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none border border-sky-500">
              <h2 className="pt-4 text-2xl font-light text-center">
                Forgot Password, Provide Your Email To Reset It
              </h2>
              <form className="mx-8">
                <div>
                  {/* <label >Enter your Email</label> */}
                  <input
                    className="w-full px-4 py-2 text-sm leading-tight text-gray-700 border my-8  border-sky-500 rounded "
                    type="email"
                    placeholder="Email ..."
                  />
                </div>
                <button className="w-full my-3 py-2 bg-sky-500 shadow-lg shadow-sky-500/60 border-sky-500 rounded text-white">
                  Reset Password
                </button>
                <div>
                  <p className=" flex justify-between my-4">
                    Or login with
                    <a href="" className="ml-4 ">
                      <FaLinkedin className="text-3xl text-sky-500" />
                    </a>
                    <a href="" className="ml-4 flex">
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
  );
};

export default Reset;
