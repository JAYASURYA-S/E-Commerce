import React from "react";
import { useSelector } from "react-redux";
import { cartItem } from "../redux/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const state = useSelector(cartItem);
  const navigate = useNavigate();
  var total = 0;
  const itemList = (item) => {
    total = total + item.qty * parseInt(item.price);
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm" key={item.id}>
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <div>
          <p className="text-muted">
            ${item.qty * parseInt(item.price)}
          </p>
        </div>
      </li>
    );
  };

  const placeorder = () => {
    alert("Order Placed...!!!");
    navigate("/");
  }

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {state.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${total}</strong>
              </li>
            </ul>
            <button className="btn btn-primary w-100 mt-3" onClick={placeorder}>Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
