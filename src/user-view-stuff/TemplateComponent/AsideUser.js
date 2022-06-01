import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdMyLocation } from "react-icons/md";
import { CgSearch } from "react-icons/cg";

const AsideUser = () => {
  return (
    <aside className="bg-[#f3f3f3] sm:col-start-1 sm:col-end-4 md:col-end-5 lg:col-end-4 hidden sm:block text-black row-start-3 row-end-13 border-r-2 border-solid border-[#f3f3f3]">
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
      <section className="w-[95%] h-fit mx-auto mt-3 px-5 rounded shadow-2xl bg-white">
        <div className="text-base font-bold">31 D</div>
        <div className="">Kimironko to downtown</div>
      </section>
      <section className="w-[95%] h-[37%] mx-auto mt-3 mb-1 bg-white overflow-auto">
        <div className="flex px-5 justify-between text-xs font-semibold pt-1 ">
          <span>
            <IoLocationOutline className="inline-block text-base" />
            <span className="pl-2">Kimironko kwa Rwahama</span>
          </span>
          <span>13:30 PM</span>
        </div>
        <div className="flex px-5 justify-between text-xs font-semibold pt-1 ">
          <span>
            <IoLocationOutline className="inline-block text-base" />
            <span className="pl-2">Kimironko kwa Rwahama</span>
          </span>
          <span>13:30 PM</span>
        </div>
        <div className="flex px-5 justify-between text-xs font-semibold pt-1 ">
          <span>
            <IoLocationOutline className="inline-block text-base" />
            <span className="pl-2">Kimironko kwa Rwahama</span>
          </span>
          <span>13:30 PM</span>
        </div>
        <div className="flex px-5 justify-between text-xs font-semibold pt-1 ">
          <span>
            <IoLocationOutline className="inline-block text-base" />
            <span className="pl-2">Kimironko kwa Rwahama</span>
          </span>
          <span>13:30 PM</span>
        </div>
        <div className="flex px-5 justify-between text-xs font-semibold pt-1 ">
          <span>
            <IoLocationOutline className="inline-block text-base" />
            <span className="pl-2">Kimironko kwa Rwahama</span>
          </span>
          <span>13:30 PM</span>
        </div>
        <div className="flex px-5 justify-between text-xs font-semibold pt-1 ">
          <span>
            <IoLocationOutline className="inline-block text-base" />
            <span className="pl-2">Kimironko kwa Rwahama</span>
          </span>
          <span>13:30 PM</span>
        </div>
        <div className="flex px-5 justify-between text-xs font-semibold pt-1 ">
          <span>
            <IoLocationOutline className="inline-block text-base" />
            <span className="pl-2">Kimironko kwa Rwahama</span>
          </span>
          <span>13:30 PM</span>
        </div>
        <div className="flex px-5 justify-between text-xs font-semibold pt-1 ">
          <span>
            <IoLocationOutline className="inline-block text-base" />
            <span className="pl-2">Kimironko kwa Rwahama</span>
          </span>
          <span>13:30 PM</span>
        </div>
        <div className="flex px-5 justify-between text-xs font-semibold pt-1 ">
          <span>
            <IoLocationOutline className="inline-block text-base" />
            <span className="pl-2">Kimironko kwa Rwahama</span>
          </span>
          <span>13:30 PM</span>
        </div>
      </section>
    </aside>
  );
};

export default AsideUser;
