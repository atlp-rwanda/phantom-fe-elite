import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import UpdateRouteLine from '../UpdateRouteModal';
// modal toggle
function toggleUpdate() {
	document.getElementById("UpdateRouteLine").classList.toggle("hidden");
}


function TableRow (props)  {


  return (
  
  <>
    <div className="grid grid-cols-12 border-b border-black border-solid">
      <div className="col-span-1 pl-1">{props.number}</div>

      <div className="col-span-2 pl-1">{props.origin}</div>
      <div className="col-span-1 pl-1">-</div>
      <div className="col-span-6 pl-1">{props.destination}</div>

      <div className="col-span-2 pl-3 flex justify-between w-1/2">
        <FiEdit className=" w-4 h-4 cursor-pointer" data-testid ="updateRouteBtn" onClick={toggleUpdate} />
        <RiDeleteBin6Line className=" text-red-500 w-5 h-5 cursor-pointer" onClick={() => {}}/>
      </div>
    </div>
    <UpdateRouteLine/>
  </>
  );
}
export default TableRow