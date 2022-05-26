import React, { useEffect, useState } from "react";
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios";

const UpdateRouteLine = ({ update,setDataFetched, setRoutes }) => {
  
  // const [updated, setUpdated] = useState({origin:'', destination:''});
  const {origin,destination } = update
  
  let initialData = {
    origin:origin,
    destination:destination
  };

  // validationSchema which validate the form before being submitted
   const validate = Yup.object({
     origin: Yup.string()
       .min(3, "Too Short Name!")
       .max(50, "Too Long name!")
       .required("Origin Required"),
     destination: Yup.string()
     .min(3, "Too Short Name!")
     .max(50, "Too Long name!")
     .required("Destination Required"),
   });

  const onSubmit = (values, { resetForm }) => {

   updateHandle(update.id,values);
   resetForm({});
 };

   const formik = useFormik({
    initialValues: initialData,
    onSubmit:onSubmit,
    validationSchema: validate,
  });
  const updateHandle = async (id,updated) => {
    try {
      const renewed = await axios.patch(`http://localhost:7000/routes/${id}`, updated);
      const allData = await axios.get("http://localhost:7000/routes");
      setRoutes(allData.data);

      setDataFetched();
    } catch (error) {
      console.log(error)
    }
  };
  


  const setOutModal = () => {
	setDataFetched();
  }


  return (
    <div
      className="fixed z-10 overflow-y-auto top-0 w-full left-0 "
      id="UpdateRouteLine"
      data-testid="UpdateRouteLine"

      
    >
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <form onSubmit={
            formik.handleSubmit}
           >
            
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex flex-row my-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-fit">
                Update Route
              </div>
              <label className="font-semibold">Origin</label>
              <input
                type="text"
                id="origin"
                name="origin"
                data-testid="busName-input"
               onChange={formik.handleChange}
                 value={formik.values.origin}
                    onBlur={formik.handleBlur}
                // defaultValue = {`${originUpdate}`}
                placeholder="Origin"
                className="w-full bg-gray-100 p-2 mt-2 mb-3"
              />
               {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.origin && formik.errors.origin ? (
              <div className="text-errorText">{formik.errors.origin}</div>
            ) : null}

              <label className="font-semibold">Destination</label>
              <input
                type="text"
                name="destination"
                id="destination"
                data-testid="busPlate-input"
                // onChange={handleChangeUpdate}
                // defaultValue={`${destinationUpdate}`}
                 onChange={formik.handleChange}
                 value={formik.values.destination}
                    onBlur={formik.handleBlur}
                placeholder="Destination"
                className="w-full bg-gray-100 p-2 mt-2 mb-3"
              />
    {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.destination && formik.errors.destination ? (
              <div className="text-errorText">{formik.errors.destination}</div>
            ) : null}
            </div>
            <div className="bg-gray-200 px-4 py-3 text-left">
              <button
                type="button"
                data-testid="backBtn"
                className="py-2 px-4 bg-gray-600 text-white rounded hover:bg-gray-700 mr-2"
                onClick={setOutModal}
              >
                <i className="fas fa-times"></i> Back
              </button>
              <button
                type="submit"
                data-testid="updateBtn"
                className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
              >
                <i className="fas fa-plus"></i> Update Route
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateRouteLine;