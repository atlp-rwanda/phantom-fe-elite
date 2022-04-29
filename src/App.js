/** @format */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./component/footer-and-nav-template/NavBar";
import LandingPage from "./Routes/LandingPage";
import FooterBlock from "./component/footer-and-nav-template/FooterBlock";
import AdminLogout from "./component/AdminLogout";


const App = () => {
	return (
    <BrowserRouter>
        <AdminLogout />
    </BrowserRouter>
  );
};

export default App;
