import React from "react";
import { date, number } from "yup";
import TableRow from "./TableRow";

const ListContent = ({ data, handleDelete, setRoutes }) => {
  const handling = (id) => {
    handleDelete(id);
  };
  let count = 0;

  return (
    <>
      {data.map((dataItem) => {
        count = count + 1;
        return (
          <TableRow
            removeDeletedItem={handling}
            key={dataItem.id}
            origin={dataItem.origin}
            number={count}
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
