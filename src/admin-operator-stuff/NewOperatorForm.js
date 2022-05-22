import React from "react";
import { useFormik } from "formik";

const NewOperatorForm = ({ setOpenModal, setData }) => {
  const initialData = {
    name: "",
    email: "",
  };
  const onSubmit = (values, { resetForm }) => {
    // prefilling the each and every submitted data from form with default role = operator
    values.role = "operator";
    setData(values);
    resetForm({});
  };
  const validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Email Required";
    } else if (
      // regex to check the validity of email
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    } else if (!values.name) {
      errors.name = " Name Required!";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: initialData,
    onSubmit,
    validate,
  });
  
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute bg-black bg-opacity-50" data-testid = "new-form">
      <div className="w-5/6 sm:w-3/5 h-1/3 sm:h-3/5 md:w-3/5 lg:h-2/5 md:h-1/3 lg:w-2/6 xl:w-1/3 xl:h-2/5 bg-white rounded-md pt-2 md:pt-9 lg:pt-2 box-border">
        <div className="sm:px-4 px-3">
          <div className="mb-4 font-bold border-b-2 border-solid border-darkBluePhant w-[130px] pt-2">
            Create Operator
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
            <label htmlFor="email" className="my-2 md:my-0 md:py-3 lg:py-0">
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
          <div className="bg-gray-200 px-4 py-2 mt-4 md:12 sm:mt-8 md:mt-12 lg:mt-4 rounded-b-md text-left flex">
            <button
              className="py-2 px-4 bg-green-600 text-white rounded hover:bg-gray-700 mr-2"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Back
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-textBluePhant text-white rounded hover:bg-textBluePhant mr-2"
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
