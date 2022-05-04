import React from 'react'
import AsideAdmin from './component/AsideAdmin';
import FooterAdmin from './component/FooterAdmin';
import HeaderAdmin from './component/HeaderAdmin';

const NewOperatorForm = () => {
  return (
    <div className="grid h-screen w-screen grid-cols-12 grid-rows-12 font-Nunito bg-[#f3f3f3]">
      <HeaderAdmin />
      <main className="col-start-3 col-end-13 row-start-2 row-end-12 px-3 mx-2 mt-2 bg-white flex items-center justify-center">
        <div className="w-1/3 h-2/3 bg-red-300 rounded-md p-3 box-border">
          <div className="mb-4">Create Operator</div>
          <form action="" >
            <div className="flex flex-col pb-1">
              <label htmlFor="">Operator Name</label>
              <input type="text" placeholder="Operator Name" className='h-8 rounded-md'/>
            </div>
            <div className="flex flex-col pb-1">
              <label htmlFor="">Operator Email</label>
              <input type="text" placeholder="Operator Email" className='h-8 rounded-md'/>
            </div>
            <div className="flex flex-col pb-1">
              <label for="route-select">Route</label>
              <select name="pets" id="route-select" className='h-8 rounded-sm'>
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
              <button type="link" className="bg-darkBluePhant h-8 px-3 mr-5">
                Back
              </button>
              <button type="submit" className="bg-darkBluePhant h-8 px-3 mr-5">
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
