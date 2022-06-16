import React from "react";
import { useState, useEffect, useRef } from "react";

const DeleteModal = ({ openDeleteModal, confirmDelete, idToDelete }) => {
  return (
    <div
      className=" bg-white absolute  flex justify-center items-center"
      data-testid="delete-modal"
    >
      <div className="font-bold  w-[300px] pt-2 flex flex-col justify-center items-center border border-black border-solid">
        <p>Confirm, you want to delete this? </p>

        <div className=" px-4 py-2 mt-8 text-left flex">
          <button
            className="py-2 px-4 bg-green-600 text-white rounded hover:bg-gray-700 mr-2 "
            onClick={() => {
              openDeleteModal(false);
            }}
            data-testid="remove-modal"
          >
            Cancel
          </button>
          <button
            className="py-2 px-4 bg-red-500 text-white rounded hover:bg-textBluePhant mr-2"
            onClick={() => confirmDelete(idToDelete)}
            data-testid="delete-data"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
