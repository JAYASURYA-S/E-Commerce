import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addCartItem,
  cartItem,
  deleteCartItem,
  removeCartItem,
} from "../redux/reducers/cartSlice";

const Cart = () => {
  const state = useSelector(cartItem);
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(state);

  const removeCart = (item) => {
    dispatch(removeCartItem(item));
  };

  const addCount = (item) => {
    dispatch(addCartItem(item));
  };

  const removeCount = (item) => {
    dispatch(deleteCartItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => removeCart(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">
                {cartItem.qty} X ${cartItem.price} = ${" "}
                {cartItem.qty * parseInt(cartItem.price)}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => removeCount(cartItem)}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => addCount(cartItem)}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3 className="text-center">Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-dark mb-5 w-25 mx-auto"
          >
            Proceed To checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
