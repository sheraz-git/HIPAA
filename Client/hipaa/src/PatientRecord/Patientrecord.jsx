import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask, gettask } from "../redux/action";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import Cookies from "js-cookie";
const validationSchema = Yup.object().shape({
  firstName: Yup.string().max(15).min(5).required("First name is required"),
  lastName: Yup.string().max(15).min(5).required("Last name is required"),
  contact: Yup.string().max(15).required("Contact number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  SocialSecuritNumber: Yup.string()
    .max(5)
    .min(5)
    .required("Social Security Number is required"),
  address: Yup.string().required("Address is required"),
  medicalHistory: Yup.string().required("Medical history is required"),
});

function PatientRecord() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const token = Cookies.get("token");
  //console.log(token);
  useEffect(() => {
    dispatch(gettask(token));
  },[token]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      SocialSecuritNumber: "",
      address: "",
      medicalHistory: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        addtask(
          values.firstName,
          values.lastName,
          values.contact,
          values.email,
          values.SocialSecuritNumber,
          values.address,
          values.medicalHistory,
          token
        )
      );
      formik.resetForm();
    },
  });

  const {
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
    handleSubmit,
  } = formik;

  return (
    <>
      <div className="App">
        <h1>Add Patient Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              className="input"
              placeholder="Enter first name"
              autoComplete="off"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="input-highlight"></span>
            <label>First Name</label>
            {errors.firstName && touched.firstName ? (
              <p className="form-error">{errors.firstName}</p>
            ) : null}
          </div>

          <div className="input-group">
            <input
              type="text"
              name="lastName"
              className="input"
              placeholder="Enter lastName name"
              autoComplete="off"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="input-highlight"></span>
            <label>Last Name</label>
            {errors.lastName && touched.lastName ? (
              <p className="form-error">{errors.lastName}</p>
            ) : null}
          </div>
          <div className="input-group">
            <input
              type="text"
              name="contact"
              className="input"
              placeholder="Enter contact number"
              value={values.contact}
              onChange={handleChange}
              autoComplete="off"
              onBlur={handleBlur}
            />
            <span className="input-highlight"></span>
            <label>Contact</label>
            {errors.contact && touched.contact ? (
              <p className="form-error">{errors.contact}</p>
            ) : null}
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter email "
              value={values.email}
              onChange={handleChange}
              autoComplete="off"
              onBlur={handleBlur}
            />
            <span className="input-highlight"></span>
            <label>Email</label>
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>
          <div className="input-group">
            <input
              type="Password"
              name="SocialSecuritNumber"
              className="input"
              placeholder="Enter SSN (5 digits)"
              value={values.SocialSecuritNumber}
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="input-highlight"></span>
            <label>Social Security Number</label>
            {errors.SocialSecuritNumber && touched.SocialSecuritNumber ? (
              <p className="form-error">{errors.SocialSecuritNumber}</p>
            ) : null}
          </div>
          <div className="input-group">
            <input
              type="text"
              name="address"
              className="input"
              placeholder="Enter address"
              value={values.address}
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="input-highlight"></span>
            <label>Address</label>
            {errors.address && touched.address ? (
              <p className="form-error">{errors.address}</p>
            ) : null}
          </div>
          <div className="input-group">
            <input
              type="text"
              name="medicalHistory"
              placeholder="Enter medicalHistory(Regular or not)"
              className="input"
              value={values.medicalHistory}
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="input-highlight"></span>
            <label>Medical History</label>
            {errors.medicalHistory && touched.medicalHistory ? (
              <p className="form-error">{errors.medicalHistory}</p>
            ) : null}
          </div>
          <button type="submit" disabled={!isValid} className="buttons">
            Add Details
          </button>
        </form>
      </div>

      <div className="card-container">
        {tasks.tasks.length > 0 &&
          tasks.tasks.map((task, index) => (
            <div className="card" key={index}>
             
              <h2 className="card-title">firstName: {task.firstName}</h2>
              <p className="card-description">lastName: {task.lastName}</p>
              <p className="card-description">contact: {task.contact}</p>
              <p className="card-description">email: {task.email}</p>
              <p className="card-description">SocialSecuritNumber: {task.SocialSecuritNumber}</p>
              <p className="card-description">address: {task.address}</p>
              <p className="card-description">medicalHistory: {task.medicalHistory}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default PatientRecord;
