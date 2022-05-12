/** @format */

import React from "react";
import { useState, useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Admin from "../../component/layout/Layout";

const Assign = () => {
  const [Routes, setRoutes] = useState(null);
  const [Drivers, setDrivers] = useState(null);
  const [Buses, setBuses] = useState(null);
  const signUpSchema = Yup.object({
    driver: Yup.string().required("Driver is Required"),
    bus: Yup.string().required("Bus is Required"),
  });

  const AssignmentHandler = (routeData, formikProps) => {
    const { values, submitForm, setSubmitting } = formikProps;
    console.log(routeData, values);

    submitForm();
  };

  // Retrieve all routes
  const allRoutes = () => {
    fetch(`http://localhost:7000/routes`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRoutes(data);
      });
  };

  const allDrivers = () => {
    fetch(`http://localhost:7000/drivers`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDrivers(data);
      });
  };
  const allBuses = () => {
    fetch(`http://localhost:7000/buses`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBuses(data);
      });
  };
  useEffect(() => {
    allRoutes();
    allDrivers();
    allBuses();
  }, []);

  return (
    <>
      <Admin>
        <div className="flex justify-center sm:justify-start md:justify-center lg:justify-start ">
          <div className="m-2 font-black text-xl border-b-2 border-solid border-darkBluePhant w-[250px] bg-slate-400">
            OPERATOR-DASHBOARD
          </div>
        </div>
        <div className="flex flex-row justify-between sm:justify-start md:justify-evenly lg:justify-start items-center my-3"></div>
        <div className="grid grid-cols-12 border-b-2 border-black font-bold border-solid">
          <div className="col-span-1">No</div>
          <div className="col-span-3 ">Routes</div>
          <div className="col-span-3 ">Driver Email</div>
          <div className="col-span-3 ">Bus Plate</div>
          <div className="col-span-2 "></div>
        </div>
        {Routes &&
          Routes.map((route) => (
            <Formik
              initialValues={{ driver: "", bus: "" }}
              validationSchema={signUpSchema}
            >
              {(formikProps) => {
                const { values, errors, touched, setFieldValue } = formikProps;
                return (
                  <Form key={route.id} className="overflow-auto ">
                    <div className="grid grid-cols-12 border-b border-black border-solid ">
                      <div className="col-span-1 pl-1 bg-pink-300">
                        {route.id}
                      </div>
                      <div className="col-span-3 pl-1">{route.route}</div>
                      <div className="col-span-3 pl-1">
                        <select
                          name="driver-email"
                          id="route-select"
                          className="w-full bg-gray-100 p-2 "
                          value={values.driver}
                          onChange={(e) =>
                            setFieldValue("driver", e.target.value)
                          }
                        >
                          <option value="">--Select Email--</option>
                          {Drivers &&
                            Drivers.map((driver) => (
                              <option key={driver.id} value={driver.email}>
                                {driver.email}
                              </option>
                            ))}
                        </select>
                        {touched.driver && errors.driver ? (
                          <span
                            data-testid="error-msg"
                            className="text-errorText text-xs z-10"
                          >
                            {errors.driver}
                          </span>
                        ) : null}
                      </div>

                      <div className="col-span-3 pl-2">
                        <select
                          name="bus-plate"
                          id="plate-select"
                          className="w-full bg-gray-100 p-2 "
                          value={values.bus}
                          onChange={(e) => setFieldValue("bus", e.target.value)}
                        >
                          <option value="">--Select Plate--</option>
                          {Buses &&
                            Buses.map((bus) => (
                              <option key={bus.id} value={bus.platenumber}>
                                {bus.platenumber}
                              </option>
                            ))}
                        </select>
                        {touched.bus && errors.bus ? (
                          <span
                            data-testid="error-msg"
                            className="text-errorText text-xs"
                          >
                            {errors.bus}
                          </span>
                        ) : null}
                      </div>

                      <div className="col-span-2 py-1 pl-3 flex justify-between w-full">
                        <button
                          type="button"
                          className="bg-darkBluePhant  w-full p-2"
                          onClick={() => AssignmentHandler(route, formikProps)}
                        >
                          Assign
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          ))}
      </Admin>
    </>
  );
};

export default Assign;
