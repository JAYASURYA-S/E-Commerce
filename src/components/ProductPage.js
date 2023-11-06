import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  addCartItem,
  deleteCartItem,
} from "../redux/reducers/cartSlice";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartBtn, setCartBtn] = useState("Add To Cart");
  const dispatch = useDispatch();

  const addProduct = (product) => {

    if (cartBtn === "Add To Cart") {
      dispatch(addCartItem(product));
      setCartBtn("Remove From Cart");
    } else {
      dispatch(deleteCartItem(product));
      setCartBtn("Add To Cart");
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  },[]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={150} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 my-auto">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bold">
            Ratings: {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addProduct(product)}
          >
            {cartBtn}
          </button>

          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go To Cart
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container my-3 px-5 py-2 shadow">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
