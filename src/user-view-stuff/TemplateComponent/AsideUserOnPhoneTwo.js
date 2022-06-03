import React, { useEffect, useRef } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdMyLocation } from "react-icons/md";
import { CgSearch } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";



const AsideUserOnPhoneTwo = ({ setAsideOpen }) => {
  let sideRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!sideRef.current.contains(event.target)) {
        setAsideOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.addEventListener("mousedown", handler);
    };
  });
  return (
    <aside
      className="bg-[#f3f3f3] absolute text-black md:w-1/2 md:h-2/3 lg:hidden"
      ref={sideRef}
    >
      <div className=" flex flex-between items-center w-[90%] mx-auto">
        <label
          htmlFor="email"
          className="relative text-black focus-within:text-black block w-[65%] mx-auto my-3"
        >
          <CgSearch className="pointer-events-none w-7 h-7 absolute top-3 transform-translate-y-1/2 left-1" />
          <input
            id="email"
            name="name"
            data-testid="name"
            type="text"
            placeholder="Search bus, route"
            className="h-8 rounded-lg mt-2 w-full text-black pl-12 placeholder:text-black bg-white"
          />
        </label>
        <RiCloseFill
          className="m-3 h-8 w-[13%] text-red-700 bg-adminFooterBackground rounded hover:bg-blue-400 hover:text-red-400"
          onClick={() => {
            setAsideOpen(false);
          }}
        />
      </div>
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
      <section className="w-[95%] h-[37%] md:h-[53%] mx-auto mt-3 mb-1 bg-white overflow-auto">
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

export default AsideUserOnPhoneTwo;
