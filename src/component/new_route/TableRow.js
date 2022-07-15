import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import UpdateRouteLine from "../UpdateRouteModal";
import axios from "axios";

function TableRow({ removeDeletedItem, setRoutes, ...props }) {
  const [data, setData] = useState({});
  const [newRoute, setNewRoute] = useState({});
  const [dataFetched, setDataFetched] = useState(false);

  const deleteHandle = async () => {
    const dataObject = await axios.delete(
      `http://localhost:3001/api/v1/route/${props.id}`
    );
    setData(dataObject.data);
    removeDeletedItem(props.id);
  };

  function dataToFill() {
    setNewRoute(props);
    setDataFetched(true);
  }

  const handleDeleting = () => {
    props.handleDelete(data.id);
  };
  return (
    <>
      <div className="grid grid-cols-12 border-b border-black border-solid">
        <div className="col-span-1 pl-1">{props.number}</div>

        <div className="col-span-2 pl-1">{props.origin}</div>
        <div className="col-span-1 pl-1">-</div>
        <div data-testid="row-name" className="col-span-6 pl-1">
          {props.destination}
        </div>

        <div className="col-span-2 pl-3 flex justify-between w-1/2">
          <FiEdit
            data-testid={`row-edit-${props.id}`}
            className=" w-4 h-4 cursor-pointer"
            onClick={dataToFill}
          />
          <RiDeleteBin6Line
            data-testid={`row-delete-${props.id}`}
            className=" text-red-500 w-5 h-5 cursor-pointer"
            onClick={deleteHandle}
          />
        </div>
      </div>
      {dataFetched && (
        <UpdateRouteLine
          setRoutes={setRoutes}
          update={newRoute}
          closeModal={() => setDataFetched(false)}
        />
      )}
    </>
  );
}
export default TableRow;
