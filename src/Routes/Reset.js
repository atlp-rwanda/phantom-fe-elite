import React from 'react';
import destImg from './../assets/destination.jpg'

const Reset = () => {
  return (
    <div className="container mx-auto">
      <h1 className="pt-4 text-2xl text-center text-sky-500 font-bold">
        RESET PASSWORD
      </h1>
      <div className='flex justify-center px-6 my-12'>
      <div className=" border border-sky-500 rounded-md ">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-gray-200 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
            <img src={destImg} alt="" className='w-full mx-0'/>
          </div>
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h2 className="pt-4 text-2xl font-light text-center">
              Forgot Password, Provide Your Email To Reset It
            </h2>
            <form>
              <div>


                <input
                  className="w-full px-0 py-2 text-sm leading-tight text-gray-700 border my-5 mx-0  border-sky-500 rounded "
                  type="text"
                  placeholder="Email ..."
                />
              </div>
              <button className="w-full my-2 py-2 bg-sky-500 shadow-lg shadow-sky-500/40 border-sky-600 rounded text-white">
                Reset Password
              </button>
              <div>
                  <p>Or login with</p>
               
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
