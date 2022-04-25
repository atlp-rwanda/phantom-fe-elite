/** @format */
import React from "react";
<<<<<<< HEAD
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Reset from "./Routes/Reset";
import FooterBlock from "./component/footer-and-nav-template/FooterBlock";
import NavBar from "./component/footer-and-nav-template/NavBar";

=======
import InputForm from "./Routes/InputForm";
import Home from "./Routes/Home";
import AboutPage from "./Routes/AboutPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
>>>>>>> 828a684842516364ea1b8895460ad0b3a9be3d11

const App = () => {
	return (
		<BrowserRouter>
<<<<<<< HEAD
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Reset/>}></Route>
        </Routes>
        <FooterBlock />
      </div>
    </BrowserRouter>
=======
			<div>
				<NavBar/>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route path="/input" element={<InputForm />}></Route>
					<Route path="/about" element={<AboutPage />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
>>>>>>> 828a684842516364ea1b8895460ad0b3a9be3d11
	);
};

export default App;
