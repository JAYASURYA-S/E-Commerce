import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let [id, setId] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value, id: id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(Math.floor(Math.random() * 1000));
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user")) || [];
    localStorage.setItem("user", JSON.stringify(userData));
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      setFormValues({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
      const userData = JSON.parse(localStorage.getItem("user")) || [];
      userData.push(formValues);
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Account Created Successfully...");
      navigate("/login");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const checkData = JSON.parse(localStorage.getItem("user")) || [];

    const usernameCheck = checkData.some((data) => {
      return data.username === values.username;
    });

    const emailCheck = checkData.some((data) => {
      return data.email === values.email;
    });
    if (!values.username) {
      errors.username = "Username is required!";
    } else if (usernameCheck) {
      errors.username = "Username already exist";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    } else if (emailCheck) {
      errors.email = "Email already exist";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (!values.confirmpassword.trim()) {
      errors.confirmpassword = "Confirm Password is Required";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Password doesn't match";
    }
    return errors;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-50 ms-5 mt-3">
        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label fs-5">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            className="form-control"
            id="exampleInput"
            placeholder="Enter Username"
            onChange={handleChange}
          />
          {formErrors.username && (
            <p style={{ color: "red" }}>{formErrors.username}</p>
          )}
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="signupEmail" className="form-label fs-5">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            className="form-control"
            id="signupEmail"
            aria-describedby="emailHelp"
            placeholder="Enter your email address"
            onChange={handleChange}
          />
          {formErrors.email && (
            <p style={{ color: "red" }}>{formErrors.email}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="signupPassword" className="form-label fs-5">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            className="form-control"
            id="signupPassword"
            placeholder="Enter your password"
            onChange={handleChange}
          />
          {formErrors.password && (
            <p style={{ color: "red" }}>{formErrors.password}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="signupConfirmPassword" className="form-label fs-5">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmpassword"
            value={formValues.confirmpassword}
            className="form-control"
            id="signupConfirmPassword"
            placeholder="Enter your confirm password"
            onChange={handleChange}
          />
          {formErrors.confirmpassword && (
            <p style={{ color: "red" }}>{formErrors.confirmpassword}</p>
          )}
        </div>
        <button type="submit" className="btn btn-outline-primary w-100 mt-3">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;
