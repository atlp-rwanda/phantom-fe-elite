/** @format */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Reset from "./Routes/Reset";
import FooterBlock from "./component/footer-and-nav-template/FooterBlock";
import NavBar from "./component/footer-and-nav-template/NavBar";

import InputForm from "./Routes/InputForm";
import Home from "./Routes/Home";
import AboutPage from "./Routes/AboutPage";

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<NavBar/>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route path="/input" element={<InputForm />}></Route>
					<Route path="/about" element={<AboutPage />}></Route>
					<Route path="/reset" element={<Reset/>}></Route>
				</Routes>
				<FooterBlock />
			</div>
		</BrowserRouter>
	);
};

export default App;
