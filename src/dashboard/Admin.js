import React from "react";
import TableRow from "./TableRow";
import { MdArrowDropDown } from "react-icons/md";
import {
  RiAddCircleLine,
  RiArrowDropDownFill,
  RiSearchLine,
} from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBus, FaUserCircle } from "react-icons/fa";
import TableGenerator from "./TableGenerator";
import HeaderAdmin from "./component/HeaderAdmin";
import AsideAdmin from "./component/AsideAdmin";
import FooterAdmin from "./component/FooterAdmin";
import TableHeader from "./TableHeader";


const Admin = () => {
  return (
    <div className="grid h-screen w-screen grid-cols-12 grid-rows-12 font-Nunito bg-[#f3f3f3]">
      {/* <header className="bg-white col-start-3 col-end-13  row-start-1 row-end-2">
        <div className="flex justify-end h-full">
          <section className="w-1/3 flex justify-between items-center h-full">
            <div className="flex items-center">
              <div className="font-black text-xl">EN</div>
              <RiArrowDropDownFill className="text-4xl" />
              <IoMdNotifications className="text-4xl" />
            </div>
            <div className="flex items-center border-l-2 border-solid border-black h-full">
              <FaUserCircle className="text-[40px] bg-white text-darkBluePhant mx-3 my-1" />
              <div className="flex">
                <div className="flex flex-col">
                  <div className="font-black text-lg">Andela Rwanda</div>
                  <div className="font-gray-400">User</div>
                </div>
                <RiArrowDropDownFill className="text-[50px] text-darkBluePhant" />
              </div>
            </div>
          </section>
        </div>
      </header> */}
      < HeaderAdmin />
      <main className=" flex flex-col col-start-3 col-end-13 row-start-2 row-end-12 px-3 mx-2 mt-2 bg-white">
        <div className="my-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-[90px]">
          Operator
        </div>
        <div className="flex flex-row items-center my-3">
          <div className="bg-darkBluePhant p-2 rounded-md font-bold text-white flex items-center justify-between w-1/5">
            <RiAddCircleLine className="text-white text-2xl" />
            <div>Add new Operator</div>
          </div>
          <form action="" className="w-2/5 h-10 mx-12">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full pl-2 border-2 border-solid border-[#6C757D] rounded-md"
            />
          </form>
        </div>
        < TableHeader /> 
        <div className="overflow-auto ">
          {/* rendering the all users from the database using this component TableGenerator */}
          < TableGenerator />
        </div>
      </main>
      < AsideAdmin /> 
      < FooterAdmin />
    </div>
  );
};

export default Admin;
