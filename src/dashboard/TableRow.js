import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeTodoAction } from '../redux/actions/rootAction/index';
import { DataDeletingInsideJsonServer } from '../redux/fetchApi';

const TableRow = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
        dispatch(DataDeletingInsideJsonServer(props.number));
  }
let data = props;
    const handleUpdate = () => {
      props.setOpenModalRow(true);
      props.onSaveData(data);
    };


  return (
    <div className="grid grid-cols-12 border-b border-black border-solid">
      <div className="col-span-1 pl-1">{props.number}</div>
      <div className="col-span-3 pl-1">{props.name}</div>
      <div className="col-span-3 pl-1">{props.email2}</div>
      <div className="col-span-3 pl-2">{props.route}</div>
      <div className="col-span-2 pl-3 flex justify-between w-1/2">
        <button onClick={handleUpdate}>
          <Link to="  ">
            <FiEdit className=" w-4 h-4" />
          </Link>
        </button>
        <button onClick={handleDelete}>
          <RiDeleteBin6Line className=" text-red-500 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
export default TableRow
