import React from "react";
import { FaBus } from "react-icons/fa";

const SideSection = ({task}) => {
  return (
    <section className="h-fit w-[95%] px-5 bg-white rounded mx-auto mt-5 shadow-xl h-28 md:h-32">
    <p className="text-center w-[95%] bg-adminFooterBackground relative top-2">Kimironko to Downtown</p>
    <div className="flex justify-between">
    <FaBus className="relative top-4 w-12 h-12"/>
    <div className="mt-2">
    <p>{task.descrption}</p>
    <p>Coming from kimironko</p>
    <p className="text-emerald-500">{task.seats}</p>
    </div>
    <div className="mt-2">
        <p className="w-14">status</p>
        <p className="text-black w-14">{task.status}</p>
    </div>
    </div>
    </section>
  )
}

export default SideSection