import React, { useState } from "react";
import startupData from "./data";
import TableRow from "./TableRow";

const TableGenerator = (props) => {
  const [data, setData] = useState(startupData);
  const captureData = (data) => {
       props.giveMeData(data);
  }
  const captureIdtoDelete = (id) => {
      setData((prevData) => {
         return prevData.filter((item) => item.id !== id)
       })
  }
  let i = 0;
  return (
    <>
      {data.map((user) => {
        ++i;
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
            key={i}
          />
        );
      })}
    </>
  );
};

export default TableGenerator;
