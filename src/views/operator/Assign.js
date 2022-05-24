/** @format */

import React from "react";
import Admin from "../../component/layout/Layout";
import NewOperatorForm from "../../admin/NewOperatorForm";
import TableGenerator from "../../admin/TableGenerator";
import { useState, useEffect, useRef } from "react";

const AssignDriversToBuses = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [Datas, setDatas] = useState([]);
  const allDatas = async () => {
    await fetch(`http://localhost:7000/assigned`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDatas(data);
      });
  };

  // Remove assigned driver
  const deleteAssignedDriver = (id) => {
    fetch(`http://localhost:7000/assigned/${id}`, {
      method: "DELETE",
    }).then(() => {
      allDatas();
    });
  };

  const form = useRef(null);

  const showModal = () => {
    return <NewOperatorForm setOpenModal={setModalOpen} setData={allDatas} />;
  };

  useEffect(() => {
    allDatas();
  }, []);

  return (
    <>
      {modalOpen && showModal()}
      <Admin>
        <div className="flex flex-col justify-center sm:justify-start md:justify-center lg:justify-start ">
          <div className="m-2 font-black text-xl border-b-2 border-solid border-darkBluePhant pt-6 lg:pt-0 w-[250px]">
            OPERATOR-DASHBOARD
          </div>

          <div className="bg-darkBluePhant  mt-3 p-1 sm:px-0 sm:p-2 rounded-md font-bold text-white flex items-center justify-evenly w-[250px]">
            <button
              className=""
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Assign Driver To Buse
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between sm:justify-start md:justify-evenly lg:justify-start items-center my-3">
          <div className="grid grid-cols-12 border-b-2 border-black w-full font-bold border-solid">
            <div className="col-span-1">No</div>
            <div className="col-span-4 ">Routes</div>
            <div className="col-span-3 ">Driver Email</div>
            <div className="col-span-2 ">Bus Plate</div>
            <div className="col-span-2 text-center">Action</div>
          </div>

          {/* /* rendering the all operators from the database using this component TableGenerator */}
          <TableGenerator
            // giveMeData={deleteHandleForUpdate}
            handleDelete={deleteAssignedDriver}
            setOpenModal={setModalOpen}
            Data={Datas}
            // loading={loading}
            // error={error}
          />
        </div>
      </Admin>
    </>
  );
};

export default AssignDriversToBuses;
