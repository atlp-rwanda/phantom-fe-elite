/** @format */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Reset from "./Routes/Reset";
import RegisterPage from "./Routes/RegisterPage";
import LoginPage from "../src/component/login";
import LandingPage from "./Routes/LandingPage";
import Bus from "./views/operator/Bus";
import Layout from "./component/layout/Layout";
const App = () => {
	return (
		<BrowserRouter>
			<div className="h-screen flex flex-col ">
				<Routes>
					<Route exact path="/" element={<LandingPage />}></Route>
					<Route exact path="/register" element={<RegisterPage />}></Route>
					<Route exact path="/bus" element={<Bus />}></Route>
					<Route path="/reset-password" element={<Reset />}></Route>
					<Route exact path="/login" element={<LoginPage />}></Route>
					<Route exact path="/test" element={<Layout />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
