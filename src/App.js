/** @format */
import React from "react";
import InputForm from "./Routes/InputForm";
import Home from "./Routes/Home";
import AboutPage from "./Routes/AboutPage";
import UpdateOperator from "./Routes/UpdateOperator";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route path="/input" element={<InputForm />}></Route>
					<Route path="/about" element={<AboutPage />}></Route>
					<Route path="/update" element={<UpdateOperator />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
