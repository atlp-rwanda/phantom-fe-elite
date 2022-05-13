/** @format */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Reset from "./views/Reset";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/login";
import LandingPage from "./views/LandingPage";
import ResetP from "./views/confirmation-password";
import UpdateDriver from "./views/Driver/updateDriver";
import CreateDriver from "./views/Driver/CreateDriver";


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
            <Route path="/driver" element={<UpdateDriver />}></Route>
            <Route path="/create-driver" element={<CreateDriver />}></Route>
           
          </Routes>
        </main>
      </div>
      {/* <FooterBlock /> */}
    </BrowserRouter>
  );
};
export default App;
