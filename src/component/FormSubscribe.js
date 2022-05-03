import React from "react";
import { useFormik } from "formik";

const FormSubscribe = () => {
  // initial values of the form input data before being interacted by the user.
  const initialValues = {
    email: "",
  };

  const onSubmit = (values) => {
    // this function runs when submit button is pressed and sueFormik automatically passes the values an objects containing the objects containing the
    // current values of the entered data with the properties equal to the name set on the input entered data with the properties equal to the name set on the input
    console.log(values);
  };

  // this function when passed in useFormik object, it automatically receive the objects containing the
  // current values of the
  // entered data with the properties equal to the name set on the input.
  // like values.email.
  const validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      // regex to check the validity of email
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  // use formik accepts the object containing some data and returns the object having
  // different methods and properties for handling easily the form in react.
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex w-full sm:w-3/5 justify-around mt-16 sm:mt-0 sm:px-16 lg:justify-between lg:shrink-0"
      role="form"
    >
      <div>
        <input
          className="border-2 w-44 sm:w-40 lg:w-80 h-9 sm:h-12 sm:mr- pl-2 rounded-sm border-black border-solid"
          type="text"
          placeholder="Email ...."
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          // on blur tracks for the interaction in the input, when the interaction happen,
          // it populate boolean true on the touched properties under formik.
          onBlur={formik.handleBlur}
        />
        {/* conditional rendering of the error message for validating the form of subscribing */}
        {formik.touched.email && formik.errors.email ? (
          <div className="text-errorText">{formik.errors.email}</div>
        ) : null}
      </div>
      <button
        type="submit"
        className="w-24 sm:w-24 lg:w-40 h-9 sm:h-12 border-0 border-none lg:ml-6 rounded bg-blackPhant text-whitePhant cursor-pointer"
      >
        Subcribe
      </button>
    </form>
  );
};

export default FormSubscribe;
