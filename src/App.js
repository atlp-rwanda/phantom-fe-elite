/** @format */
import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./Routes/LandingPage";
import AdminOperator from "./dashboard/Admin-operator";

const App = () => {
	return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route
            path="/admin"
            element={<AdminOperator />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
