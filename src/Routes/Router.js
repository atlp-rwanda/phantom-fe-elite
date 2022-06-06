import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Reset from "../views/Reset";
import RegisterPage from "../views/RegisterPage";
import LoginPage from "../views/login";
import LandingPage from "../views/LandingPage";
import Bus from "../views/operator/Bus";
import ConfirmPassword from "../views/confirmation-password";
import UpdateOperator from "../views/operator/UpdateOperator";
import AdminView from '../views/user/AdminView';
import CreateDriver from "../views/Driver/Admin-Driver";
import RouteLines from "../views/operator/RouteLines"
import AdminOperator from "../views/Admin-operator";
import DriverView from "../views/Driver/DriverView";
import BusMotion from "../views/Driver/BusMotion";
import UpdateDriver from "../views/Driver/UpdateDriver";



const Router = () => {
  	return (
		<BrowserRouter>
			<div className="h-screen flex flex-col ">
				<Routes>
					<Route exact path="/register" element={<RegisterPage />}></Route>
					<Route exact path="/operator-bus" element={<Bus />}></Route>
					<Route path="/reset-password" element={<Reset />}></Route>
					<Route path="/confirm-new-password" element={<ConfirmPassword />}></Route>
					<Route exact path="/login" element={<LoginPage />}></Route>
					<Route exact path="/updateoperator" element={<UpdateOperator />}></Route>
					<Route path="/admin-over-view" element={<AdminView />}></Route>
					<Route path="/updatedriver" element={<UpdateDriver/>}></Route>
					<Route path="/create-driver" element={<CreateDriver />}></Route>
                   <Route path="/operator" element={<AdminOperator />}></Route>
                   <Route exact path="/operator-routes" element={<RouteLines />}></Route>
                   <Route exact path="/driver-journey" element={<BusMotion />}></Route>
				   <Route exact path="/driver-map" element={<DriverView />}></Route>
					<Route exact path="/" element={<LandingPage />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}




export default Router;
