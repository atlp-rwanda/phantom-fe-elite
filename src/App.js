/** @format */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Reset from "./Routes/Reset";
import FooterBlock from "./component/footer-and-nav-template/FooterBlock";
import NavBar from "./component/footer-and-nav-template/NavBar";


const App = () => {
	return (
		<BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Reset/>}></Route>
        </Routes>
        <FooterBlock />
      </div>
    </BrowserRouter>
	);
};

export default App;
