import React from 'react'
import * as Yup from "yup"
import { useFormik } from 'formik'
import Admin from "../../component/layout/Layout"

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
    }
  });

  return (
    <>
    <Admin>
    <h3 className='font-bold underline decoration-sky-500' data-testid="head1">Update Operator Profile</h3>
    <h3 className='text-center relative sm:top-20 font-bold underline decoration-sky-500 top-10 md:top-10' data-testid="head2">SETTINGS</h3>
    <form onSubmit={formik.handleSubmit} className='z-0 border-2 sm:w-2/4 h-96 bg-adminformbgcolor relative sm:left-60 sm:mt-26 shadow-xl w-4/5 left-10 mt-12 md:left-24 md:w-4/6 lg:mt-28 lg:ml-32 lg:h-4/6 lg:w-3/5'>
            <div className='word flex flex-col place-items-center mt-10'>
            <input 
            placeholder='Username...' 
            className='w-9/12 mt-5 p-2'
            title='input'
            id='username'
            name='username'
            data-testid="username-input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? <span className='text-red-600'data-testid="error-msg">{formik.errors.username}</span>: null}
            <input 
            placeholder='Password...' 
            className='w-9/12 mt-5 p-2'
            id='password'
            name='password'
            title='input2'
            data-testid="password-input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? <p className='text-red-600'>{formik.errors.password}</p>: null}
            <button className='mt-20 bg-adminFooterBackground p-2 w-9/12' type='submit' title='button' data-testid="submit-form">Update profile</button>
            </div>
        </form>
    </Admin>
    </>
  )
}
export default UpdateOperator
