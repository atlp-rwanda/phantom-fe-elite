/** @format */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./component/login";
import LandingPage from "./component/landingPage/LandingPage";
import FooterBlock from "./component/footer-and-nav-template/FooterBlock";
import NavBar from "./component/footer-and-nav-template/NavBar";
import "./main.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col ">
        <NavBar />
        <main className="mb-auto flex-grow">
          <Routes>

          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
           
          </Routes>
        </main>
        <FooterBlock />
      </div>
    </BrowserRouter>
  );
};

export default App;
