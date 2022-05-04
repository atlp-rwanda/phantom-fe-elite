import React from 'react'
import * as Yup from "yup"
import { useFormik } from 'formik'
import Admin from "../../component/layout/Admin";

const UpdateOperator = () => {
  const formik = useFormik({
    initialValues:{
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required('Username Required'),
      password: Yup.string()
      .min(4, "Minimum of 4 letters")
      .required("Password is Required"),
    }),
    onsubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  console.log(formik.touched);
  return (
    <>
    <Admin>
      <h3 className='font-bold underline decoration-sky-500'>Update Operator Profile</h3>
    <h3 className='text-center relative top-20 font-bold underline decoration-sky-500'>SETTINGS</h3>
    <form onSubmit={formik.handleSubmit} className='border-2 w-2/4 h-96 bg-adminformbgcolor relative left-80 mt-28 shadow-xl'>
            <div className='word flex flex-col place-items-center mt-10'>
            <input 
            placeholder='Username...' 
            className='w-9/12 mt-5 p-2'
            title='input'
            id='username'
            name='username'
            onChange={formik.handleChange}
            value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? <span className='text-red-600'>{formik.errors.username}</span>: null}
            <input 
            placeholder='Password...' 
            className='w-9/12 mt-5 p-2'
            id='password'
            name='password'
            title='input2'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? <p className='text-red-600'>{formik.errors.password}</p>: null}
            <button className='mt-20 bg-adminFooterBackground p-2 w-9/12' type='submit' title='button'>Update profile</button>
            </div>
        </form>


    </Admin>
      
    </>
  )
}
export default UpdateOperator