import React from 'react'
import * as Yup from "yup"
import { useFormik } from 'formik'
import Driverlayout from '../../component/layout/DriverDashboard';

function UpdateDriver() {
    const formik = useFormik({
        initialValues:{
          username: "",
          password: "",
          driverid: "",
        },
        validationSchema: Yup.object({
          username: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required('Username Required'),
          password: Yup.string()
          .min(4, "Minimum of 4 Numbers")
          .required("Password is Required"),
          driverid: Yup.string()
          .min(7, "Minimum of 7 Numbers")
          .required("DriverId is required")
        }),
        onsubmit: values => {
        }
      });
      console.log(formik.errors);
  return (
    <>
    <Driverlayout>
    <h3 className='font-bold underline decoration-sky-500' data-testid="head1">Update Driver Profile</h3>
    <h3 className='text-center relative top-2 font-bold underline decoration-sky-500 md:top-2 lg:top-16' data-testid="head2">SETTINGS</h3>
    <form onSubmit={formik.handleSubmit} className='border-2 w-4/5 h-4/5 bg-adminformbgcolor relative left-8 mt-6 shadow-xl md:left-26 md:mt-6 lg:w-3/5 lg:h-4/6 lg:ml-48 lg:mt-20'>
            <div className='word flex flex-col place-items-center mt-10'>
            <input 
            placeholder='Driver Id...' 
            className='w-9/12 mt-5 p-2'
            title='input'
            id='driverid'
            name='driverid'
            data-testid="Driverid-input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Driverid}
            />
            {formik.touched.driverid && formik.errors.driverid ? <span className='text-red-600'data-testid="error-msg">{formik.errors.driverid}</span>: null}
            <input 
            placeholder='Username...' 
            className='w-9/12 mt-5 p-2'
            title='input1'
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
    </Driverlayout>
    </>
  )
}

export default UpdateDriver