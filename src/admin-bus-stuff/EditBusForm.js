import React from "react";
import { useFormik } from "formik"
import * as Yup from "yup"

const EditOperatorForm = ({
  setOpenModal,
  update,
  setData,
  setCloseUpdate,
}) => {

  // destructure name and email from the data coming from the row to be updated
  const { busName,
			busPlate,
			busRoute } = update;

  // Initial data is prefilled with data from row being updated
  let initialData = {
    busName,
    busPlate,
    busRoute,
  };

  // validationSchema which validate the form before being submitted
   const validate = Yup.object({
    busName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Bus Name Required"),
    busPlate: Yup.string()
      .min(4, "Minimum of 6 characters")
      .required("Bus Plate Number is Required"),
    busRoute: Yup.string()
      .min(7, "Minimum of 7 Numbers")
      .required("Bus Route is required"),
  });

  //  the function which is called by formik by default and it passes values object automatically 
  // to this onSubmit function and we can capture those values and use them!
 const onSubmit = (values, { resetForm }) => {
   // prefilling the each and every submitted data from form with default role = operator
   setData(values);
   resetForm({});
   setCloseUpdate("");
   setOpenModal(false);
 };

//  the formik is the object which is returned by useFormik. this use formik is receiving
// functions onSubmit, InitialValues Object and Validate schema from yup
  const formik = useFormik({
    initialValues: initialData,
    onSubmit:onSubmit,
    validationSchema: validate,
  });

  // triggered when back button is clicked
  const handleBack = () => {
     setCloseUpdate("");
      setOpenModal(false);
  }

  return (
    <div
      className="w-screen h-screen flex justify-center items-center absolute bg-black bg-opacity-50"
      data-testid="edit-form"
    >
      <div className="w-5/6 sm:w-3/5 h-2/5 sm:h-3/5 md:w-3/5 lg:h-3/5 md:h-2/5 lg:w-2/6 xl:w-1/3 xl:h-3/5 bg-white rounded-md pt-2 md:pt-9 lg:pt-0 box-border">
        <div className="sm:px-4 px-3">
          <div className="mb-2 font-bold border-b-2 border-solid border-darkBluePhant w-[75px] pt-4">
            {update ? "Edit Bus" : "Create New Bus"}
          </div>
        </div>
        <form action="" onSubmit={formik.handleSubmit} role="form">
          <div className="flex flex-col pb-1 sm:px-4 px-3">
            <label for="name" className=" my-2 md:my-0  md:py-3 lg:py-2">
              Bus Name
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.busName}
              onBlur={formik.handleBlur}
              name="busName"
              id="busName"
              data-testid="name"
              type="text"
              placeholder="Bus Name"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.busName && formik.errors.busName ? (
              <div className="text-errorText">{formik.errors.busName}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-0 sm:px-4 px-3 md:my-5 lg:my-0">
            <label htmlFor="email" className="my-2 md:my-0 md:py-2 lg:py-2">
              Bus Plate
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.busPlate}
              onBlur={formik.handleBlur}
              name="busPlate"
              data-testid="email"
              type="text"
              placeholder="Bus Plate"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.busPlate && formik.errors.busPlate ? (
              <div className="text-errorText">{formik.errors.busPlate}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-0 sm:px-4 px-3 md:my-5 lg:my-0">
            <label htmlFor="email" className="my-2 md:my-0 md:py-2 lg:py-2">
              Bus Route
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.busRoute}
              onBlur={formik.handleBlur}
              name="busRoute"
              data-testid="busRoute"
              type="text"
              placeholder="Bus Route"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.busRoute && formik.errors.busRoute ? (
              <div className="text-errorText">{formik.errors.busRoute}</div>
            ) : null}
          </div>
          <div className="bg-gray-200 px-4 py-2 mt-4 sm:mt-8 md:mt-5 lg:mt-9 rounded-b-md text-left flex">
            <button
              className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600 mr-2"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
            >
              Update Bus
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOperatorForm;
