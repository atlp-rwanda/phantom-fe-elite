import React, { useState } from 'react';
import { useFormik } from "formik";

const NewOperatorForm = ({ setOpenModal }) => {
    const initialData = {
      name: "",
      email: "",
      route: "",
    };
const onSubmit = (values, {resetForm}) => {
  console.log(values);
  resetForm({});
}
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
  onSubmit,
  validate
})
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
    setFormData({
      name: "",
      email: "",
      route: "",
    });  
  };

//     const initialValues = {
//     email: "",
//   };
//   const onSubmit = (values) => {
//     // this function runs when submit button is pressed and Formik automatically passes the values an objects containing the objects containing the
//     // current values of the entered data with the properties equal to the name set on the input entered data with the properties equal to the name set on the input
//     console.log(values);
//   };
//   // this function when passed in useFormik object, it automatically receive the objects containing the
//   // current values of the
//   // entered data with the properties equal to the name set on the input.
//   // like values.email.
//   const validate = (values) => {
//     let errors = {};
//     if (!values.email) {
//       errors.email = "Required";
//     } else if (
//       // regex to check the validity of email
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//     ) {
//       errors.email = "Invalid email address";
//     }
//     return errors;
//   };
//   // use formik accepts the object containing some data and returns the object having
//   // different methods and properties for handling easily the form in react.
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validate,
//   });
//   return (
//     <form
//       onSubmit={formik.handleSubmit}
//       className="flex w-full sm:w-3/5 justify-around mt-16 sm:mt-0 sm:px-16 lg:justify-between lg:shrink-0"
//       role="form"
//     >
//       <div>
//         <input
//           className="border-2 w-44 sm:w-40 lg:w-80 h-9 sm:h-12 sm:mr- pl-2 rounded-sm border-black border-solid"
//           type="text"
//           placeholder="Email ...."
//           name="email"
//           onChange={formik.handleChange}
//           value={formik.values.email}
//           // on blur tracks for the interaction in the input, when the interaction happen,
//           // it populate boolean true on the touched properties under formik.
//           onBlur={formik.handleBlur}
//         />
//         {/* conditional rendering of the error message for validating the form of subscribing */}
//         {formik.touched.email && formik.errors.email ? (
//           <div className="text-errorText">{formik.errors.email}</div>
//         ) : null}
//       </div>
//       <button
//         type="submit"
//         className="w-24 sm:w-24 lg:w-40 h-9 sm:h-12 border-0 border-none lg:ml-6 rounded bg-blackPhant text-whitePhant cursor-pointer"
//       >
//         Subcribe
//       </button>
//     </form>
//   );
// };

  return (
    <div className="w-screen h-screen flex justify-center items-center absolute bg-black bg-opacity-50">
      <div className="w-5/6 sm:w-3/5 h-2/5 sm:h-3/5 md:w-3/5 md:h-2/5 lg:w-2/6 lg:h-3/5 xl:w-1/3 xl:h-3/5 bg-white rounded-md p-3 sm:p-4 box-border">
        <div className="mb-4 font-bold border-b-2 border-solid border-darkBluePhant w-[130px] pt-6">
          Create Operator
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
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
            {/* conditional rendering of the error message for validating the name input field */}
            {formik.touched.email && formik.errors.email ? (
              <div className="text-errorText">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col pb-1">
            <label for="route-select">Route</label>
            <select
              onChange={formik.handleChange}
              value={formik.values.route}
              onBlur={formik.handleBlur}
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
            {/* conditional rendering of the error message for validating the form of subscribing */}
            {formik.touched.route && formik.errors.route ? (
              <div className="text-errorText">{formik.errors.route}</div>
            ) : null}
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
