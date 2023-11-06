import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import { cartItem } from "../redux/reducers/cartSlice";
import Login from "./Login";
import Signup from "./Signup";

const Navbar = ({loggedIn,username,loginid,logoutsubmit}) => {

  const state = useSelector(cartItem);
  const {id} = useParams()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            LATEST COLLECTION
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            {loggedIn ? <div>            
              <NavLink to={`/profile/${loginid}`}>
                <button className="btn btn-outline-dark">
                <i className="fa fa-solid fa-user me-1"></i>{username}
                </button>
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})
              </NavLink>         
              <button className="btn btn-outline-dark ms-2" onClick={logoutsubmit}>
                  <i className="fa fa-solid fa-xmark"></i>Log Out
                </button>
            </div> 
            : 
            <div className="buttons">
              <NavLink to="/login">
                <button className="btn btn-outline-dark me-2">
                  <i className="fa fa-sign-in me-1 loginBtn"></i>Log In
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="btn btn-outline-dark">
                  <i className="fa fa-user-plus me-1"></i>Sign up
                </button>
              </NavLink>              
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})
              </NavLink>
            </div>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
