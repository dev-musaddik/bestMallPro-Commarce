import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./card.css";
import productsData from "./data";
import MyContext from "../../ContextApi/myContext";
const Card = () => {
  const {data}=useContext(MyContext)
  // const or= data.split(" ").slice(0, 10).join(" ");
  // console.log(or)

  return (
    <div className="card  w-100 ">
      {data.slice(0,20).map((product,index) =>(
        <div key={index} className="card-container bg-light rounded">
        <div className="marks bg-danger text-light w-sm-25 w-lg-50  p-1 d-flex align-items-center">
          <h6 className="mb-0 pb-0 ">{product.badge}</h6>
        </div>
        <div className="item ">
          <div className="img d-flex justify-content-center">
            <img
              src={product.img}
              alt="this a image "
              className="img-fluid"
            />
          </div>
          <div className="text_area text-dark">
            <h6>
              <Link to={`/product/${product.key}`}>{product.name}</Link>
            </h6>
            <div className="price d-flex  w-100">
              <h6 className="offer-price mb-0">${product.price}</h6>
              <p className="regular-price mb-0 ">${product.price+2}</p>
            </div>
          </div>
        </div>
      </div>
      ))}
      
    </div>
  );
};

export default Card;
