

import "regenerator-runtime/runtime";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import secondimage from "../assets/images/secondImage.jpg";
import { Formik } from "formik";
import users from '../../data/users.json'
import * as Yup from "yup";
import toast, { Toaster } from 'react-hot-toast';
import NavBar from "../component/footer-and-nav-template/NavBar";
import FooterBlock from "../component/footer-and-nav-template/FooterBlock";
import { Link } from "react-router-dom";

const trackroute ="https://res.cloudinary.com/andela-hodal/image/upload/v1651660951/images/trackroute_hotaxz.jpg";


const LoginPage = ({ onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const signUpSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
    password: Yup.string()
      .min(4, "Minimum of 4 letters")
      .required("password is Required"),
  });

  const userData = users.users
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0.yRQYnWzskCZUxPwaQupWkiUzKELZ49eM7oWxAQK_ZXw"

  onSubmit = fields => {
    const { email, password } = fields;
    var formData = new FormData();
    formData.append('email', email);
    formData.append('passsword', password);

   

    

      for (var i = 0; i < userData.length; i++) {
        if (email !== userData[i].email || password !== userData[i].password) {
          toast('Incorect username or password');
          
        }
      else if (email == userData[i].email) {
        if (password == userData[i].password) {
          if("User" == userData[i].role){

            toast('User loged in sucessful');
            localStorage.setItem('token', token);
            location.href = '/user-view'
            break;
          }
         if("operator" == userData[i].role){
          toast('Operator loged in sucessful');
          localStorage.setItem('token', token);
          location.href = '/operator'
          break;
        } if("ADMIN" == userData[i].role){
          toast('Admin loged in sucessful');
          localStorage.setItem('token', token);
          location.href = '/admin-over-view'
          break;
        }if("Driver" == userData[i].role){
          toast('Driver loged in sucessful');
          localStorage.setItem('token', token);
          location.href = '/driver-journey'
          break;
        }
        }
        
      }
   
      
    
  }
  }

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <>
    <NavBar />
    <div className=" flex flex-col w-full h-full lg:w-full">
    
      <h1 className="text-center text-2xl text-textBluePhant font-bold h-[8%]">
        LOGIN
      </h1>
      <div>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '1px solid red',
            padding: '16px',
            color: 'red',
          },
        }}
      />
    </div>
      <div
        style={{ backgroundImage: `url(${secondimage})` }}
        className="flex flex-row  justify-center items-start my-6 w-full h-[90%]"
      >
        <div
          style={{ backgroundImage: `url(${secondimage})` }}
          className="flex flex-row  justify-center items-start my-2 w-full h-[75%]"
        >
          <div
            style={{ backgroundImage: `url(${trackroute})` }}
            className="hidden md:flex text-center rounded-l-md  w-72 lg:w-80  h-full bg-no-repeat bg-cover"
          ></div>

        <div className="w-72 lg:w-80 h-[95%] lg:h-full flex justify-center items-start bg-whitePhant border border-darkBluePhant rounded-md sm:rounded-l-none  ">
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
              <form className=" h-full w-5/6 pb-10 " onSubmit={handleSubmit}>
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

                <button
                  type="submit"
                  data-testid="submit-form"
                  disabled={isLoading}
                  className={`h-10 lg:h-9 md:h-12 mt-2 lg:mt-2 md:mt-6 mb-3 w-full text-md ${
                    isLoading ? "bg-blue-100" : "bg-darkBluePhant"
                  } text-whitePhant rounded text-lg font-bold`}
                >
                  Log In
                </button>
                
                <p className="border-secondary smallDev sm:small my-4 ">
                  Don't remember Password? <span><a href="">Forget Password</a></span>
                </p>

                <p className="flex flex-row mt-2 lg:mt-2 md:mt-10 font-Montserrat text-sm ">
                  or login with </ p>
                  <div className="flex mt-0 mb-8 ">

                  <a href="" className="ml-4 ">
                    <FaLinkedin className="text-2xl text-darkBluePhant " />
                  </a>
                  <a href="" className="ml-4">
                      <FcGoogle className="text-2xl " />
                    </a>
                  </div>
                  
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      </div>
      <FooterBlock />
    </>
  );
};

export default LoginPage;






