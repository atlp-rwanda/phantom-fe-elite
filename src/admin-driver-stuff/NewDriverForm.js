import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const NewOperatorForm = ({ setOpenModal, setData }) => {

  // Initial data is prefilled with data from row being updated
  let initialData = {
    name: "",
    id_number: "",
    permit_id: "",
    phone: "",
    email:""
  };

  //  the function which is called by formik by default and it passes values object automatically
  // to this onSubmit function and we can capture those values and use them!
  const onSubmit = (values, { resetForm }) => {
    // prefilling the each and every submitted data from form with default role = operator
    values.role = "driver";
    setData(values);
    resetForm({});
    setOpenModal(false);
  };

  // validationSchema which validate the form before being submitted
   const phoneRegExp =
     /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
   const validate = Yup.object({
     name: Yup.string()
       .matches(
         /^[A-Za-z ]*$/,
         "Please enter valid name, It should not include number"
       )
       .min(3, "Too Short Name!")
       .max(50, "Too Long name!")
       .required("Name Required"),
       phone: Yup.string()
       .matches(phoneRegExp, "Phone number is not valid")
       .required("Enter the driver phone number"),
      id_number: Yup.number("Enter the number")
      .positive("They should not be negative")
      .required("Please fill the form with number").min(1),
     permit_id: Yup.string().required("license is required").min(3, "too short"),
   });

  //  the formik is the object which is returned by useFormik. this use formik is receiving
  // functions onSubmit, InitialValues Object and Validate schema from yup
  const formik = useFormik({
    initialValues: initialData,
    onSubmit: onSubmit,
    validationSchema: validate,
  });

  return (
    <div
      className="w-screen h-screen flex justify-center items-center absolute bg-black bg-opacity-50"
      data-testid="edit-form"
    >
      <div className="w-5/6 sm:w-3/5 h-auto sm:h-[90%] md:w-3/5 lg:h-2/5 md:h-[55%] lg:w-2/6 xl:w-1/3 xl:h-auto bg-white rounded-md pt-2 md:pt-9 lg:pt-2 box-border">
        <div className="sm:px-4 px-3">
          <div className="mb-4 font-bold border-b-2 border-solid border-darkBluePhant w-[130px] pt-2">
            Create New Driver
          </div>
        </div>
        <form action="" onSubmit={formik.handleSubmit} role="form" data-testid='new-form'>
          <div className="flex flex-col pb-1 sm:px-4 px-3">
            <label for="name" className=" my-2 md:my-0  md:py-3 lg:py-0">
              Driver Name
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              name="name"
              data-testid="name"
              type="text"
              placeholder="Driver Name"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.name && formik.errors.name ? (
              <div className="text-errorText">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-1 sm:px-4 px-3">
            <label for="name" className=" my-2 md:my-0  md:py-3 lg:py-0">
              Driver Email
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              name="email"
              data-testid="email"
              type="text"
              placeholder="Driver Email"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.email && formik.errors.email ? (
              <div className="text-errorText">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-1 sm:px-4 px-3 md:my-5 lg:my-0">
            <label htmlFor="email" className="my-2 md:my-0 md:py-3 lg:py-0">
              Driver Id
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.id_number}
              onBlur={formik.handleBlur}
              name="id_number"
              data-testid="email"
              type="text"
              placeholder="Driver Id"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.id_number && formik.errors.id_number ? (
              <div className="text-errorText">{formik.errors.id_number}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-1 sm:px-4 px-3 md:my-5 lg:my-0">
            <label htmlFor="email" className="my-2 md:my-0 md:py-3 lg:py-0">
              Mobile number
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              name="phone"
              data-testid="email"
              type="text"
              placeholder="Mobile number"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-errorText">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-1 sm:px-4 px-3 md:my-5 lg:my-0">
            <label htmlFor="email" className="my-2 md:my-0 md:py-3 lg:py-0">
              Driver License
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.permit_id}
              onBlur={formik.handleBlur}
              name="permit_id"
              data-testid="email"
              type="text"
              placeholder="Driver License"
              className="h-8 rounded-sm bg-[#F4F4F4] text-black pl-3"
            />
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.permit_id && formik.errors.permit_id ? (
              <div className="text-errorText">{formik.errors.permit_id}</div>
            ) : null}
          </div>
          <div className="bg-gray-200 px-4 py-2 mt-4 md:12 sm:mt-8 md:mt-12 lg:mt-4 rounded-b-md text-left flex">
            <button
              className="pt-2 pb-0 px-4 bg-gray-500 text-white rounded hover:bg-gray-600 mr-2"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Back
            </button>
            <button
              type="submit"
              role='button'
              className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 mr-2"
            >
              Save Driver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewOperatorForm;
