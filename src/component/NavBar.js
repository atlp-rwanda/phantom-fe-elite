import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container flex justify-around py-8 mx-auto bg-sky-700 font-squarePeg">
      <div>
        <h3 className="text-2xl font-medium text-blue-500">Phantom</h3>
      </div>
      <div className="space-x-8 bg-red-400">
        <Link to="/">Home</Link>
        <Link to="/login">Input Form</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default NavBar;
