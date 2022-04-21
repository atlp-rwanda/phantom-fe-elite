import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.jpg";

const NavBar = () => {
  return (
    <nav
      className="flex justify-between sm:justify-between w-full px-8 py-4 sm:pl-20 h-[12.5%]"
      role="navigation"
    >
      <ul className="flex items-center w-2/5 sm:w-1/3 no-underline list-none">
        <li>
          <img src={logoImg} alt="" className="w-5/6 sm:w-full " />
        </li>
        <Link
          to="/"
          className=" font-josefin no-underline font-semibold text-xl sm:text-5xl"
        >
          hantom
        </Link>
      </ul>

      <ul className="no-underline list-none flex justify-evenly items-center w-1/4">
        <li>
          <Link to="/input" className="font-semibold">
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/register" className="text-sky-500 font-semibold">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
