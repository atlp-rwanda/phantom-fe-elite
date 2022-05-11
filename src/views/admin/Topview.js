import React from "react";
import busImage from "../../assets/admin-panel/emojione_oncoming-bus.jpg";
import usersImage from "../../assets/admin-panel/ant-design_user-outlined.jpg";
import routeImage from "../../assets/admin-panel/fa-solid_route.jpg";
import driversImage from "../../assets/admin-panel/healthicons_truck-driver-outline.jpg";
// import ImageMap from "../../assets/admin-panel/Map.jpg";
import MapView from "./MapView";
function Topview() {
  return (
    <div>
      <div className="bg-[#f3f3f3] py-3 px-2 text-Nunito grid place-content-center min-h-screen">
        <div className="p-4 md:px-0 grid  gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className=" bg-white rounded-md  justify-between items-center p-2">
            <h1>
              <strong>Buses </strong>
              <span className=" text-Nunito text-sm ">
                All buses
              </span>
            </h1>
            <div className="flex flex-row gap-3 p-2 ">
              <img src={busImage} alt="image1"></img>
              <p className="text-5xl mr-5 mt-5">40</p>
            </div>
          </div>

          <div className=" bg-white rounded-md p-2 ">
            <h1>
              <strong>Driver </strong>
              <span className=" text-Nunito text-sm ">
                All drivers
              </span>
            </h1>
            <div className="flex flex-row gap-3 p-2 ">
              <img src={driversImage} alt="image1"></img>
              <p className="text-5xl mr-5 mt-5">40</p>
            </div>
          </div>

          <div className=" bg-white rounded-md  p-2">
            <h1>
              <strong>Router </strong>
              <span className=" text-Nunito text-sm text-third-text3">
                All routes
              </span>
            </h1>
            <div className="flex flex-row gap-3 p-2 ">
              <img src={routeImage} alt="image1"></img>
              <p className="text-5xl mr-5 mt-5">40</p>
            </div>
          </div>

          <div className=" bg-white rounded-md p-2">
            <h1>
              <strong>Users </strong>
              <span className=" text-Nunito text-sm text-third-text3">
                All users
              </span>
            </h1>
            <div className="flex flex-row gap-3 p-2 ">
              <img src={usersImage} alt="image1"></img>
              <p className="text-5xl mr-5 mt-5">40</p>
            </div>
          </div>
        </div>
        <MapView title="MapView"/>
      </div>
    </div>
  );
}

export default Topview;
