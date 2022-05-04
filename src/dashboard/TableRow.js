import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi"

const TableRow = (props) => {
  return (
    <div className="grid grid-cols-12 border-b border-black border-solid">
      <div className="col-span-1 pl-1">{props.number}</div>
      <div className="col-span-2 pl-1">{props.name}</div>
      <div className="col-span-2 pl-1">{props.email}</div>
      <div className="col-span-2 pl-1">{props.email2}</div>
      <div className="col-span-3 pl-2">{props.route}</div>
      <div className="col-span-2 pl-3 flex justify-between w-1/2">
        <FiEdit className=" w-4 h-4" />
        <RiDeleteBin6Line className=" text-red-500 w-5 h-5" />
      </div>
    </div>
  );
}
export default TableRow
