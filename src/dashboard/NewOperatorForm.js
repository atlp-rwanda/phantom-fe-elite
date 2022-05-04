import React from 'react'
import { Link } from "react-router-dom";
import AsideAdmin from './component/AsideAdmin';
import FooterAdmin from './component/FooterAdmin';
import HeaderAdmin from './component/HeaderAdmin';

const NewOperatorForm = () => {
  return (
    <div className="grid h-screen w-screen grid-cols-12 grid-rows-12 font-Nunito bg-[#f3f3f3]">
      <HeaderAdmin />
      <main className="col-start-3 col-end-13 row-start-2 row-end-12 px-3 mx-2 mt-2 bg-white flex items-center justify-center">
        <div className="w-1/3 h-2/3 bg-adminFooterBackground rounded-sm p-3 box-border">
          <div className="mb-4 font-bold border-b-2 border-solid border-darkBluePhant w-[135px]">
            Create operator 
          </div>
          <form action="">
            <div className="flex flex-col pb-1">
              <label htmlFor="">Operator Name</label>
              <input
                type="text"
                placeholder="Operator Name"
                className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
              />
            </div>
            <div className="flex flex-col pb-1">
              <label htmlFor="">Operator Email</label>
              <input
                type="text"
                placeholder="Operator Email"
                className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
              />
            </div>
            <div className="flex flex-col pb-1">
              <label for="route-select">Route</label>
              <select
                name="pets"
                id="route-select"
                className="h-8 rounded-sm bg-[#F4F4F4]"
              >
                <option value="">Select Route</option>
                <option value="dog">Kimironko</option>
                <option value="cat">Remera</option>
                <option value="hamster">Downtown</option>
                <option value="parrot">Kanombe</option>
                <option value="spider">Murindi</option>
                <option value="goldfish">Kimisagara</option>
              </select>
            </div>
            <div className="flex py-4 ">
              <div className="bg-[#19B600] h-8 px-3 mr-5 rounded-md pt-1 cursor-pointer">
                <Link to="/admin">Back</Link>
              </div>
              <button
                type="submit"
                className="bg-darkBluePhant h-8 px-3 rounded-md cursor-pointer"
              >
                Save Operator
              </button>
            </div>
          </form>
        </div>
      </main>
      <AsideAdmin />
      <FooterAdmin />
    </div>
  );
}

export default NewOperatorForm
