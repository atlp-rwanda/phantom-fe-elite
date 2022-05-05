import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { DataPostingInsideJsonServer } from '../redux/fetchApi';
const NewOperatorForm = ({ setOpenModal }) => {
  const dispatch = useDispatch();
    let initialData = {
      name: "",
      email: "",
      route: "",
    };
  const [formData, setFormData] = useState(initialData);

  const handleChange = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(addTodoAction(formData));
    dispatch(DataPostingInsideJsonServer(formData)); 
    setFormData({
      name: "",
      email: "",
      route: "",
    });  // the redux thunk
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center absolute bg-black bg-opacity-50">
      <div className="w-1/4 h-3/5 bg-white rounded-md p-4 box-border">
        <div className="mb-4 font-bold border-b-2 border-solid border-darkBluePhant w-[130px] pt-6">
          Create Operator
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col pb-1">
            <label htmlFor="">Operator Name</label>
            <input
              value={formData.name}
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Operator Name"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
          </div>
          <div className="flex flex-col pb-1">
            <label htmlFor="">Operator Email</label>
            <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="Operator Email"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
          </div>
          <div className="flex flex-col pb-1">
            <label for="route-select">Route</label>
            <select
              value={formData.route}
              onChange={handleChange}
              name="route"
              id="route-select"
              className="h-8 py-0 rounded-sm bg-[#F4F4F4]"
            >
              <option value="">--Select route--</option>
              <option value="Kimironko">Kimironko</option>
              <option value="Remera">Remera</option>
              <option value="Downtown">Downtown</option>
              <option value="Kanombe">Kanombe</option>
              <option value="Murindi">Murindi</option>
              <option value="Kimisagara">Kimisagara</option>
            </select>
          </div>
          <div className="flex py-4 ">
            <div className="bg-[#19B600] h-8 px-3 mr-5 rounded-md pt-1 cursor-pointer">
              {/* <Link to="/admin">Back</Link> */}
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Back
              </button>
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
    </div>
  );
};

export default NewOperatorForm;
