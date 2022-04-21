import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from "../../assets/imgs/logo.jpg";
import './style.css';


const NavBar = () => {
  return (
    <nav className="flex justify-between w-full px-12 my-5 ">
      <ul className="flex items-end w-3/4 no-underline list-none">
        <li>
          <img src={logoImg} alt="" className='cursor-pointer'/>
        </li>
        <Link to="/" className="logo-brand no-underline font-medium text-5xl">
          hantom
        </Link>
      </ul>

      <ul className="no-underline list-none flex justify-evenly items-center w-1/4">
        <li>
          <Link to="/" className='lg:font-semibold sm:text-center'>Sign In</Link>
        </li>
        <li>
          <Link to="/" className='text-sky-500 font-semibold'>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar