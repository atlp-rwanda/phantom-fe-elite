/** @format */

import React from "react";
import { useState, useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import Admin from "../../component/layout/Layout";

const AssignDriversToBuses = () => {
  const form = useRef(null);
  const [Routes, setRoutes] = useState(null);
  const [Drivers, setDrivers] = useState(null);
  const [Buses, setBuses] = useState(null);

  function sendEmail(values) {
    emailjs
      .send(
        "service_q7qhmq8",
        "template_t477mvs",
        { bus: values.bus, to: values.driver },
        "EcZYS22BjMd-38T_6"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  const signUpSchema = Yup.object({
    driver: Yup.string().required("Driver is Required"),
    bus: Yup.string().required("Bus is Required"),
  });

  const AssignmentHandler = (routeData, formikProps) => {
    const { values, submitForm, setSubmitting } = formikProps;
    console.log({ routeData, values });
    console.log(values.driver);

    submitForm();
    AssignedData(routeData, values);
    sendEmail(values);
  };

  const AssignedData = (routeData, values) => {
    fetch("http://localhost:7000/assigned", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: routeData.id,
        routes: routeData.route,
        driveremail: values.driver,
        platenumber: values.bus,
      }),
    });
  };
  // Retrieve all routes
  const allRoutes = () => {
    fetch(`http://localhost:7000/routes`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRoutes(data);
      });
  };

  const allDrivers = () => {
    fetch(`http://localhost:7000/drivers`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDrivers(data);
      });
  };
  const allBuses = () => {
    fetch(`http://localhost:7000/buses`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
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
          <div className="m-2 font-black text-xl border-b-2 border-solid border-darkBluePhant pt-6 lg:pt-0 w-[250px]">
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
              validateOnMount={true}
              initialValues={{ driver: "", bus: "" }}
              validationSchema={signUpSchema}
            >
              {(formikProps) => {
                const {
                  values,
                  errors,
                  touched,
                  setFieldValue,
                  handleBlur,
                  handleSubmit,
                  isValid,
                  dirty,
                } = formikProps;
                return (
                  <Form
                    key={route.id}
                    data-testid="form"
                    // onSubmit={handleSubmit}
                    className="overflow-auto "
                  >
                    <div className="grid grid-cols-12 border-b border-black border-solid ">
                      <div className="col-span-1 pl-1" data-testid="route-id">
                        {route.id}
                      </div>
                      <div
                        className="col-span-3 pl-1"
                        data-testid="route-route"
                      >
                        {route.route}
                      </div>
                      <div className="col-span-3 pl-0 lg:pl-1">
                        <select
                          name="driver"
                          data-testid="driver-email"
                          id="route-select"
                          className="w-full bg-gray-100 p-2 "
                          value={values.driver}
                          onBlur={handleBlur}
                          onChange={(e) =>
                            setFieldValue("driver", e.target.value, {
                              shouldValidate: true,
                            })
                          }
                        >
                          <option value="">Driver email</option>
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

                      <div className="col-span-3 pl-1 lg:pl-2">
                        <select
                          name="bus"
                          data-testid="bus-plate"
                          id="plate-select"
                          className="w-full bg-gray-100 p-2 "
                          value={values.bus}
                          onBlur={handleBlur}
                          onChange={(e) => setFieldValue("bus", e.target.value)}
                        >
                          <option value="">Bus plate</option>
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

                      <div className="col-span-2 py-1 pl-1 lg:pl-3 flex justify-between w-full">
                        <button
                          // type="submit"
                          className="w-full p-2 bg-darkBluePhant"
                          data-testid="submit-btn"
                          onClick={() => AssignmentHandler(route, formikProps)}
                          disabled={!formikProps.isValid}
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

export default AssignDriversToBuses;