import React, { useState } from "react";
import trackroute from "../assets/desti.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Formik } from "formik";
import * as Yup from "yup";
import '../main.css';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const signUpSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
    password: Yup.string()
      .min(4, "Minimum of 4 letters")
      .required("password is Required"),
  });
  return (
  
    <div className="m-0 p-0 w-full h-full">
      
      <h1 className="text-center text-md  sm:text-xl text-secondary font-bold xl:text-3xl xl:mt-4" title="Login">
        LOGIN
      </h1>
      <div className="flex flex-row  justify-center items-start mt-2 h-screen w-full">
        <div className=" hidden  rounded-md h-full w-5/12 text-center 
        sm:block sm:h-3/5 sm:w-1/4 sm:mt-5
        md:h-1/4 md:w-2/5
        lg:h-3/5 lg:w-1/4 xl:h-3/6">
          <img src={trackroute} alt="route" className="hidden sm:block h-full w-full" />
        </div>
        <div className="m-10 bg-third-white rounded-md py-3 w-full flex justify-center  border border-secondary
        sm:h-3/5 sm:w-1/4 sm:py-0 sm:mt-5 sm:ml-0 sm:rounded-tl-none sm:rounded-bl-none
        md:h-1/4 md:w-2/5

        lg:h-3/5 lg:w-1/4 xl:h-3/6  ">
          <Formik
            initialValues={{ email: "", username: "", password: "" }}
            validationSchema={signUpSchema}
            onSubmit={(values) => {
              setIsLoading(true);
   
              setTimeout(() => {
                
                setIsLoading(false);
              }, 3000);
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
              <form className=" h-full w-5/6 pt-10 xl:pt-15" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  data-testid="email-input"
                  placeholder="Email..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="h-7 w-full pl-3 border border-secondary rounded text-xs placeholder:text-xs
                  xl:h-12  xl:placeholder:text-md"
                />
                {touched.email && errors.email ? (
                  <span className="text-red text-xs marginBottomForErrors">{errors.email}</span>
                ) : null}

                <br />
                <br />
               
                <input
                  type="password"
                  name="password"
                  data-testid="password-input"
                  placeholder="Password..."
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="h-7 w-full pl-3 border border-secondary rounded text-xs placeholder:text-xs
                  xl:h-12  xl:placeholder:text-md"
                />
                {touched.password && errors.password ? (
                  <span className="text-red text-xs marginBottomForErrors">
                    {errors.password}
                  </span>
                ) : null}

                <br />
                <div className="p-1"></div>
                <a href="" className="small font-Montserrat text-xs text-third-text4 xl:text-sm">
                  Reset Password
                </a>
                
                <br />
              

                <button
                  type="submit"
                  value="Log in"
                  data-testid="submit-form"
                  disabled={isLoading}
                  className={`h-7 w-full ${
                    isLoading ? "text-isLoadingColor" : "btn"
                  } text-white rounded text-xs font-Montserrat font-bold
                  xl:h-12  xl:placeholder:text-md`}
                >
                  Log in
                </button>
                <p className="border-secondary smallDev sm:small my-4 ">
              Don't remember Password? <span><a href="">Forget Password</a></span>
            </p>
            <div>
            <p className=" flex gap-3 content-end text-third-text4 text-xs font-light font-Montserrat ">
                        Or login with
                        <a href="" className="ml-2 ">
                          <FaLinkedin className="text-xl text-primary" />
                        </a>
                        <a href="" className="ml-2 flex">
                          <FcGoogle className="text-xl text-primary" />
                        </a>
                      </p>
                    </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
     
    </div>
    
  );
};

export default LoginPage;

