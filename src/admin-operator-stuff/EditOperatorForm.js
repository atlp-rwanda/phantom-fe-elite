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
  const { name, email } = update;

  // Initial data is prefilled with data from row being updated
  let initialData = {
    name:name,
    email:email
  };

  // validationSchema which validate the form before being submitted
   const validate = Yup.object({
     name: Yup.string()
       .matches(/^[A-Za-z ]*$/, "Please enter valid name, It should not include number")
       .min(3, "Too Short Name!")
       .max(50, "Too Long name!")
       .required("Name Required"),
     email: Yup.string().email("Invalid email, Enter valid one!").required("Email Required"),
   });

  //  the function which is called by formik by default and it passes values object automatically 
  // to this onSubmit function and we can capture those values and use them!
 const onSubmit = (values, { resetForm }) => {
   // prefilling the each and every submitted data from form with default role = operator
   values.role = "operator";
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
      <div className="w-5/6 sm:w-3/5 h-1/3 sm:h-3/5 md:w-3/5 lg:h-2/5 md:h-1/3 lg:w-2/6 xl:w-1/3 xl:h-2/5 bg-white rounded-md pt-2 md:pt-9 lg:pt-2 box-border">
        <div className="sm:px-4 px-3">
          <div className="mb-4 font-bold border-b-2 border-solid border-darkBluePhant w-[130px] pt-2">
            {update ? "Edit Operator" : "Create New Operator"}
          </div>
        </div>
        <form action="" onSubmit={formik.handleSubmit} role="form">
          <div className="flex flex-col pb-1 sm:px-4 px-3">
            <label for="name" className=" my-2 md:my-0  md:py-3 lg:py-0">
              Operator Name
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              name="name"
              data-testid="name"
              type="text"
              placeholder="Operator Name"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.name && formik.errors.name ? (
              <div className="text-errorText">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-1 sm:px-4 px-3 md:my-5 lg:my-0">
            <label htmlFor="email" className="my-2 md:my-0 md:py-2 lg:py-0">
              Operator Email
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              name="email"
              data-testid="email"
              type="text"
              placeholder="Operator Email"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.email && formik.errors.email ? (
              <div className="text-errorText">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="bg-gray-200 px-4 py-2 mt-4 sm:mt-8 md:mt-5 lg:mt-2 rounded-b-md text-left flex">
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
              Save Operator
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOperatorForm;