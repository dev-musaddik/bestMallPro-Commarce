import React, { useContext } from "react";
import NavbarC from "../../Components/Navbar/Navbar";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../Components/Footer/Footer";
import { Button, Form } from "react-bootstrap";
import Details_Card from "../../Components/Details-Card/Details-Card";
import Card from "../../Components/Card/Card";
import data from '../../fakeData'
import MyContext from "../../ContextApi/myContext";
import Category_Card from "../../Components/Category_Card/Category_Card";
const Home = () => {

  return (
    <div
      id="home"
      className="home d-flex flex-column w-100 justify-content-center  mb-5 pb-5 "
    >
       {/* ------------------------------------------navbar------------------- */}
      <div className="nabvar">
        <NavbarC />
      </div>

      {/* ----------------------------banner-container------------ */}
      <div className="front-container  d-flex">
        <div className="slider-container mr-2   ">
          <Carousel data-bs-theme="dark" className="carousel">
            <Carousel.Item className="carousel-item">
              <img
                className="d-block w-100 img-fluid"
                src="https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-girl-receiving-parcel-home-banner-982x500.webp"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100 img-fluid"
                src="https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-girl-receiving-parcel-home-banner-982x500.webp"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit abet,consectetur advising elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-girl-receiving-parcel-home-banner-982x500.webp"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="search-container d-flex flex-column">
          <h3 className="p-2 text-info">Find Your Products. </h3>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button className="rounded-pill" variant="outline-primary">
              Search
            </Button>
          </Form>
        </div>
      </div>

      {/* ------------------------details-card--------------- */}
      <div className="details-card-home d-flex bg-dark  justify-content-center p-2">
      <Details_Card></Details_Card>
        
      </div>
      {/* ---------------------------------category-card------------------------------- */}
      <div className="category-section ">
        <Category_Card></Category_Card>
      </div>

      {/* -------------------------------------slider------------------------------------------------ */}
      <div class="sliding_text_wrap">
      <div class="bg-info rounded p-3">
          <p className="sliding_text">5th February Monday, our all outlets are open. Additionally, our online activities are open and operational.</p>
        </div>
      </div>

      {/* ---------------------------------------demo-card-------------- */}
      <div className="demo-card-home ">
      <Card></Card>

      </div>

      {/* -----------------footer------------------- */}
      <footer className="bg-danger  mt-0 p-2 pb-0">
        <Footer />
      </footer>

    </div>
  );
};

export default Home;
