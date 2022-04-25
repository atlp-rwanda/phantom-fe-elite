import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from "../../assets/imgs/logo.jpg";
import './style.css';


const NavBar = () => {
  return (
    <nav className="flex justify-between sm:justify-between w-full px-6 pt-5 sm:px-12 sm:my-5 ">
      <ul className="flex items-end w-2/5 sm:w-1/3 no-underline list-none">
        <li>
          <img src={logoImg} alt="" className='cursor-pointer'/>
        </li>
        <Link to="/" className="logo-brand font-josefin no-underline mt-8 font-medium text-xl sm:text-5xl">
          hantom
        </Link>
      </ul>

      <ul className="no-underline list-none flex space-x-12 mt-11 sm:justify-evenly items-center w-1/2 sm:w-1/4 ">
        <li>
          <Link to="/" className='font-medium sm:font-semibold sm:text-center'>Sign In</Link>
        </li>
        <li>
          <Link to="/" className='text-sky-500 font-medium sm:font-semibold'>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar