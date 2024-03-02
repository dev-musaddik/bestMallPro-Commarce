import React, { useContext } from "react";
import "./Products_Card.css";
import MyContext from "../../ContextApi/myContext";
import { Link } from "react-router-dom";
const Products_Card = ({category}) => {
  category=category.toLowerCase();
  const { data } = useContext(MyContext);
  var categoryData=data.filter(data=>data.category===category)
  if(categoryData.length===0){
    categoryData=false
  }
  console.log(categoryData.length)
  console.log(data);
  const shortName = (value) => {
    const wordCount = {};
    const wordsArray = value.split(' ');
  
    wordsArray.forEach((word) => {
      word = word.toLowerCase(); // Convert to lowercase to ensure case-insensitive counting
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
  
    let first10Words; // Declare the variable outside the if-else blocks
  
    if (Object.keys(wordCount).length > 15) {
      return value.split(' ').slice(0, 8).join(' ');
    } else {
      return value;
    }
  };
  
  return (
    <div className="main-card-container">

      {categoryData?
      categoryData.map((product, index) => (
        <div className="product-card-container" key={index}>
          <div className="img-section d-flex justify-content-center">
            <img src={product.img} alt="this a image " className="img-fluid" />
          </div>
          <div className="name-features-section">
            <div className="name">
              <Link to={`/product/${product.key}`}>{shortName(product.name)}</Link>
            </div>
            <div className="features mt-4">
              <ul>
                {product.features?.map((data, index) => (
                  <li key={index}>
                    {data?.description}: {data?.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card-bottom-section d-flex flex-column  justify-content-center mt-3">
            <h4 className="price text-center text-danger">${product.price}</h4>
            <button className="btn btn-primary buy-btn mb-2">Buy Now</button>
            <button className="add-cart-btn btn btn-outline-secondary">
              Add To Cart
            </button>
          </div>
        </div>
      ))
    :<>
    <div className="text-center d-flex flex-column bg-warning w-100">
      <h1>this product is not available now!</h1>
      <h5><a href="/">go back</a></h5>
    </div>
    
    </>
    }
    </div>
  );
};

export default Products_Card;
