import React, { useRef } from "react";
import Products_Card from "../../Components/Products_Card/Products_Card";
import NavbarC from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Products_Card_Page.css";
import { IoFilter } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import PriceRangeSlider from "../../Components/PriceRangeSlider/PriceRangeSlider";
import { useParams } from "react-router-dom";
const Products_Card_Page = () => {
  const filterRef = useRef();
  const { category } = useParams();

  const showFilterBar = () => {
    // Check if filterRef and filterRef.current are defined
    if (filterRef && filterRef.current) {
      filterRef.current.classList.toggle("responsive_filter");
    } else {
      console.error("filterRef or filterRef.current is undefined.");
    }
  };
  return (
    <div className="products-card  mb-5 pb-5">
      <NavbarC></NavbarC>
      <div className="products-card-header">
        <div className="sector ">
          <a href="/" className="mr-1">home</a>
          <a href={`/products/${category}`} className="mr-1">{`/products/${category}`}</a>
        </div>
        <div className="sector-items">
          rgb light , rgb mouse , rgb keyboard etc
        </div>
      </div>

      <div className="two-container d-flex ">
        <div className="filter-container  w-25  " ref={filterRef}>
          <div className="close-button">
            <IoMdCloseCircleOutline size={36} onClick={showFilterBar} />
          </div>
          <div className="price-range-container  p-3 ">
            <h3>Price Range</h3>
            <div className="range-input">
              <PriceRangeSlider></PriceRangeSlider>
            </div>
          </div>
          <div className="price-range-container  p-3 ">
            <h3>Price Range</h3>
            <div className="range-input">
              <PriceRangeSlider></PriceRangeSlider>
            </div>
          </div>
          <div className="price-range-container  p-3 ">
            <h3>Price Range</h3>
            <div className="range-input">
              <PriceRangeSlider></PriceRangeSlider>
            </div>
          </div>
          <div className="price-range-container  p-3 ">
            <h3>Price Range</h3>
            <div className="range-input">
              <PriceRangeSlider></PriceRangeSlider>
            </div>
          </div>
          <div className="price-range-container  p-3 ">
            <h3>Price Range</h3>
            <div className="range-input">
              <PriceRangeSlider></PriceRangeSlider>
            </div>
          </div>
        </div>
        <div className="products-card-container w-100">
          <div className="product-card-container-top">
            <div className="filter-bar bg-info w-100 mb-3 p-2">
              <h4
                className="bg-secondary text-light p-2"
                onClick={showFilterBar}
              >
                <IoFilter /> Filter
              </h4>
            </div>
          </div>

          <div className="product-card-items w-100">
            <Products_Card category={category}></Products_Card>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Products_Card_Page;
