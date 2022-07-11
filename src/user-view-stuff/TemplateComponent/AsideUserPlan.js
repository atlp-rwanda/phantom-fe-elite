import React from "react";
import { MdMyLocation } from "react-icons/md";
import { CgSearch } from "react-icons/cg";
import * as Yup from "yup"
import axios from 'axios'
import { useFormik } from "formik"
import { useState, useEffect } from "react";
import SideSection from "./SideSection";
import logo from './../../assets/imgs/logo.jpg'
import { Link } from "react-router-dom";


const AsideUserPlan = () => { 
  
  const [routes, setRoutes] = useState ([])
  const [destination, setdestination] = useState({})
  const formik = useFormik({
    initialValues:{
      location:"",
      destination:"",
    },
    onSubmit: values => {
      setdestination(values.destination)
    }
  })
  
    const Route = async () => {
      const Routefromserver = await fetchroute()
      setRoutes(Routefromserver)
    }


const fetchroute = async () => {
  console.log(destination);
   try{
    const response =  await axios.get(`http://localhost:7000/userroutes?destination=${destination}`)
    return response.data
   }catch(e){
       console.log(e);
   }
}
  return (
    <aside className="bg-[#f3f3f30d] col-start-1 col-end-13 md:col-end-6 lg:col-end-4 sm:block text-black row-start-2 row-end-17 border-r-2 border-solid border-[#f3f3f3]">
      <Link to='/'>

<img src={logo} className="mx-4 mt-0" />
</Link>
      <section className="h-fit w-[70%] px-5 bg-white rounded ml-2 mt-1 shadow-xl">
        <div className="font-semibold">Plan your trip</div>
        <form role="form" className="w-full h-fit" onSubmit={formik.handleSubmit}>
          <label
            htmlFor="email"
            className="relative text-black focus-within:text-black block"
          >
            <MdMyLocation className="pointer-events-none w-7 h-7 absolute top-[60%] transform -translate-y-1/2 right-2" />
            <input
              id="location"
              name="location"
              data-testid="name"
              type="text"
              value={formik.values.location}
              onChange={formik.handleChange}
              placeholder="Current Location"
              className="h-8 rounded-lg mt-2 w-full text-black pl-3 pr-10 placeholder:text-black bg-gray-200 focus-within:bg-gray-100"
            />
          </label>
          <div className="">
            <input
              id="destination"
              name="destination"
              data-testid="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.destination}
              placeholder="Destination"
              className="h-8 rounded-lg w-full mt-5 bg-gray-200 text-black pl-3 placeholder:text-black focus-within:bg-gray-100"
            />
          </div>
          <button type="submit" className="mt-2 font-semibold" onClick={Route}>
            Depart Now
          </button>
        </form>
      </section>
      <p className="mt-8 ml-6">Recommendend Routes</p>
      <div>
      {routes.map((route) =>{
       return <SideSection route={route}/>
      })}
      </div>
    </aside>
  );
};

export default AsideUserPlan;
