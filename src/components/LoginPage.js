import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
const LoginPage = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    
      const [username, setUsername] = useState("");
      const [loggedIn, setLoggedIn] = useState(false);
    
      const navigate = useNavigate();
    
      const [error, setError] = useState({});
    
      const loginSubmit = (e) => {
        e.preventDefault();
        setError(validate(user));
        const checkData = JSON.parse(localStorage.getItem("user")) || [];
        const isDetailsExist = checkData.find((data) => {
          return data.email === user.email && data.password === user.password;
        });
        console.log(isDetailsExist);
        if (isDetailsExist) {
          // alert("success");
          setLoggedIn(true);
          setUsername(isDetailsExist.username);
          
          console.log(isDetailsExist.id);
          // <NavLink to={`/products`}></NavLink>
        //   <NavLink to="/home"></NavLink>
        navigate("/")
        }
      };
    
      const validate = (user) => {
        let error = {};
        const checkData = JSON.parse(localStorage.getItem("user")) || [];
    
        const emailCheck = checkData.some((data) => {
          return data.email === user.email;
        });
    
        const passwordCheck = checkData.some((data) => {
          return data.email === user.email && data.password === user.password;
        });
        if (!user.email.trim()) {
          error.email = "Email is Required";
        } else if (!emailCheck) {
          error.email = "Invalid Email";
        }
    
        if (!user.password.trim()) {
          error.password = "Password is Required";
        } else if (user.password.length < 8) {
          error.password = "Password needs to be 8 or more characters";
        } else if (!passwordCheck) {
          error.password = "Invalid Credentials";
        }
    
        return error;
      };
  return (
    <>
    <button
            type="button"
            className="btn btn-outline-dark"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            <i className="fa fa-sign-in me-1 loginBtn"></i> Login
          </button>

          <div
            className="modal fade"
            id="loginModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Login
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <button className="btn btn-primary w-100 mb-4">
                    <span className="fa fa-google me-2"></span> Sign in with
                    Google
                  </button>

                  <button className="btn btn-primary w-100 mb-4">
                    <span className="fa fa-facebook me-2"></span> Sign in with
                    Facebook
                  </button>

                  <form onSubmit={loginSubmit}>
                    <div className="mb-3 mt-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label fs-5"
                      >
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
                      {error.email && (
                        <p style={{ color: "red" }}>{error.email}</p>
                      )}
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
                      {error.password && (
                        <p style={{ color: "red" }}>{error.password}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-primary w-100 mt-4"
                    >
                      Submit
                    </button>          
                  </form>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default LoginPage