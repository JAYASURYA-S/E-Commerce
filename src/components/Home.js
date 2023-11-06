import React from "react";
import Products from "./Products";
import { useParams } from "react-router-dom";

const Home = () => {

  return (
    <>
      <div className="home">
        <div className="card bg-dark text-white border-0">
          <img
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="card-img"
            alt="backgroud"
            height="550px"
          />
          <div className="card-img-overlay">
            <div className="container">
              <h5 className="card-title display-4 fw-bold mb-0">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>
        
        <Products />
      </div>
    </>
  );
};

export default Home;
