import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const TableRow = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };
  const handleUpdate = () => {
    props.setOpenModalRow(true);
    props.onSaveData(props);
  }; 
  return (
    <div
      className="grid grid-cols-12 border-b border-black border-solid"
      role="row-group"
    >
      <div className="col-span-1 pl-1">{props.number}</div>
      <div className="col-span-2 pl-1" data-testid='row-name'>{props.name}</div>
      <div className="col-span-2 lg:span-1 pl-1">{props.id_number}</div>
      <div className="col-span-2  pl-2">{props.permit_id}</div>
      <div className="col-span-3  pl-2">{props.phone}</div>
      <div className=" col-span-2 flex justify-between lg:justify-between w-5/6 lg:w-2/3 xl:w-1/2">
        <button onClick={handleUpdate} data-testid={`row-${props.number}`}>
          <Link to="">
            <FiEdit className=" w-4 h-4 text-sky-500" data-testid={`row-edit-${props.number}`} />
          </Link>
        </button>
        <button onClick={handleDelete}>
          <RiDeleteBin6Line
            className=" text-red-500 w-5 h-5"
            data-testid={`row-delete-${props.number}`}
          />
        </button>
      </div>
    </div>
  );
};
export default TableRow;
