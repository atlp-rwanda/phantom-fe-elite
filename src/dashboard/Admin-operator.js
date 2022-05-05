import React, {useEffect, useState} from "react";
import {
  RiAddCircleLine,
} from "react-icons/ri";
import TableGenerator from "./TableGenerator";
import HeaderAdmin from "./component/HeaderAdmin";
import AsideAdmin from "./component/AsideAdmin";
import FooterAdmin from "./component/FooterAdmin";
import TableHeader from "./TableHeader";
import NewOperatorForm from "./NewOperatorForm";
import EditOperatorForm from "./EditOperatorForm";
import { useDispatch } from "react-redux";
import { thunkCreatorsFunctionFetchingAllData } from "../redux/fetchApi";


const AdminOperator = (props) => {
  let dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    dispatch(thunkCreatorsFunctionFetchingAllData());
  }, []);

  const [update, setUpdate] = useState("");
  const dataHandler = (data) => {
    setUpdate(data);
  };
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
    <div className="grid h-screen w-screen grid-cols-12 grid-rows-12 font-Nunito bg-[#f3f3f3]">
      <HeaderAdmin />
      {modalOpen && showModal()}
      <main className=" flex flex-col col-start-1 sm:col-start-3 col-end-13 row-start-2 row-end-12 px-3 mx-2 mt-2 bg-white">
        <div className="my-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-[90px]">
          Operator
        </div>
        <div className="flex flex-row items-center my-3">
          <div className="bg-darkBluePhant p-2 rounded-md font-bold text-white flex items-center justify-between w-1/6">
            <RiAddCircleLine className="text-white text-2xl" />
            <button
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Create Operator
            </button>
          </div>
          <form action="" className="w-2/5 h-10 mx-12">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full pl-2 border-2 border-solid border-[#6C757D] rounded-md"
            />
          </form>
        </div>
        <TableHeader />
        <div className="overflow-auto ">
          {/* rendering the all users from the database using this component TableGenerator */}
          <TableGenerator
            giveMeData={dataHandler}
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
