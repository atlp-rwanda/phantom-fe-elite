/** @format */

import React, { useState, useEffect } from "react";
import Admin from "../../component/layout/admin";
import { useTranslation } from "react-i18next";
import { RiAddCircleLine } from "react-icons/ri";
import NewRouteModal from "../../component/NewRouteModal";
import ListHeader from "../../component/new_route/ListHeader";
import ListContent from "../../component/new_route/ListContent";

import axios from "axios";

const RouteLine = () => {
  const {t, i18n} = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [routes, setRoutes] = useState([]);

  function toggleModal() {
    setModalOpen(true);
  }

  const removeItem = (id) => {
    const newData = routes.filter((route) => route.id != id);
    setRoutes(newData);
  };

  const handleData = async (data) => {
    data.description = "the best routes ever";
    try {
      console.log(data);
      const routesData = await axios.post(
        "http://localhost:3001/api/v1/route",
        data
      );
      const allData = await axios.get("http://localhost:3001/api/v1/route");
      console.log(allData);
      setRoutes(allData.data.routes);
      setModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const routesData = await axios.get(
          "http://localhost:3001/api/v1/route"
        );
        const allData = await axios.get("http://localhost:3001/api/v1/route");
        setRoutes(allData.data.routes);
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
            {t("route")}
          </div>
        </div>
        <div className="flex flex-row justify-between sm:justify-start md:justify-evenly lg:justify-start items-center my-3">
          <div
            onClick={() => toggleModal()}
            className="bg-darkBluePhant cursor-pointer p-1 sm:px-0 sm:p-2 rounded-md font-bold text-white flex items-center justify-evenly w-1/2 sm:w-1/6 md:w-2/6 xl:w-1/6"
          >
            <RiAddCircleLine className="text-white text-xl sm:text-2xl" />
            <button data-testid="newRouteBtn">{t("addRoute")}</button>
          </div>
          <form
            action=""
            className="w-1/2 sm:w-2/5 h-10 mx-2 sm:mx-12 md:mx-3 lg:mx-12 sm:flex sm:items-center"
          >
            <input
              type="text"
              placeholder={t("search")}
              className="w-full h-5/6 sm:h-full pl-2 border-2 border-solid border-[#6C757D] rounded-md"
            />
          </form>
        </div>
        <ListHeader />
        <div className="overflow-auto ">
          <ListContent
            handleDelete={removeItem}
            data={routes}
            setRoutes={setRoutes}
          />
        </div>
        {modalOpen && (
          <NewRouteModal
            isModalOpen={modalOpen}
            setModalOpen={() => setModalOpen(false)}
            newData={handleData}
          />
        )}
      </Admin>
    </>
  );
};
export default RouteLine;
