/** @format */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Reset from "./Routes/Reset";
import FooterBlock from "./component/footer-and-nav-template/FooterBlock";
import NavBar from "./component/footer-and-nav-template/NavBar";
import ResetP from "./Routes/confirmation-password";

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<NavBar/>
				<Routes>
					<Route path="/reset-password" element={<Reset/>}></Route>
					<Route path="/confirm-new-password" element={<ResetP/>}></Route>
				</Routes>
				<FooterBlock />
			</div>
		</BrowserRouter>
	);
};

export default App;
