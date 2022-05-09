/** @format */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RegisterPage from "./Routes/RegisterPage";
import LandingPage from "./Routes/LandingPage";
import Bus from "./views/operator/Bus";
const App = () => {
	return (
		<BrowserRouter>
			<div className="h-screen flex flex-col ">
				<Routes>
					<Route exact path="/" element={<LandingPage />}></Route>
					<Route exact path="/register" element={<RegisterPage />}></Route>
					<Route exact path="/bus" element={<Bus />}></Route>
				</Routes>
			</div>
			
		</BrowserRouter>
	);
};

export default App;
