import React from "react";
import { useSelector } from "react-redux";
import TableRow from "./TableRow";
// import { fakeDataArr } from "./fakeDataBase";

const TableGenerator = (props) => {
  const captureData = (data) => {
    // console.log(data);
       props.giveMeData(data);
  }
  const fakeDataArr =  useSelector((data) => data.users);
  let i = 0;
  return (
    <>
      {fakeDataArr.map((user) => {
        ++i;
        return (
          <TableRow
            name={user.name}
            email={user.email}
            email2={user.email}
            route={user.route}
            number={user.id}
            onSaveData={captureData}
            setOpenModalRow={props.setOpenModal}
            key={i}
          />
        );
      })}
    </>
  );
};

export default TableGenerator;
