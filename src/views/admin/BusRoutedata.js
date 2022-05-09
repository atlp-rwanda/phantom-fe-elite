import React from 'react'
import smallImage from "../../assets/admin-panel/Bus.jpg"
function BusRoutedata() {
  return (
    <div>
<div className="my-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-[180px]">
                Bus , Routes Data
				</div>
				
				<div className="grid grid-cols-12 border-b-2 border-black font-bold border-solid">
					<div className="col-span-1 pt-4">Task</div>
					<div className="col-span-1 pt-4 text-xs">Bus No</div>
					<div className="col-span-2 pt-4 text-xs">Seats</div>
					<div className="col-span-3 pt-4 text-xs">Routes</div>
					<div className="col-span-2 pt-4 text-xs">Drivers</div>
                    <div className="col-span-2 pt-4 text-xs">Current Status</div>
                    <div className="col-span-1 pt-4 text-xs">ETA</div>
				</div>
                <div className="grid grid-cols-12 border-b-2 border-gray-400 font-bold border-solid">
					<div className="col-span-1"><img src={smallImage} alt="small Image"></img></div>
					<div className="col-span-1 pt-3 text-xs font-medium"> Bus-009</div>
					<div className="col-span-2 pt-3 text-xs font-medium">20 remaining</div>
					<div className="col-span-3 pt-3 text-xs font-medium">Kacyiru - Nyabugogo</div>
					<div className="col-span-2 pt-3 text-xs font-medium">Muheto</div>
                    <div className="col-span-2 pt-3 text-xs font-medium">Near Kicukiro</div>
                    <div className="col-span-1 pt-3 text-xs font-medium">15 min</div>
				</div>
                <div className="grid grid-cols-12 border-b-2 border-gray-400 font-bold border-solid">
					<div className="col-span-1"><img src={smallImage} alt="small Image"></img></div>
					<div className="col-span-1 pt-3 text-xs font-medium">Bus-002</div>
					<div className="col-span-2 pt-3 text-xs font-medium">9 remaining</div>
					<div className="col-span-3 pt-3 text-xs font-medium">Kimironko - Down Town</div>
					<div className="col-span-2 pt-3 text-xs font-medium">Andela Rwanda</div>
                    <div className="col-span-2 pt-3 text-xs font-medium">Near Gishubi Bus Stop</div>
                    <div className="col-span-1 pt-3 text-xs font-medium">10 min</div>
				</div>
               

				<div className="overflow-auto "></div>
    </div>
  )
}

export default BusRoutedata;
