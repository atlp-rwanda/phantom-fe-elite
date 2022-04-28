import React,{Component} from "react";
import destImg from "./../assets/desti.jpg";
import {FaLinkedin} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import './reset.css';
import { render } from "@testing-library/react";
class Reset extends Component{
state={
  disabled: true
}
handleChange=(e)=>{
  if(e.target.value.length >=9){
    this.setState({
      disabled:false
    });
  }else{
    this.setState({
      disabled: true
    });
  }
}
render(){

  return (
    <div className=" minGr container mx-w-md mx-auto mx-w-sm pt-8 ">
      <h1 className="pt-0 text-2xl text-center text-sky-500 font-bold">
        RESET PASSWORD
      </h1>
      <div className="flex justify-center px-6 mt-5 mb-10 py-6">
        <div className=" flex justify-center  rounded">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-200 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg border border-sky-500">
              <img src={destImg} alt="" className="w-full mx-0" role='image'/>
            </div>
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none border border-sky-500">
              <h2 className="pt-4 text-xl font-light font-Montserrat text-center ">
              Forgot password , provide your email and 
              </h2>
              <form className="mx-6">
                <div>
                  {/* <label >Enter your Email</label> */}
                  <input
                    className="emailInput w-full px-4 py-2 text-sm leading-tight text-gray-700 border my-5  border-sky-500 rounded "
                    type="email"
                    data-testid="emailInput"
                    placeholder="Email ..."
                    onChange={this.handleChange}
                  />
                </div>
                <button disabled={this.state.disabled} className=" btn w-full my-6 py-2 bg-sky-500 shadow-lg border-sky-500 rounded text-white">
                  Reset Password
                </button>
                <div>
                  <p className=" flex justify-between my-4 text-sm font-light font-Montserrat ">
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
}

export default Reset;
