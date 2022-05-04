import React from "react";
import TableRow from "./TableRow";
import { fakeDataArr } from "./fakeDataBase";

const TableGenerator = () => {
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
            number={i}
            key={i}
          />
        );
      })}
    </>
  );
};

export default TableGenerator;
