import React from "react";
import smallImage from "../assets/admin-panel/Bus.jpg";
import { useState, useEffect } from "react";
import axios from "axios"

function BusRoutedata() {
  const [Admin, setAdmin] = useState([]);
 
  const allUser = async () => {
    try {
       const axiosData = await axios.get(`http://localhost:7000/user`)
        setAdmin(axiosData.data);
    }
    catch(err) {
      console.log(err);
    }
  };
  useEffect(() => {
    allUser();
  }, []);
  
  return (
    
    <div className="bg-white px-4 mt-10 rounded-lg" title="data">

      <div className="my-2 hidden md:block font-black text-xl border-b-2 border-solid border-darkBluePhant w-[200px]" title="Bus , Routes Data" data-testid="Bus">
        Bus , Routes Data
      </div>
    
      <div className="grid grid-cols-12 border-b-2 border-black font-bold border-solid">
        <div className="col-span-1 pt-4 text-xs pr-4">Task</div>
        <div className="col-span-1 pt-4 text-xs">Bus No</div>
        <div className="col-span-2 pt-4 text-xs">Seats</div>
        <div className="col-span-3 pt-4 text-xs">Routes</div>
        <div className="col-span-2 pt-4 text-xs">Drivers</div>
        <div className="col-span-2 pt-4 text-xs">Current Status</div>
        <div className="col-span-1 pt-4 text-xs">ETA</div>
      </div>

      {
        Admin.map((adminview, index)=>{

          return(

       
      <div className="grid grid-cols-12 border-b-2 border-gray-400 font-bold border-solid" key={index}>
        
        <div className="col-span-1">
          <img src={smallImage} alt="smallImage" ></img>
        </div>
        
        <div className="col-span-1 pt-3 text-xs font-medium" data-testid="myata"> {adminview.busNo}

           </div>
    
        <div className="col-span-2 pt-3 text-xs font-medium">{adminview.seats}</div>
        <div className="col-span-3 pt-3 text-xs font-medium">
        {adminview.routes}
        </div>
        <div className="col-span-2 pt-3 text-xs font-medium" data-testid = "drivers">{adminview.drivers}</div>
        <div className="col-span-2 pt-3 text-xs font-medium">{adminview.current_status}</div>
        <div className="col-span-1 pt-3 text-xs font-medium">{adminview.busNo}</div>
      </div>
        )})
        }
      
    </div>
    
  );
}

export default BusRoutedata;
