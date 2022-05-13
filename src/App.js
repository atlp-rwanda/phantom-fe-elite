// /** @format */
// import React from "react";
// import Router from "./Routes/Router";
// const App = () => {
// 	return (
// 		<Router />
// 	)
// };
// export default App;


/** @format */
import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RegisterPage from "./views/RegisterPage";
import LandingPage from "./views/LandingPage";
import Bus from "./views/operator/Bus";
// import AdminOperator from "./views/Admin-operator";
import UpdateOperator from "./views/operator/UpdateOperator";
import LoginPage from "./views/login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/register" element={<RegisterPage />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route path="/updateoperator" element={<UpdateOperator />}></Route>
          <Route path="/bus" element={<Bus />}></Route>
		  {/* <Bus></Bus> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
