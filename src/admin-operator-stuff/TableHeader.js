import React from "react";

const TableHeader = () => {
  return (
    <div
      className="grid grid-cols-12 border-b-2 border-black font-bold border-solid"
      role="row-header"
    >
      <div className="col-span-1">N</div>
      <div className="col-span-3 ">Name</div>
      <div className="col-span-3 ">Email</div>
      <div className="col-span-3 ">Roles</div>
      <div className="col-span-2 ">Actions</div>
    </div>
  );
};

export default TableHeader;
