import React, { useEffect, useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import EditOperatorForm from "../admin-operator-stuff/EditOperatorForm";
import NewOperatorForm from "../admin-operator-stuff/NewOperatorForm";
import TableGenerator from "../admin-operator-stuff/TableGenerator";
import TableHeader from "../admin-operator-stuff/TableHeader";
import AsideAdmin from "../admin-operator-stuff/TemplateComponent/AsideAdmin";
import FooterAdmin from "../admin-operator-stuff/TemplateComponent/FooterAdmin";
import HeaderAdmin from "../admin-operator-stuff/TemplateComponent/HeaderAdmin";

const AdminOperator = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
  }, []);

  const [update, setUpdate] = useState("");
  const dataHandler = (data) => {
    setUpdate(data);
  };
  const deleteHandle = (id) => {
    console.log(id)
  }
  const showModal = () => {
    if (update) {
      return (
        <EditOperatorForm
          update={update}
          setCloseUpdate={setUpdate}
          setOpenModal={setModalOpen}
        />
      );
    } else {
      return <NewOperatorForm setOpenModal={setModalOpen} />;
    }
  };

  return (
    <div className="grid h-screen w-screen overflow-x-hidden grid-cols-12 grid-rows-12 font-Nunito bg-[#f3f3f3]">
      <HeaderAdmin />
      {/* conditional rendering of the edit when the button is pressed and modalOpen variable became true */}
      {modalOpen && showModal()}
      <main className=" flex flex-col col-start-1 sm:col-start-3 md:col-start-4 lg:col-start-3 col-end-13 row-start-2 row-end-12 px-3 mx-0 sm:mx-2  mt-2 bg-white">
        <div className="flex justify-center sm:justify-start md:justify-center lg:justify-start ">
          <div className="m-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-[90px]">
            Operator
          </div>
        </div>
        <div className="flex flex-row justify-between sm:justify-start md:justify-evenly lg:justify-start items-center my-3">
          <div className="bg-darkBluePhant p-1 sm:px-0 sm:p-2 rounded-md font-bold text-white flex items-center justify-evenly w-1/2 sm:w-1/6 md:w-2/6 xl:w-1/6">
            <RiAddCircleLine className="text-white text-xl sm:text-2xl" />
            <button
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Create Operator
            </button>
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
        <TableHeader />
        <div className="overflow-auto ">
          {/* rendering the all operators from the database using this component TableGenerator */}
          <TableGenerator
            giveMeData={dataHandler}
            giveMeId = {deleteHandle}
            setOpenModal={setModalOpen}
          />
        </div>
      </main>
      <AsideAdmin />
      <FooterAdmin />
    </div>
  );
};

export default AdminOperator;
