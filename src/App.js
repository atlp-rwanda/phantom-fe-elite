/** @format */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RegisterPage from "./Routes/RegisterPage";
import LandingPage from "./Routes/LandingPage";
import Bus from "./views/admin/Bus";
import Operator from "./views/admin/Operator";

const App = () => {
	return (
		<BrowserRouter>
			<div className="h-screen flex flex-col ">
				<main className="mb-auto flex-grow">
					<Routes>
						<Route exact path="/" element={<LandingPage />}></Route>
						<Route exact path="/register" element={<RegisterPage />}></Route>
						<Route exact path="/bus" element={<Bus />}></Route>
						<Route exact path="/operator" element={<Operator/>}></Route>
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
