/** @format */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Reset from "./Routes/Reset";
import RegisterPage from "./Routes/RegisterPage";
import LoginPage from "../src/component/login";
import LandingPage from "./Routes/LandingPage";
import ResetP from "./Routes/confirmation-password";
import Bus from "./views/operator/Bus";
import logout from "./component/AdminLogout"

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col ">
        {/* <NavBar /> */}
        <main className="mb-12 flex-grow">
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/login" element={<LoginPage />}></Route>
            <Route exact path="/register" element={<RegisterPage />}></Route>
            <Route path="/reset-password" element={<Reset />}></Route>
            <Route path="/confirm-new-password" element={<ResetP />}></Route>
			      <Route exact path="/bus" element={<Bus />}></Route>
          </Routes>
        </main>
      </div>
      {/* <FooterBlock /> */}
    </BrowserRouter>
  );
};

export default App;
