import React from "react";
import { FaBus } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideSection = ({route}) => {
  return (
    <section className="h-fit w-[95%] px-5 bg-white rounded mx-auto mt-5 shadow-xl h-28 md:h-32">
    <p className="text-center w-[95%] bg-adminFooterBackground relative top-2">{route.coming}</p>
    <div className="flex justify-between">
    <FaBus className="relative top-4 w-12 h-12"/>
    <div className="mt-2">
    <p>{route.description}</p>
    <p className="text-emerald-500">{route.seats}</p>
    <Link to= "/user-view">see on map</Link>
    </div>
    <div className="mt-2">
        <p className="w-14">status</p>
        <p className="text-black w-14">{route.speed_status}</p>
    </div>
    </div>
    </section>
  )}
export default SideSection