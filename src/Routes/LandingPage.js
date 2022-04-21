import React from "react";
import landing from "../assets/images/landing-image.jpg";

const LandingPage = () => {
  return (
    <main className="py-5 mb-2 px-8">
      <section
        className="flex
        flex-col-reverse
        sm:flex-row-reverse
         items-center sm:justify-between
         "
      >
        <img className="w-full sm:w-3/5" src={landing} alt="" />
        <div>
          <h1 className="text-textBluePhant leading-9 text-3xl sm:text-4xl">
            Track bus movements
          </h1>
          <h2 className="text-lg font-blackPhant mt-4 text-xl">
            within you hand device
          </h2>
        </div>
      </section>
      <section className="mt-8 sm:mt-0">
        <p className="w-full sm:w-2/5 font-light leading-8">
          Check the location of any bus on any Kigali route. waiting is no
          longer an option, with Phantom you can see from the sky!
        </p>
      </section>
      <section className="flex flex-col sm:flex-row sm:justify-around sm:items-center mx-0 sm:mt-8 sm:mb-16 my-8">
        <div className="flex w-full justify-around sm:w-2/5 ">
          <button className=" w-40 sm:w-72 h-8 sm:h-12 text-whitePhant rounded-3xl p-0 cursor-pointer border-none bg-darkBluePhant">
            See for yourself
          </button>
        </div>
        <div className="flex w-full sm:w-3/5 justify-around mt-16 sm:mt-0 sm:px-16">
          <input
            className="border-2 w-44 sm:w-40 lg:w-80 h-9 sm:h-12 sm:mr- pl-2 rounded-sm border-black border-solid"
            type="text"
            placeholder="Email ...."
          />
          <button className="w-24 sm:w-24 lg:w-40 h-9 sm:h-12  border-0 border-none rounded bg-blackPhant text-whitePhant cursor-pointer">
            Subcribe
          </button>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
