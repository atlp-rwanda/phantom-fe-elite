/** @format */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./Routes/LandingPage";
import Admin from "./dashboard/Admin";
import NavBar from "./component/footer-and-nav-template/NavBar";
import FooterBlock from "./component/footer-and-nav-template/FooterBlock";
import NewOperatorForm from "./dashboard/NewOperatorForm";

const App = () => {
	return (
    <BrowserRouter>
      <div className="min-h-screen">
        {/* < NavBar />  */}
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/form" element={<NewOperatorForm />}></Route>
        </Routes>
        {/* < FooterBlock /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
