import React from "react";
import { useState, useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import SearchbarDropdown from "./DropDownSearch";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { values } from "regenerator-runtime";

const NewOperatorForm = ({ setOpenModal, setData, saveMessage }) => {
  const [wordEntered, setWordEntered] = useState("");
  const [wordEntered1, setWordEntered1] = useState("");
  const [wordEntered2, setWordEntered2] = useState("");
  const form = useRef(null);
  const [Routes, setRoutes] = useState([]);
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
    sendEmail(values);
    submitForm();
    await setData();
    setSubmitting(true);
    setWordEntered("");
    setWordEntered1("");
    setWordEntered2("");
    // setTimeout(() => {
    //   it will set formik.isDirty to false
    //   it will also keep new values
    //   resetForm({ values: { driver: "", bus: "", route: "" } });
    //   resetForm({});

    // }, 1000);
  };

  const AssignedData = async (values) => {
    try {
      const dataToSave = await fetch("http://localhost:7000/assigned", {
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
      saveMessage(dataToSave, "Save");
      await deleteData;
    } catch (err) {}
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
          // onSubmit={async (values, { resetForm }) => {
          //   await AssignedData(values);
          //   sendEmail(values);
          //   submitForm();
          //   await setData();
          //   setSubmitting(true);
          //   resetForm({ values: { driver: "", bus: "", route: "" } });
          // }}
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
                    setWordEntered={setWordEntered}
                    wordEntered={wordEntered}
                    // valueToSubmit={AssignmentHandler}
                  />
                )}

                <br />

                {console.log(formikProps)}
                {Drivers && (
                  <SearchbarDropdown
                    Datas={Drivers}
                    Name="driver"
                    setWordEntered={setWordEntered1}
                    wordEntered={wordEntered1}
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
                    setWordEntered={setWordEntered2}
                    wordEntered={wordEntered2}
                    // valueToSubmit={AssignmentHandler}
                  />
                )}

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
                    type="submit"
                    className="py-2 px-4 bg-textBluePhant text-white rounded hover:bg-textBluePhant mr-2"
                    onClick={() => AssignmentHandler(formikProps)}
                    // disabled={!formikProps.isValid}
                  >
                    Assign
                  </button>
                  <Toaster className="w-1/3" />
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
