/** @format */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./component/footer-and-nav-template/NavBar";
import LandingPage from "./Routes/LandingPage";
import FooterBlock from "./component/footer-and-nav-template/FooterBlock";

const App = () => {
	return (
    <BrowserRouter>
      <div className="background-image">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
        </Routes>
        <FooterBlock />
      </div>
    </BrowserRouter>
  );
};

export default App;
