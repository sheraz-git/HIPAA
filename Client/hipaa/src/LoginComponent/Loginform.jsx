import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Cookies from "js-cookie";
function Loginform() {
  const [error, setError] = useState(false); // add an error state
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/loginuser",
        values
      );
      resetForm();
      console.log(response.data);
      console.log(response.data.token);
      if (response.status === 200 && response.data.token) {
        const token = response.data.token;
        const expires = new Date();
        expires.setTime(expires.getTime() + 20 * 60 * 1000); // 10 minutes
        Cookies.set("token", token, { expires, path: "/" });
        navigate("/HomeafterLogin");
      }
    } catch (error) {
      console.log(error);
      // handle error
      setError(true);
    }

  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().min(3).max(24).required("email must required"),
    password: Yup.string().min(3).max(24).required("Password must required"),
  });

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    resetForm: () => {
      resetForm();
    },
  });

  return (
    <div className="form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="email"
            className="input"
            autoComplete="off"
            value={values.email}
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
            type="Password"
            name="password"
            className="input"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="input-highlight"></span>
          <label>password</label>
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </div>
        <button className="buttons">Login</button>
      </form>
      <div className="message">Don't have an account?</div>
      <div className="button-group">
        <button className="secondary">
          <Link to="/SignupForm">Register Your-self</Link>
        </button>
      </div>
    </div>
  );
}

export default Loginform;
