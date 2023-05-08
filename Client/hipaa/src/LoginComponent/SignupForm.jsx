import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/Usercreate",
        values
      );
      resetForm();
      console.log(response.data);
      if (response.status >= 200 && response.status < 300) {
        setIsSuccess(true);
      }
    } catch (error) {
      // handle error
    }
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().min(3).max(24).required("firstName must required"),
    lastName: Yup.string().min(3).max(24).required("lastName must required"),
    contact: Yup.number().min(11).required("contact must required"),
    email: Yup.string().email("Invalid email").required("Email must required"),
    password: Yup.string().min(3).max(24).required("Password must required"),
  });
  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    resetForm,
    isValid,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    resetForm: () => {
      resetForm();
    },
  });
  return (
    <div className="form">
      {isSuccess ? (
        <div>
          <h2>Signup Successful!</h2>
          <p>Your account has been created.</p>
          <button className="secondary">
            <Link to="/"><button className="button">Home</button> </Link>{" "}
          </button>
        </div>
      ) : (
        <div>
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="firstName"
            autoComplete="off"
                className="input"
                placeholder="Enter first name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="input-highlight"></span>
              <label>firstName</label>
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
                placeholder="Enter lastName name"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="input-highlight"></span>
              <label>lastName</label>
              {errors.lastName && touched.lastName ? (
                <p className="form-error">{errors.lastName}</p>
              ) : null}
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="contact"
                className="input"
                autoComplete="off"
                placeholder="Enter contact number"
                value={values.contact}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="input-highlight"></span>
              <label>contact</label>
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
                placeholder="Enter email "
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="input-highlight"></span>
              <label>email</label>
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                autoComplete="off"
                className="input"
                placeholder="Enter password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="input-highlight"></span>
              <label>password</label>
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>
            <button type="submit" disabled={!isValid}className="buttons" >
              Signup
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
