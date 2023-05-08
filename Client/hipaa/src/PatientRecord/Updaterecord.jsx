import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateTask } from "../redux/action";
import * as Yup from "yup";
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

function Updaterecord({ data }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const token = Cookies.get("token");
  const formik = useFormik({
    initialValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      contact: data.contact,
      email: data.email,
      SocialSecuritNumber: data.SocialSecuritNumber,
      address: data.address,
      medicalHistory: data.medicalHistory,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(updateTask(data._id, values, token));
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
        <h1>Edit Patient Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              className="input"
              value={values.firstName}
              autoComplete="off"
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
              value={values.lastName}
              autoComplete="off"
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
              value={values.contact}
              autoComplete="off"
              onChange={handleChange}
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
              value={values.email}
              autoComplete="off"
              onChange={handleChange}
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
    </>
  );
}

export default Updaterecord;
