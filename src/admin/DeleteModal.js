import React from "react";
import { useState, useEffect, useRef } from "react";

const DeleteModal = ({ openDeleteModal, confirmDelete, idToDelete }) => {
  return (
    <div className="mb-4 font-bold  w-[300px] pt-2 flex flex-col border border-black border-solid">
      <p>Confirm, you want to delete this? </p>

      <div className=" px-4 py-2 mt-4 text-left flex">
        <button
          className="py-2 px-4 bg-green-600 text-white rounded hover:bg-gray-700 mr-2 "
          onClick={() => {
            openDeleteModal(false);
          }}
        >
          Cancel
        </button>
        <button
          className="py-2 px-4 bg-red-500 text-white rounded hover:bg-textBluePhant mr-2"
          onClick={() => confirmDelete(idToDelete)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
