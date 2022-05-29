import React from "react";
import { useState, useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import SearchbarDropdown from "./DropDownSearch";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const NewOperatorForm = ({ setOpenModal, setData }) => {
  const form = useRef(null);
  const [Routes, setRoutes] = useState([]);
  const [Drivers, setDrivers] = useState(null);
  const [Buses, setBuses] = useState(null);
  // const [dataValues, setdataValues] = useState({});
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
    route: Yup.string().required("Route is Required"),
    driver: Yup.string().required("Driver is Required"),
    bus: Yup.string().required("Bus is Required"),
  });

  // const AssignmentHandler = (formikProps) => {
  //   const { values, submitForm, resetForm, setSubmitting } = formikProps;

  //   setData();
  //   AssignedData(values);
  //   sendEmail(values);
  //   submitForm();

  //   setSubmitting(true);
  //   resetHandler(resetForm);
  // };

  const AssignmentHandler = async (formikProps) => {
    const { values, submitForm, resetForm, setSubmitting } = formikProps;
    // console.log(values);
    // setdataValues(values);

    await AssignedData(values);
    // sendEmail(values);
    submitForm();
    await setData();
    setSubmitting(true);
    // resetHandler(resetForm);
  };
  const resetHandler = (resetForm) => {
    setTimeout(() => {
      // it will set formik.isDirty to false
      // it will also keep new values
      resetForm({ values: { driver: "", bus: "", route: "" } });
    }, 1000);
  };

  const AssignedData = async (values) => {
    await fetch("http://localhost:7000/assigned", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // id: routeData.id,
        routes: values.route,
        driveremail: values.driver,
        platenumber: values.bus,
      }),
    });
    // console.log(values.driver);
  };

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
    allDrivers();
    allBuses();
    allRoutes();
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center absolute bg-black bg-opacity-50">
      <div className="w-5/6 sm:w-3/5 h-2/4 sm:h-3/5 md:w-3/5 md:h-2/5 lg:w-2/6 lg:h-3/5 xl:w-1/3 xl:h-4/6 bg-white rounded-md px-3 pt-2 sm:p-4 box-border">
        <div className="mb-4 font-bold border-b-2 border-solid border-darkBluePhant w-[250px] pt-2">
          Assign New Driver To buses
        </div>
        <Formik
          validateOnMount={true}
          initialValues={{ driver: "", bus: "", route: "" }}
          validationSchema={signUpSchema}
          onSubmit={() => {}}
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
                data-testid="form"
                // onSubmit={handleSubmit}
                className=""
              >
                {Routes && (
                  <SearchbarDropdown
                    Datas={Routes}
                    formik={formikProps}
                    Name="route"
                    Routelabel="Route Name"
                    dataproperty="route"
                    // valueToSubmit={AssignmentHandler}
                  />
                )}

                <br />
                {/* <select
                    name="route"
                    data-testid="route-name"
                    id="route-select"
                    className="w-full bg-gray-100 p-2 "
                    value={values.route}
                    onBlur={handleBlur}
                    onChange={(e) =>
                      setFieldValue("route", e.target.value, {
                        shouldValidate: true,
                      })
                    }
                  >
                    <option value="">Select Route</option>
                    {Routes &&
                      Routes.map((route) => (
                        <option key={route.id} value={route.route}>
                          {route.route}
                        </option>
                      ))}
                  </select>
                  {touched.route && errors.route ? (
                    <span
                      data-testid="error-msg"
                      className="text-errorText text-xs z-10"
                    >
                      {errors.route}
                    </span>
                  ) : null} */}
                {console.log(formikProps)}
                {Drivers && (
                  <SearchbarDropdown
                    Datas={Drivers}
                    Name="driver"
                    formik={formikProps}
                    Routelabel="Driver Email"
                    dataproperty="email"
                    // valueToSubmit={AssignmentHandler}
                  />
                )}

                <br />
                {Buses && (
                  <SearchbarDropdown
                    Datas={Buses}
                    Name="bus"
                    formik={formikProps}
                    Routelabel="Plate Number"
                    dataproperty="platenumber"
                    // valueToSubmit={AssignmentHandler}
                  />
                )}

                {/* <label htmlFor="email">Driver Email</label>
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
                    <option value="">select email</option>
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
                  ) : null} */}

                {/* <div className="flex flex-col pb-1">
                  <label for="role-select">Plate Number</label>
                  <select
                    name="bus"
                    data-testid="bus-plate"
                    id="plate-select"
                    className="w-full bg-gray-100 p-2 "
                    value={values.bus}
                    onBlur={handleBlur}
                    onChange={(e) => setFieldValue("bus", e.target.value)}
                  >
                    <option value="">Select plate</option>
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
                </div> */}
                <div className="bg-gray-200 px-4 py-2 mt-4 text-left flex">
                  <button
                    className="py-2 px-4 bg-green-600 text-white rounded hover:bg-gray-700 mr-2"
                    onClick={() => {
                      setOpenModal(false);
                    }}
                  >
                    Back
                  </button>
                  <button
                    // type="submit"
                    className="py-2 px-4 bg-textBluePhant text-white rounded hover:bg-textBluePhant mr-2"
                    onClick={() => AssignmentHandler(formikProps)}
                    disabled={!formikProps.isValid}
                  >
                    Assign
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default NewOperatorForm;
