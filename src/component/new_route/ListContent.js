import React from "react";
import { date, number } from "yup";
import TableRow from "./TableRow";

const ListContent = ({ data, handleDelete, setRoutes }) => {
  const handling = (id) => {
    handleDelete(id);
  };

  return (
    <>
      {data.map((dataItem) => {
        return (
          <TableRow
            removeDeletedItem={handling}
            key={dataItem.id}
            origin={dataItem.origin}
            number={dataItem.id}
            id={dataItem.id}
            handleDelete={handling}
            destination={dataItem.destination}
            setRoutes={setRoutes}
          />
        );
      })}
    </>
  );
};

export default ListContent;
