import React from 'react';
import { date, number } from 'yup';
import TableRow from './TableRow';


const ListContent = ({data, handleDelete, setRoutes}) => {

let i = 0;

const handling = (id) => {
  handleDelete(id)
}
console.log();
return (
 <>
  {data.map((dataItem) => {
    i++
    return <TableRow removeDeletedItem={handling} origin={dataItem.origin} number={i} id = {dataItem.id} handleDelete = {handling} destination={dataItem.destination} setRoutes={setRoutes} />;
  })}
</>
 );
}

export default ListContent