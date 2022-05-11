import React from "react";
import Header from "../../component/dash/Header";
import Sidebar from "../../component/dash/SideBar";
import Topview from "./Topview";
import BusRoutedata from "./BusRoutedata";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MobileHeader from "../../component/dash/MobileHeader";

function AdminView() {
  return (
    <div data-testid="admin">
      <div className="flex flex-row">
        <div title="SideBar">
          <Sidebar />
        </div>
        <div>
          <Header data-testid="header"/>
          <main>
            <Topview title="TopView"/>
            <BusRoutedata />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminView;

