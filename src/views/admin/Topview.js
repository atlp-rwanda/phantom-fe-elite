import React from 'react'
import busImage from "../../assets/admin-panel/emojione_oncoming-bus.jpg";
import usersImage from "../../assets/admin-panel/ant-design_user-outlined.jpg";
import routeImage from "../../assets/admin-panel/fa-solid_route.jpg";
import driversImage from "../../assets/admin-panel/healthicons_truck-driver-outline.jpg";
import ImageMap from "../../assets/admin-panel/Map.jpg";
function Topview() {
  return (
    <div>
        <div className="bg-[#f3f3f3] py-3 ext-Nunito ">
		<div className="flex gap-2 pb-5 ">
        <div className=" bg-white rounded-md w-1/3 justify-between items-center p-2">
            <h1><strong>Buses </strong><span className=" text-Nunito text-sm text-third-text3">All buses</span></h1>
            <div className="flex flex-row gap-3 p-2 ">
              <img src={busImage} alt="image1"></img>
              <p className="text-5xl mr-5 mt-5">40</p>            
          </div>    
        </div>

        <div className=" bg-white rounded-md w-1/3 p-2">
            <h1><strong>Driver </strong><span className=" text-Nunito text-sm text-third-text3">All drivers</span></h1>
            <div className="flex flex-row gap-3 p-2 ">
              <img src={driversImage} alt="image1"></img>
              <p className="text-5xl mr-5 mt-5">40</p>            
          </div>    
        </div>

        <div className=" bg-white rounded-md w-1/3 p-2">
            <h1><strong>Router </strong><span className=" text-Nunito text-sm text-third-text3">All routes</span></h1>
            <div className="flex flex-row gap-3 p-2 ">
              <img src={routeImage} alt="image1"></img>
              <p className="text-5xl mr-5 mt-5">40</p>            
          </div>    
        </div>

        <div className=" bg-white rounded-md w-1/3 p-2">
            <h1><strong>Users </strong><span className=" text-Nunito text-sm text-third-text3">All users</span></h1>
            <div className="flex flex-row gap-3 p-2 ">
              <img src={usersImage} alt="image1"></img>
              <p className="text-5xl mr-5 mt-5">40</p>            
          </div>    
        </div>
		</div>
        <img src={ImageMap} alt="route Image"></img>

        </div>

        
      
    </div>
  )
}

export default Topview;
