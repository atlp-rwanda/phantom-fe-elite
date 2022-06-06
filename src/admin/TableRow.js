import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const TableRow = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
    props.setDeleteModalOpen(true);
  };

  return (
    <div
      className="grid grid-cols-12 w-full border-b border-black border-solid"
      role="row-group"
      // unique identifier for the newly row created
      data_testid={`row-delete-${props.number}`}
    >
      <div className="col-span-1">{props.number}</div>
      <div className="col-span-4">{props.route}</div>
      <div className="col-span-3" data-testid="column-name">
        {props.names}
      </div>
      <div className="col-span-2">{props.plate}</div>
      <div className=" col-span-2 text-center">
        <button
          onClick={handleDelete}
          data-testid={`delete-low-${props.number}`}
        >
          <RiDeleteBin6Line className=" text-red-500 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
export default TableRow;
