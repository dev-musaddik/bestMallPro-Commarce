import React, { useContext, useEffect, useState } from "react";
import "./SingleProduct.css";
import NavbarC from "../Navbar/Navbar";
import { Modal, Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { useParams } from "react-router-dom";
// import MyContext from "../../ContextApi/MyContext";
import MyContext from "../../ContextApi/myContext";
import SpecificationTable from "../SpecificationTable/SpecificationTable";
import SideCard from "../SideCard/SideCard";

const SingleProduct = () => {
  const { key } = useParams();
  const { data, setProductQuantityManager, productQuantityManager } =
    useContext(MyContext);
  // console.log(data);
  const singleProductData = data.find((data) => data.key === key);
  const retaliateItems = data
    .filter((data) => data.category === singleProductData.category)
    .slice(0, 5);

  // Split the name into an array of words
  const wordsArray = singleProductData.name.split(" ");

  // Create an object to store word frequencies
  const wordCount = {};

  wordsArray.forEach((word) => {
    word = word.toLowerCase(); // Convert to lowercase to ensure case-insensitive counting
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  let first10Words; // Declare the variable outside the if-else blocks

  if (Object.keys(wordCount).length > 15) {
    first10Words = singleProductData.name?.split(" ").slice(0, 10).join(" ");
  } else {
    first10Words = singleProductData.name;
  }

  const [showPopup, setShowPopup] = useState(false);
  const [showPopupCart, setShowPopupCart] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState();

  const imgData = [
    "https://images-na.ssl-images-amazon.com/images/I/51VCP05020L._AC_US218_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/416TS-ODxfL._AC_US218_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61+-qmTKy8L._AC_US218_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51xI8gJTNYL._AC_US218_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41HNbRSKpfL._AC_US218_.jpg",
  ];
  const openPopup = (index) => {
    setSelectedImageIndex(index);
    setShowPopup(true);
  };
  const openPopupCart = () => {
    setShowPopupCart(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const closePopupCart = () => {
    setShowPopupCart(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imgData.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + imgData.length) % imgData.length
    );
  };
  // quantity
  const [quantity, setQuantity] = useState(1);
  // Save data to local storage whenever productQuantityManager changes
  useEffect(() => {
    localStorage.setItem(
      "productQuantityManager",
      JSON.stringify(productQuantityManager)
    );
  }, [productQuantityManager]);

  console.log(productQuantityManager);

  const addCart = (key, option) => {
    localStorage.setItem(
      "productQuantityManager",
      JSON.stringify(productQuantityManager)
    );
    switch (option) {
      case "plus":
        if (quantity < 10) {
          setQuantity((prevQuantity) => prevQuantity + 1);

          // Check if the key already exists in the array
          const existingIndex = productQuantityManager.findIndex(
            (item) => item.key === key
          );

          if (existingIndex !== -1) {
            // If key exists, update the quantity
            const updatedManager = [...productQuantityManager];
            updatedManager[existingIndex].quantity = quantity + 1;
            setProductQuantityManager(updatedManager);
          } else {
            // If key doesn't exist, add a new entry
            setProductQuantityManager((prevManager) => [
              ...prevManager,
              { key: key, quantity: quantity + 1 },
            ]);
          }
        }
        break;

      case "minus":
        if (quantity > 1) {
          setQuantity((prevQuantity) => prevQuantity - 1);

          const existingIndex = productQuantityManager.findIndex(
            (item) => item.key === key
          );

          if (existingIndex !== -1) {
            const updatedManager = [...productQuantityManager];
            updatedManager[existingIndex].quantity = quantity - 1;
            setProductQuantityManager(updatedManager);
          } else {
            setProductQuantityManager((prevManager) => [
              ...prevManager,
              { key: key, quantity: quantity - 1 },
            ]);
          }
        }
        break;
      case "buyNow":
        openPopupCart();

        const existingIndex = productQuantityManager.findIndex(
          (item) => item.key === key
        );

        if (existingIndex !== -1) {
          const updatedManager = [...productQuantityManager];
          updatedManager[existingIndex].quantity = quantity;
          setProductQuantityManager(updatedManager);
        } else {
          setProductQuantityManager((prevManager) => [
            ...prevManager,
            { key: key, quantity: quantity },
          ]);
        }

      default:
        break;
    }
  };

  // Render your component
  const specification = {
    basicInformation: {
      processor: "Intel Core i3-1215U (10M Cache, up to 4.40 GHz)",
      ram: "8GB DDR4 3200MHZ",
      graphicsCard: "Intel UHD Graphics",
      storage: "512GB SSD",
      monitor:
        "23.8 inch, diagonal, FHD (1920 x 1080), anti-glare, WLED-backlit, 250 nits, 72%NTSC",
      audio: "High-performance internal speaker",
      camera:
        "5 MP camera (pull-up) with integrated dual array digital microphones",
      networkWireless:
        "Integrated Realtek RTL8111HSH-CG GbE, RTL8821CE 802.11a/b/g/n/ac (1x1), Bluetooth 5.2",
      operatingSystem: "FreeDOS",
      securityManagement: "Standard security lock slot",
      inputDevices: "USB Keyboard, USB Mouse",
      opticalDrive: "DVD RW",
    },
    externalIOPorts: {
      rearPorts:
        "1 x power connector, 1 x RJ-45, 1 x HDMI 1.4, 1 x SuperSpeed USB Type-A 5Gbps signaling rate, 2 x USB Type-A 480Mbps signaling rate",
      sidePorts:
        "1 x headphone/microphone combo, 1 x SuperSpeed USB Type-A 5Gbps signaling rate, 1 x HDMI 1.4",
    },
    physicalDetails: {
      dimension: "54.06 x 18.37 x 41.9 cm",
      weight: "5.37 kg",
      color: "Jet Black",
      warranty: "",
    },
  };

  const websiteUrl = `http://localhost:5173/product/${key}`;
  return (
    <div className="single-product-section mt-0 pt-0">
      <div className="navbar-section">
        <NavbarC></NavbarC>
      </div>
      <div className="header-content">
        <a href="/" className="mr-1">
          home
        </a>
        <a
          href={`/products/${singleProductData.category}`}
          className="mr-1"
        >{`/products/${singleProductData.category}`}</a>
        <a href={`/product/${singleProductData.key}`} className="mr-1">
          /{singleProductData.key}
        </a>
      </div>
      <div className="product-details">
        <div className="product-top-option d-flex justify-content-between align-items-center border border-light rounded-5 p-2">
          <div className="share d-flex align-items-center pl-2">
            <p className="pb-0 mb-0 ">Share:</p>
            <div className="d-flex align-items-center pl-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  websiteUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark me-3"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(websiteUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-success"
              >
                <FaWhatsapp size={30} />
              </a>
            </div>
          </div>
          <div className="addCart pr-3">
            <button type="button" className="btn btn-primary">
              <BiCart size={20} className="me-2" />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="single-product-info mt-4 d-flex flex-column flex-lg-row ">
          <div className="image-info d-flex ">
            <img
              src={singleProductData.img}
              alt="single-product-image"
              className="img-fluid"
              onClick={() => openPopup(0)}
            />
            <div className="img-collection ">
              {imgData.map((Url, i) => (
                <img
                  onClick={() => openPopup(i)}
                  src={Url}
                  alt="url"
                  key={i}
                  className="img-fluid single-image-items p-2"
                />
              ))}
            </div>
          </div>
          <div className="about-product w-100">
            <div className="name">
              <h5 id="singleProductName" className="pb-2">
                {singleProductData.name}
              </h5>
            </div>
            <div className="price-status ">
              <table class="table">
                <tbody>
                  <tr>
                    <td>Price :</td>
                    <td>${singleProductData.price}</td>
                  </tr>
                  <tr>
                    <td>Regular Price :</td>
                    <td>${(singleProductData.price + 1.5).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Status :</td>
                    <td>
                      <span
                        className={`badge bg-${
                          singleProductData.stock ? "success" : "danger"
                        }`}
                      >
                        {singleProductData.stock
                          ? `In Stock (${singleProductData.stock})`
                          : "Out Of Stock"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Product Code:</td>
                    <td>{singleProductData.key}</td>
                  </tr>
                  <tr>
                    <td>Brand:</td>
                    <td>{singleProductData.seller}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="key-features w-100 d-flex flex-column">
              <h4 className="text-warning font-weight-bold">Key Features</h4>
              <ul className="">
                {singleProductData.features.map((features, key) => (
                  <li key={key} id="features">
                    {features.description}: {features.value}
                  </li>
                ))}
              </ul>

              <a href="#more info"></a>
            </div>
            <div className="buy-option">
              <div className="quantity">
                <button
                  className="btn btn-secondary w-25  p-2 "
                  onClick={() => addCart(`${singleProductData.key}`, "minus")}
                >
                  -
                </button>
                <input
                  type="text"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  value={quantity}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    if (/^\d*$/.test(newValue)) {
                      const numericValue = Math.max(
                        1,
                        Math.min(10, parseInt(newValue) || 1)
                      );
                      setQuantity(numericValue);
                    }
                  }}
                  className="w-25 p-2 text-center border-0 outline-0"
                />

                <button
                  className="btn btn-secondary w-25  p-2 "
                  onClick={() => addCart(`${singleProductData.key}`, "plus")}
                >
                  +
                </button>
              </div>
              <div className="buy w-75 d-flex justify-content-center mt-2">
                <button
                  className="btn btn-primary w-100 border-none p-2  "
                  onClick={() => addCart(`${singleProductData.key}`, "buyNow")}
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className="payment-option d-flex flex-column mt-2">
              <h3 className="text-info">Payment by</h3>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="cashOnDelivery"
                />
                <label className="form-check-label" htmlFor="cashOnDelivery">
                  Cash on delivery
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="nagad"
                />
                <label className="form-check-label" htmlFor="nagad">
                  Nagad
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="bkash"
                />
                <label className="form-check-label" htmlFor="bkash">
                  Bkash
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-information ">
        <div className="header-info w-100">
          <button className="btn btn-primary ">
            <a
              href="#specification"
              className="text-white text-decoration-none"
            >
              Specification
            </a>
          </button>
          <button className="btn btn-primary ">
            <a href="#description" className="text-white text-decoration-none">
              Description
            </a>
          </button>
          <button className="btn btn-primary ">
            <a href="#questions" className="text-white text-decoration-none">
              Questions
            </a>
          </button>
          <button className="btn btn-primary ">
            <a href="#review" className="text-white text-decoration-none">
              Reviews
            </a>
          </button>
        </div>

        <div className="details-info d-flex ">
          <div className="information">
            <div className="specification p-3" id="specification">
              <h3 className="m-0 font-weight-bold text-secondary p-3 pb-5">
                Specification
              </h3>
              <div className="d-flex w-100 specification-container p-2">
                <SpecificationTable
                  specification={specification}
                  className="w-100"
                />
              </div>
            </div>
            <div
              className="description w-100  my-5 p-3 border-0 rounded"
              id="description"
            >
              <h3>Description</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                fuga aliquid distinctio expedita accusamus consequuntur
                perferendis obcaecati deleniti aut laudantium ab facilis totam,
                ducimus dicta mollitia tenetur optio porro commodi eos quasi
                temporibus incidunt eaque id? Minima sed neque sunt Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quae mollitia fuga
                enim tempore quidem illo nisi ipsum, hic ad rem quaerat corrupti
                laboriosam obcaecati maxime. At aspernatur molestias nostrum,
                delectus aut ipsam, minus corrupti nemo dolorem excepturi
                reiciendis ratione sed quaerat placeat repellat magni
                exercitationem obcaecati. Modi temporibus rerum itaque atque
                eveniet laudantium dicta. Consectetur placeat pariatur incidunt
                minus dolor!
              </p>
            </div>
            <div
              className="Questions  my-5 p-3 border-0 rounded"
              id="questions"
            >
              <h3>Questions and Answers</h3>
            </div>
            <div className="reviews  my-5 p-3 border-0 rounded" id="review">
              <h3>Reviews (2)</h3>
            </div>
          </div>
          <div className="side-container">
            <div className="same-items">
              <h3 className="w-100 text-center text-secondary">
                Retaliate Items
              </h3>
              {retaliateItems.map((datas) => (
                <SideCard items={datas}></SideCard>
              ))}
            </div>
            <div className="recently-seen">
              <h3 className="w-100 text-center text-secondary">
                Recently View
              </h3>
              <SideCard></SideCard>
              <SideCard></SideCard>
              <SideCard></SideCard>
            </div>
          </div>
        </div>
      </div>
      <div className="footer ">
        <Footer></Footer>
      </div>
      {/* Popup for images  */}
      <Modal show={showPopup} onHide={closePopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>{first10Words}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center ">
          <img
            src={imgData[selectedImageIndex]}
            alt={`Popup Image ${selectedImageIndex + 1}`}
            className="img-fluid"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={prevImage}>
            Previous
          </Button>
          <Button variant="primary" onClick={nextImage}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Popup for cart success  */}
      <Modal
        show={showPopupCart}
        onHide={closePopupCart}
        centered
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="">
              You have added{" "}
              <span>
                <a href={`/product/${singleProductData.key}`}>
                  {singleProductData.name}
                </a>
              </span>{" "}
              to your shopping cart!
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center ">
          <div className="container border text-secondary font-weight-bold  p-3">
            <div className="quantity d-flex justify-content-between border-bottom p-2">
              <span>Cart quantity:</span>
              <span>{productQuantityManager.length}</span>
            </div>
            <div className="product-price d-flex justify-content-between p-2">
              <span>Cart Total:</span>
              <span>
                {productQuantityManager
                  .map((product) => {
                    const matchedProduct = data.find(
                      (item) => item.key === product.key
                    );
                    console.log(matchedProduct.price);

                    if (matchedProduct) {
                      // Assuming 'wholePrice' is the property containing the price of the product
                      const totalPrice =
                        matchedProduct.price * product.quantity;
                      return totalPrice;
                    }

                    return 0; // If the product is not found or price is not an array, consider its total price as 0
                  })
                  .reduce((total, productTotal) => total + productTotal, 0)}
              </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="container d-flex  justify-content-end">
          <a className="text-light  text-decoration-none" href="/shopping-cart">
          <button className="btn btn-primary mr-4 "  onClick={() => addCart(`${singleProductData.key}`, "buyNow")}>View Cart</button>

          </a>
            <button className=" btn btn-outline-primary">Confirm Order</button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SingleProduct;
