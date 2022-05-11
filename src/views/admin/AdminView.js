import React from "react";
import Header from "../../component/dash/Header";
import Sidebar from "../../component/dash/SideBar";
import Topview from "./Topview";
import BusRoutedata from "./BusRoutedata";
import MobileHeader from "../../component/dash/MobileHeader";

function AdminView() {
  return (
    <div>
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div>
          <Header />
          <main>
            <Topview />
            <BusRoutedata />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminView;

