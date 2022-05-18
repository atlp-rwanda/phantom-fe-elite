import React, { useState } from 'react';
import { useFormik } from "formik";

const EditOperatorForm = ({
  setOpenModal,
  update,
  setData,
  setCloseUpdate,
}) => {
  const { name, email, role, id, number } = update;
  let initialData = {
    name,
    email,
    role,
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
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
    } else if (!values.route) {
      errors.route = "Select Role";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: initialData,
    validate,
    onSubmit,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // to create the object which is resembling the format the format of data tobe saved
    let values = {};

    // capturing the data from form submission using array as they come in array due to using formik
    values.name = event.target[0].value;
    values.email = event.target[1].value;
    values.role = event.target[2].value;

    //  appending the data from form another properties which were there before updating like id, and number
    values.id = id;
    values.number = number;
    console.log(values);
    setData(values);
    event.target[0].value = "";
    event.target[1].value = "";
    event.target[2].value = "";
    setCloseUpdate("");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center absolute bg-black bg-opacity-50">
      <div className="w-5/6 sm:w-3/5 h-2/5 sm:h-3/5 md:w-3/5 md:h-2/5 lg:w-2/6 lg:h-3/5 xl:w-1/3 xl:h-4/6 bg-white rounded-md p-3 sm:p-4 box-border">
        <div className="mb-4 font-bold border-b-2 border-solid border-darkBluePhant w-[130px] pt-2">
          
          {/* to dispay the name operation dynamically after updating the operator, the edit should change to create */}
          {update ? "Edit Operator" : "Create New Operator"}
        </div>
        <form action="" onSubmit={handleSubmit} role = "form">
          <div className="flex flex-col pb-1">
            <label htmlFor="">Operator Name</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              name="name"
              type="text"
              placeholder="Operator Name"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.name && formik.errors.name ? (
              <div className="text-errorText">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-1">
            <label htmlFor="">Operator Email</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              name="email"
              type="text"
              placeholder="Operator Email"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-errorText">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-1">
            <label for="select role">Roles</label>
            <select
              onChange={formik.handleChange}
              value={formik.values.role}
              onBlur={formik.handleBlur}
              name="role"
              id="role-select"
              className="h-8 py-0 rounded-sm bg-[#F4F4F4]"
            >
              <option value="">--Select roles--</option>
              <option value="Operator">Operator</option>
              <option value="Driver">Driver</option>
              <option value="Admin">Admin</option>
            </select>
            {/* conditional rendering of the error message for validating the form of subscribing */}
            {formik.touched.role && formik.errors.role ? (
              <div className="text-errorText">{formik.errors.role}</div>
            ) : null}
          </div>
          <div className="bg-gray-200 px-4 py-3 mt-4 text-left">
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
              <i className="fas fa-plus"></i> Save Operator
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOperatorForm;
