import React from "react";
import { NavLink } from "react-router-dom";

const Login = ({
  user,
  setUser,
  error,
  setError,
  loginSubmit,
  loggedIn,
  setLoggedIn,
  validate,
  logginUser,
}) => {
  return (
    <>
      <form onSubmit={loginSubmit} className="w-50 ms-5 mt-3">
        <div className="mb-3 mt-3">
          <label htmlFor="exampleInputEmail1" className="form-label fs-5">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email address"
            onChange={(e) => {
              setUser({
                ...user,
                [e.target.name]: e.target.value,
              });
            }}
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label fs-5 mt-3"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password"
            onChange={(e) => {
              setUser({
                ...user,
                [e.target.name]: e.target.value,
              });
            }}
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>
        <button type="submit" className="btn btn-outline-primary w-100 mt-4">
          Submit
        </button>
        <div className="d-flex mt-3">
          <p className="me-4 mt-1">New User?</p>
          <NavLink to="/signup">
            <button className="btn btn-primary">Sign Up</button>
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default Login;
