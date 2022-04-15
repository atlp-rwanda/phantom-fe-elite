/** @format */
import React from "react";
import InputForm from "./Routes/InputForm";
import Home from "./Routes/Home";
import AboutPage from "./Routes/AboutPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<NavBar/>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route path="/input" element={<InputForm />}></Route>
					<Route path="/about" element={<AboutPage />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
