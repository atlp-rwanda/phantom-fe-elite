/** @format */
import React from "react";
import InputForm from "./Routes/InputForm";
import AboutPage from "./Routes/AboutPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./component/footer-and-nav-template/NavBar";
import LandingPage from "./component/LandingPage";
import FooterBlock from "./component/footer-and-nav-template/FooterBlock";

const App = () => {
	return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/input" element={<InputForm />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          {/* <Route path="/landing" element={<Home />}></Route> */}
        </Routes>
        <FooterBlock />
      </div>
    </BrowserRouter>
  );
};

export default App;
