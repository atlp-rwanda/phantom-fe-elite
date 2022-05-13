import React, { useState } from "react";
// import startupData from "./data";
import TableRow from "./TableRow";

const TableGenerator = (props) => {
  const captureData = (data) => {
       props.giveMeData(data);
  }
 

  const captureIdtoDelete = (id) => {
    console.log(id);
      props.handleDelete(id)
  }
  return (
    <>
      {props.data.map((user) => {
        return (
          <TableRow
            name={user.name}
            email={user.email}
            email2={user.email}
            route={user.route}
            number={user.id}
            onSaveData={captureData}
            onDelete={captureIdtoDelete}
            setOpenModalRow={props.setOpenModal}
            key={user.id}
          />
        );
      })}
    </>
  );
};

export default TableGenerator;
