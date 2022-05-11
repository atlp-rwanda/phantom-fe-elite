import React from "react";
import Header from "../../component/dash/Header";
import Sidebar from "../../component/dash/SideBar";
import Topview from "./Topview";
import BusRoutedata from "./BusRoutedata";

function AdminView() {
  return (
    <div >
      <div className="flex flex-row">
        <div title="SideBar"  data-testid="admin">
          <Sidebar />
        </div>

        <div>
          <p>.</p>
          <Header data-testid="header"/>
          <main >
            <Topview title="TopView"/>
            <BusRoutedata />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminView;

