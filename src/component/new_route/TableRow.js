import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import UpdateRouteLine from '../UpdateRouteModal';
import axios from 'axios';
// modal toggle



function TableRow ({removeDeletedItem,setRoutes,...props})  {
  
  
  const [data, setData] = useState({});
  const [newRoute, setNewRoute] = useState({});
  const [dataFetched,setDataFetched] = useState(false);
  const [modalOpen,setModalOpen] = useState(false);
  
  function toggleUpdate() {
    setModalOpen(true)
  }
  
  
const fetchRoute = async () => {
  setDataFetched(false);
  const dataObject = await axios.get(`http://localhost:7000/routes/${props.id}`);
  let oneRoute = dataObject.data;
  setDataFetched(true);
  return oneRoute;
};





const deleteHandle = async () => {
  const dataObject = await axios.delete(`http://localhost:7000/routes/${props.id}`);
  setData(dataObject.data)
  removeDeletedItem(props.id);

};



const handleDeleting = () => {
  props.handleDelete(data.id)
}
// const dataObject = fetchRoute()

  return (
    <>
      <div className="grid grid-cols-12 border-b border-black border-solid">
        <div className="col-span-1 pl-1">{props.number}</div>

        <div className="col-span-2 pl-1">{props.origin}</div>
        <div className="col-span-1 pl-1">-</div>
        <div className="col-span-6 pl-1">{props.destination}</div>

        <div className="col-span-2 pl-3 flex justify-between w-1/2">
          <FiEdit
            className=" w-4 h-4 cursor-pointer"
            data-testid="updateRouteBtn"
            onClick={async() => {
              fetchRoute().then(data=>{
                setNewRoute(data);
                
              });
              
            }}
            
          />
          <RiDeleteBin6Line
            className=" text-red-500 w-5 h-5 cursor-pointer"
            onClick={deleteHandle}
          />
        </div>
      </div>
      {dataFetched && (<UpdateRouteLine
        setRoutes={setRoutes}
        update={newRoute}
        setDataFetched={()=>setDataFetched(false)}
      />)}
    </>
  );
}
export default TableRow