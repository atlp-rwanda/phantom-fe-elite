/** @format */
import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RegisterPage from "./Routes/RegisterPage";
import LandingPage from "./Routes/LandingPage";
import Bus from "./views/Bus";
import AdminOperator from "./views/Admin-operator";

const App = () => {
	return (
		<BrowserRouter>
			<div className="min-h-screen">
				<Routes>
					<Route exact path="/" element={<LandingPage />}></Route>
					<Route exact path="/register" element={<RegisterPage />}></Route>
            <Route
            path="/operator"
            element={<AdminOperator />}
          ></Route>
					<Route exact path="/bus" element={<Bus />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
