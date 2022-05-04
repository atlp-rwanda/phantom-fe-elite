/** @format */
/** @format */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./component/footer-and-nav-template/NavBar";
import RegisterPage from "./Routes/RegisterPage";
import LoginPage from "../src/component/login"
import LandingPage from "./Routes/LandingPage";
import FooterBlock from "./component/footer-and-nav-template/FooterBlock";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col ">
        <NavBar />
        <main className="mb-auto flex-grow">
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/input" element={<LoginPage />}></Route>
            <Route exact path="/register" element={<RegisterPage />}></Route>
          </Routes>
        </main>
        <FooterBlock />
      </div>
    </BrowserRouter>
  );
};

export default App;
