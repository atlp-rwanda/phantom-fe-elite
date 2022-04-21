import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from "../../assets/images/logo.jpg";


const NavBar = () => {
  return (
    <nav className="flex justify-between sm:justify-between w-full px-6 sm:px-12 my-5 sm:bg-darkBluePhant">
      <ul className="flex items-end w-2/5 sm:w-1/3 no-underline list-none">
        <li>
          <img src={logoImg} alt="" />
        </li>
        <Link
          to="/"
          className=" font-josefin no-underline font-medium text-xl sm:text-5xl"
        >
          hantom
        </Link>
      </ul>

      <ul className="no-underline list-none flex justify-between sm:justify-evenly items-center w-1/2 sm:w-1/4">
        <li>
          <Link to="/input" className="font-medium sm:font-semibold">
            Sign In
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-darkBluePhant font-medium sm:font-semibold"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar
