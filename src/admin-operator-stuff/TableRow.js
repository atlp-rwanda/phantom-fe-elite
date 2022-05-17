import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi"
import { Link } from 'react-router-dom';

const TableRow = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };
    const handleUpdate = () => {
      props.setOpenModalRow(true);
      props.onSaveData(props);
    };


  return (
    <div className="grid grid-cols-12 border-b border-black border-solid">
      <div className="col-span-1 pl-1">{props.number}</div>
      <div className="col-span-3 pl-1">{props.name}</div>
      <div className="col-span-3 pl-1">{props.email}</div>
      <div className="col-span-3 lg:col-span-3 pl-2">{props.role}</div>
      <div className=" col-span-2 lg:col-span-2 lg:pl-3 flex justify-between lg:justify-between w-5/6 lg:w-2/3 xl:w-1/2">
        <button onClick={handleUpdate}>
          <Link to="  ">
            <FiEdit className=" w-4 h-4" />
          </Link>
        </button>
        <button onClick={handleDelete}>
          <RiDeleteBin6Line className=" text-red-500 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
export default TableRow
