import React,{useState} from "react";
import {useFormik}from "formik";
import * as Yup from "yup";
const loginPage = () => {
  const formik=useFormik({
    initialValues:{
        email:"",
        password:""
    },
   validationSchema: Yup.object({     
       email:Yup.string()
       .email("Invalid email address")
       .required("Required*"),
       password:Yup.string()
       .min(4,"must be grater than 4 characters")
       .required("Required*"),
   }),
    onSubmit: (values)=>{
        console.log(values)

    }
})
console.log(formik.touched)
  return (
    <div className="bg-green-300">
      <h1 className="text-center text-2xl text-blue-500 font-semiboldb">
        LOGIN
      </h1>
      <div className="flex flex-row  justify-center items-start mt-6 h-screen  ">
        <div className="h-3/4 w-96 text-center bg-slate-500">
			<img src="" alt="Rectangle 8.png"/>
		</div>
        <div className="flex justify-center items-start h-3/4 w-96 border border-blue-500 pt-6">
          <form className=" h-full w-80" onSubmit={formik.handleSubmit}>
            <input
             
              type="text"
              id="email"
              placeholder="Email..."
              className="mt-10 h-10 w-80 pl-3 border border-blue-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            { formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p>:null}
            <br />
            
            <input
            
              type="password"
              id="password"
              placeholder="Password..."
              className="h-10 w-80 pl-3 border border-blue-500 "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            { formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p>:null}
            <br />
            <a href="" className=" ">
              Reset Password
            </a>
            <br />
            <button type="submit" className="h-10 w-80 bg-blue-800 text-white">
              Login
            </button>
            <br />
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
