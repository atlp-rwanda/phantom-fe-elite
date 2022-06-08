/** @format */

import "regenerator-runtime/runtime";
import "./reset.css";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import trackroute from "../assets/imgs/trackroute.jpg";
import secondimage from "../assets/images/secondImage.jpg";
import { Formik } from "formik";
import * as Yup from "yup";
import NavBar from "../component/footer-and-nav-template/NavBar";
import FormSubscribe from "../component/FormSubscribe";
import FooterBlock from "../component/footer-and-nav-template/FooterBlock";

const Page404 = ({ onSubmit }) => {
  var token = localStorage.getItem('token')
	if (!token) {
    location.href = '/login'
  } else {
    return (
      <>
        <NavBar />
        <div className="flex flex-col text-center pt-10  w-full h-[70%] lg:w-full">
          <h1 className="text-6xl pt-7 text-textBluePhant font-bold">
            404 
          </h1>
          <p>Page not found</p>
          <a href="/" className={`h-10 lg:h-9 md:h-12 mt-2 lg:mt-2 md:mt-6 mb-3 w-full text-md rounded text-lg font-bold`}>Back home</a>
        </div>
        <FooterBlock />
      </>
    );
  }

  
};

export default Page404;
