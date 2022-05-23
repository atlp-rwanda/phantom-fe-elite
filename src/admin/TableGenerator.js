import React, { useState } from "react";
// import ErrorMessageDisplay from "./ErrorMessageDisplay";
// import LoadingMessage from "./LoadingMessage";
import TableRow from "./TableRow";

const TableGenerator = (props) => {
  let number = 0;

  // const captureData = (data) => {
  //   props.giveMeData(data);
  // };
  const captureIdtoDelete = (id) => {
    console.log(id);
    props.handleDelete(id);
  };

  return (
    <>
      {/* {props.loading ? (
        <LoadingMessage />
      ) : props.error.isError ? (
        <ErrorMessageDisplay error={props.error.message} />
      ) : ( */}
      {props.Data.map((newdata) => {
        ++number;
        return (
          <TableRow
            route={newdata.routes}
            email={newdata.driveremail}
            plate={newdata.platenumber}
            id={newdata.id}
            number={number}
            // data_testid={`operator-row-${number}`}
            // onSaveData={captureData}
            onDelete={captureIdtoDelete}
            setOpenModalRow={props.setOpenModal}
            key={newdata.id}
          />
        );
      })}
    </>
  );
};

export default TableGenerator;
