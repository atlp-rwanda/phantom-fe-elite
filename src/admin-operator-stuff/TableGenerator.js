import React, { useState } from "react";
import ErrorMessageDisplay from "./ErrorMessageDisplay";
import LoadingMessage from "./LoadingMessage";
import TableRow from "./TableRow";

const TableGenerator = (props) => {
  const captureData = (data) => {
    props.giveMeData(data);
  };
  const captureIdtoDelete = (id) => {
    props.handleDelete(id);
  };

  return (
    <>
      {/* if loading is true, show loading screen */}
      {props.loading ? (
        <LoadingMessage />
      ) : // else if there is an error show error screen
      props.error.isError ? (
        <ErrorMessageDisplay error={props.error.message} />
      ) : ( 
        // if neither error nor loading is true, show the rows using data from array of data fetched. 
        props.data.map((user, index) => {
          return (
            <TableRow
              name={user.name}
              email={user.email}
              role={user.role}
              id_number={user.id_number}
              permit_id={user.permit_id}
              phone={user.phone}
              id={user.id}
              // pass id automatically from the index to dispay the number of the operator currently rendere
              // on the screen
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
