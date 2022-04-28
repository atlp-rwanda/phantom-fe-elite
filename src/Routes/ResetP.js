import React, { Component } from "react";
import destImg from "./../assets/desti.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import "./reset.css";
// import './Resett'
const ResetP=() => {
 
//handle event form && handle submit
const { register, handleSubmit,trigger, watch, formState: { errors } } = useForm();
const onSubmit = data => alert(JSON.stringify(data));
  

//check password
const password = watch('password');
    return (
      <React.Fragment>
        <div className="container mx-w-md mx-auto mx-w-sm pt-8">
          <h1 className="pt-0 text-2xl text-center text-sky-500 font-bold">
            RESET PASSWORD
          </h1>
          <div className="flex justify-center px-6 mt-5 mb-10 py-6 relative">
            <div className=" flex justify-center  rounded">
              <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                <div className="w-full h-96 bg-gray-200 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg border border-sky-500">
                  <img src={destImg} alt="" className=" w-full md:w-full md:h-full mx-0" />
                </div>
                <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none border border-sky-500">
                  <form className="mx-8 relative" onSubmit={handleSubmit()} >
                    <div className="">
                      {/* <label >Enter your Email</label> */}
                      <input
                        placeholder="Password ..."
                        className={`npassword w-full px-4 py-2 text-sm leading-tight text-gray-700 border mt-12  mb-3  border-sky-500 rounded ${errors.password && 'focus:border-red-500 focus:ring-red-500 border-red-500'}`}
                        {...register("password", { required: 'Password is required',
                        pattern:{
                          value: /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'< >,.?/_])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]\\:;"'< >,.?/-]{10,16}$/ ,
                          message:"Password should include at least one uppercase, one numeric value and one special character ",
                        },
                        
                        minLength:{
                          value: 8,
                          message:"Minimum Required character is 8",
                        },
                      })} 
                       onKeyUp={()=>{
                         trigger('password');
                       }}
                        type="password"
                        data-testid="password"
                        // onChange={this.handleChange}
                      />
                      {errors.password && <span className="text-sm text-red-500 " data-testid="error-msg">{errors.password.message}</span>}
                      {/* <span className="flex justify-between my-0.5 text-sm font-light font-Montserrat ">Password should include at least one uppercase, one numeric value and one special character</span> */}
                      <input
                        className={`npassword w-full px-4 py-2 text-sm leading-tight text-gray-700 border mt-3  mb-3  border-sky-500 rounded ${errors.ConfirmPassword && 'focus:border-red-500 focus:ring-red-500 border-red-500'}`}
                        {...register("ConfirmPassword", { required: 'Confirm Password is required',
                        validate: (value)=>
                        value === password || "The passwords do not match"
                      })}
                        type="password"
                        data-testid="passwordt"
                        placeholder="Confirm password ..."
                        // onChange={this.handleChange}
                      />
                      <div className="">
                     {errors.ConfirmPassword && <span className="text-sm text-red-500 " data-testid="error-msg">{errors.ConfirmPassword.message}</span>}
                      </div>
                    </div>
                    <button
                      className=" btn w-full my-3 py-2 bg-sky-500 shadow-lg shadow-sky-500/60 border-sky-500 rounded text-white"
                    >
                      Reset
                    </button>
                    <div>
                      <p className=" flex justify-between my-4 text-sm font-light font-Montserrat ">
                        Or login with
                        <a href="" className="ml-2 ">
                          <FaLinkedin className="text-3xl text-sky-500" />
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
      </React.Fragment>
    );
  
}

export default ResetP;
