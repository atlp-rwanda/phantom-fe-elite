import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
<<<<<<< HEAD
		<nav className="container flex justify-around py-8 mx-auto bg-sky-700 font-squarePeg">
			<div>
				<h3 className="text-2xl font-medium text-blue-500">Phantom</h3>
			</div>
			<div className="space-x-8 bg-red-400">
=======
		<nav className="container flex justify-around py-8 mx-auto bg-white">
			<div>
				<h3 className="text-2xl font-medium text-blue-500">Phantom</h3>
			</div>
			<div className="space-x-8">
>>>>>>> 48418c0 (Initial tailwindcss setup)
				<Link to="/">Home</Link>
				<Link to="/input">Input Form</Link>
				<Link to="/about">About</Link>
			</div>
		</nav>
	);
}

export default NavBar