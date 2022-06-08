import React from "react";
import { MdMyLocation } from "react-icons/md";
import { CgSearch } from "react-icons/cg";
import DataFromServer from "./DataFromServer";


const AsideUserPlan = ({task}) => {
  return (
    <aside className="bg-[#f3f3f3] col-start-1 col-end-13 md:col-end-6 lg:col-end-4 sm:block text-black row-start-3 row-end-17 border-r-2 border-solid border-[#f3f3f3]">
      <label
        htmlFor="email"
        className="relative text-black focus-within:text-black block w-[95%] mx-auto my-3"
      >
        <CgSearch className="pointer-events-none w-7 h-7 absolute top-[66%] transform -translate-y-1/2 left-1" />
        <input
          id="email"
          name="name"
          data-testid="name"
          type="text"
          placeholder="Search bus, route"
          className="h-8 rounded-lg mt-2 w-full text-black pl-12 placeholder:text-black bg-white"
        />
      </label>
      <section className="h-fit w-[95%] px-5 bg-white rounded mx-auto mt-5 shadow-xl">
        <div className="font-semibold">Plan your trip</div>
        <form role="form" className="w-full h-fit">
          <label
            htmlFor="email"
            className="relative text-black focus-within:text-black block"
          >
            <MdMyLocation className="pointer-events-none w-7 h-7 absolute top-[60%] transform -translate-y-1/2 right-2" />
            <input
              id="email"
              name="name"
              data-testid="name"
              type="text"
              placeholder="Current Location"
              className="h-8 rounded-lg mt-2 w-full text-black pl-3 pr-10 placeholder:text-black bg-gray-200 focus-within:bg-gray-100"
            />
          </label>
          <div className="">
            <input
              name="email"
              data-testid="email"
              type="text"
              placeholder="Destination"
              className="h-8 rounded-lg w-full mt-5 bg-gray-200 text-black pl-3 placeholder:text-black focus-within:bg-gray-100"
            />
          </div>
          <button type="submit" className="mt-2 font-semibold">
            Depart Now
          </button>
        </form>
      </section>
      <p className="mt-8 ml-6">Recommendend Routes</p>
      <div>
       < DataFromServer/>
      </div>
    </aside>
  );
};

export default AsideUserPlan;
