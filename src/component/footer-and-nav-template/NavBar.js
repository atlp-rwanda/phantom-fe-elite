import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from "../../assets/images/logo.jpg";


const NavBar = () => {
  return (
    <nav className="flex justify-between w-full">
      <ul className="flex items-end w-1/3 no-underline list-none">
        <li>
          <img src={logoImg} alt="" />
        </li>
        <Link to="/" className="logo-brand no-underline font-medium text-5xl">
          hantom
        </Link>
      </ul>

      <ul className="no-underline list-none flex justify-evenly items-center w-1/4">
        <li>
          <Link to="/input" className='font-semibold'>Sign In</Link>
        </li>
        <li>
          <Link to="/about" className='text-sky-600 font-semibold'>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar
