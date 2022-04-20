import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
		<nav className="container flex justify-around py-8 mx-auto bg-blue-500">
			<div>
				<h3>Phantom</h3>
			</div>
			<div className="space-x-8">
				<Link to="/">Home</Link>
				<Link to="/input">Input Form</Link>
				<Link to="/about">About</Link>
			</div>
		</nav>
	);
}

export default NavBar
