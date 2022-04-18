import React from "react";

const RegisterPage = () => {
  return (
    <div className="h-screen items-center bg-emerald-100 ">
      <h1 className="text-center">REGISTER</h1>
      <div className="flex flex-row h-2/3 w-full justify-center items-center mt-6 ">
        <div className="h-full w-1/3 text-center bg-slate-500"></div>
        <div className="h-full w-1/3 text-center bg-lime-500">
          <form>
            <input
              type="text"
              value=""
              placeholder="Email"
              className="mt-16 h-8 w-80"
            />
            <br />
            <br />
            <input
              type="text"
              value=""
              placeholder="Username"
              className="h-8 w-80"
            />
            <br />
            <br />
            <input
              type="text"
              value=""
              placeholder="Password"
              className="h-8 w-80"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
