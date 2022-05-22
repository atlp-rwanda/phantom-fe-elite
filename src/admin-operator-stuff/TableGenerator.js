import React, { useState } from "react";
import ErrorMessageDisplay from "./ErrorMessageDisplay";
import LoadingMessage from "./LoadingMessage";
import TableRow from "./TableRow";

const TableGenerator = (props) => {
  const captureData = (data) => {
    props.giveMeData(data);
  };
  const captureIdtoDelete = (id) => {
    console.log(id);
    props.handleDelete(id);
  };

  return (
    <>
      {props.loading ? (
        <LoadingMessage />
      ) : props.error.isError ? (
        <ErrorMessageDisplay error={props.error.message} />
      ) : (
        props.data.map((user, index) => {
          return (
            <TableRow
              name={user.name}
              email={user.email}
              role={user.role}
              id={user.id}

              number={index + 1}
              data_testid={`operator-row-${index + 1}`}
              onSaveData={captureData}
              onDelete={captureIdtoDelete}
              setOpenModalRow={props.setOpenModal}
              key={user.id}
            />
          );
        })
      )}
    </>
  );
};

export default TableGenerator;
