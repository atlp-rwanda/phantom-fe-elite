/** @format */

import React, { useState, useEffect } from "react";
import Admin from "../../component/layout/Layout";
import { RiAddCircleLine } from "react-icons/ri";
import NewRouteModal from "../../component/NewRouteModal";
import ListHeader from "../../component/new_route/ListHeader";
import ListContent from "../../component/new_route/ListContent";
import axios from "axios";

// modal toggle

const RouteLine = () => {

	const [modalOpen,setModalOpen] = useState(false);

	function toggleModal() {
		// document.getElementById("NewRouteModal").classList.toggle("hidden");
		setModalOpen(!modalOpen);
	}


	const removeItem=(id)=>{
		const newData = routes.filter(route=>route.id!=id);
		setRoutes(newData);
	}

 const handleData = async (data) => {
	 data.id = routes.length + 1;
   try {
     const routesData = await axios.post("http://localhost:7000/routes", data);
     const allData = await axios.get("http://localhost:7000/routes");
	 setModalOpen(false);
     setRoutes(allData.data);

     console.log(routesData.data);
   } catch (error) {
     console.log(error);


   } 
 };

  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const routesData = await axios.get("http://localhost:7000/routes");
		const allData = await axios.get("http://localhost:7000/routes");
        setRoutes(allData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRoutes();
  }, []);



	return (
    <>
      <Admin>
        <div className="flex justify-center sm:justify-start md:justify-center lg:justify-start ">
          <div
            className="m-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-[90px]"
            data-testid="head1"
          >
            Route
          </div>
        </div>
        <div className="flex flex-row justify-between sm:justify-start md:justify-evenly lg:justify-start items-center my-3">
          <div
            onClick={() => toggleModal()}
            className="bg-darkBluePhant cursor-pointer p-1 sm:px-0 sm:p-2 rounded-md font-bold text-white flex items-center justify-evenly w-1/2 sm:w-1/6 md:w-2/6 xl:w-1/6"
          >
            <RiAddCircleLine className="text-white text-xl sm:text-2xl" />
            <button data-testid="newRouteBtn">Add New Route</button>
          </div>
          <form
            action=""
            className="w-1/2 sm:w-2/5 h-10 mx-2 sm:mx-12 md:mx-3 lg:mx-12 sm:flex sm:items-center"
          >
            <input
              type="text"
              placeholder="Search"
              className="w-full h-5/6 sm:h-full pl-2 border-2 border-solid border-[#6C757D] rounded-md"
            />
          </form>
        </div>
        <ListHeader />
        <div className="overflow-auto ">
          <ListContent handleDelete={removeItem} data={routes} />
        </div>
        {modalOpen && (<NewRouteModal isModalOpen={modalOpen} setModalOpen={()=>setModalOpen(false)} newData = {handleData} />)}
      </Admin>
    </>
  );
};
export default RouteLine;