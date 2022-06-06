import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Reset from "../views/Reset";
import RegisterPage from "../views/RegisterPage";
import LoginPage from "../views/login";
import LandingPage from "../views/LandingPage";
import Bus from "../views/operator/Bus";
import ConfirmPassword from "../views/confirmation-password";
import UpdateOperator from "../views/operator/UpdateOperator";
import UpdateDriver from "./../views/Driver/UpdateDriver";
import CreateDriver from "../views/Driver/Admin-Driver";
import RouteLines from "../views/operator/RouteLines"
import AdminOperator from "../views/Admin-operator";
import UserView from "../user-view-stuff/UserView";
import UserChooseRoutes from "../user-view-stuff/UserChooseRoutes";



const Router = () => {
  	return (
      <BrowserRouter>
        <div className="h-screen flex flex-col ">
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/register" element={<RegisterPage />}></Route>
            <Route exact path="/operator-bus" element={<Bus />}></Route>
            <Route path="/reset-password" element={<Reset />}></Route>
            <Route
              path="/confirm-new-password"
              element={<ConfirmPassword />}
            ></Route>
            <Route exact path="/login" element={<LoginPage />}></Route>
            <Route
              exact
              path="/updateoperator"
              element={<UpdateOperator />}
            ></Route>
            <Route path="/updatedriver" element={<UpdateDriver />}></Route>
            <Route path="/create-driver" element={<CreateDriver />}></Route>
            <Route path="/operator" element={<AdminOperator />}></Route>
            <Route
              exact
              path="/operator-routes"
              element={<RouteLines />}
            ></Route>
            <Route path="/user-view" element={<UserView />}></Route>
            <Route path="/user-plan" element={<UserChooseRoutes />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
}




export default Router;


