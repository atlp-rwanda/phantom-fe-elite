import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const TableRow = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };
  //   const handleUpdate = () => {
  //     props.setOpenModalRow(true);
  //     props.onSaveData(props);
  //   };

  return (
    <div
      className="grid grid-cols-12 w-full border-b border-black border-solid"
      role="row-group"
      // unique identifier for the newly row created
      data_testid={`operator-row-${props.number}`}
    >
      <div className="col-span-1">{props.number}</div>
      <div className="col-span-4">{props.route}</div>
      <div className="col-span-3">{props.email}</div>
      <div className="col-span-2">{props.plate}</div>
      <div className=" col-span-2 text-center">
        <button onClick={handleDelete}>
          <RiDeleteBin6Line className=" text-red-500 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
export default TableRow;
