import React from "react";
import landing from "../assets/images/landing-image.jpg";

const LandingPage = () => {
  return (
    <>
      <main>
        <section
          className="flex 
        flex-row-reverse
         items-center justify-between
         "
      >
        <img className="w-3/5" src={landing} alt="" />
        <div>
          <h1 className="text-sky-500 leading-9 text-4xl">
            Track bus movements
          </h1>
          <h2 className="text-lg font-black mt-4 text-xl">
            within you hand device
          </h2>
        </div>
      </section>
      <section>
        <p className="w-2/5 font-light leading-8">
          Check the location of any bus on any Kigali route. waiting is no
          longer an option, with Phantom you can see from the sky!
        </p>
      </section>
      <section className="flex justify-around items-center mx-0 mt-8 mb-16">
        <div className="flex w-2/5">
          <button className=" w-72 h-12 text-white rounded-3xl p-0 cursor-pointer border-none bg-sky-500">
            See for yourself
          </button>
        </div>
        <div className="flex w-3/5 justify-around px-16">
          <input
            className="border-2 w-80 h-12 pl-2 rounded-sm border-black border-solid"
            type="text"
            placeholder="Email ...."
          />
          <button className="w-40 h-12 border-0 border-none rounded bg-gray-900 text-white cursor-pointer">
            Subcribe
          </button>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
