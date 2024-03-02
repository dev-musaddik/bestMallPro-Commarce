import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './details-card.css'

const Details_Card = () => {
    const data =['Laptop Finnder', 'Raise Complain','Online Support', 'Servicing Center']
  return (
    <div className="details-card ">
      {
       data.map((data, index) =><Link to="/#" key={index}>
       <div className="item d-flex  text-center justify-content-center align-items-center ">
         <div className="icon">
         <FontAwesomeIcon icon={faShoppingCart} />
         </div>
         <div className="text-center">
           <h3>{data}</h3>
            </div>{" "}
       </div>
     </Link> )
      }
      
     
    </div>
  );
};

export default Details_Card;
