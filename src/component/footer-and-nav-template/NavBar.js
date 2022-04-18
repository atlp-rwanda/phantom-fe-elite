import React from 'react'
import { Link } from 'react-router-dom';
import smallImg from '../../assets/FINAL-LOGO.jpg'
import "./style.css"
const NavBar = () => {
  return (
		<nav className="container flex justify-around py-4 mx-auto " title="NavBarPage">
			<div className="">
			<img src={smallImg} id="smallImage"className="w-md lg:w-full"/>
			</div>
			<div className=" flex justify-center items-end sm:ml-40">
  <div>
	<Link to="/login" className='ml-10 lg:font-semibold sm:text-end headerSmallFont sm:text-sm lg:text-md text-third-text1'>Sign In</Link>
  </div>
  <div >
	<Link to="/register" className='ml-4 text-secondary  font-semibold  headerSmallFont sm:text-sm lg:text-md'>Sign Up</Link>
  </div>
  </div>
		</nav>
	);
}

export default NavBar
