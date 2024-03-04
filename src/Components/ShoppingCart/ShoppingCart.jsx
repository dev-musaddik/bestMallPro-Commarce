import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import NavbarC from "../Navbar/Navbar";
import MyContext from "../../ContextApi/myContext";
import "./ShoppingCart.css";

import ShoppingCartQuantity from "./ShoppingCartQuantity";

const ShoppingCart = () => {
  const [voucherCode, setVoucherCode] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const { data, productQuantityManager,cardItems,setCardItems } = useContext(MyContext);
  
useEffect(() => {
  // Create an array to store the updated card items
  const updatedCardItems = [];

  productQuantityManager.forEach((product) => {
    const matchingItem = data.find((item) => item.key === product.key);

    if (matchingItem) {
      const itemWithQuantity = {
        ...matchingItem,
        quantity: product.quantity,
      };
      updatedCardItems.push(itemWithQuantity);
    }
  });

  // Update the cardItems state once, outside the loop
  setCardItems(updatedCardItems);
}, [data, productQuantityManager]);


  console.log(cardItems);

  var total = 0;

  const onApplyVoucher = () => {
    console.log("Voucher code applied:", voucherCode);
  };

  const onApplyCoupon = () => {
    console.log("Coupon code applied:", couponCode);
  };

  const onConfirmOrder = () => {
    console.log("Confirm order clicked");
  };

  return (
    <div className="mt-0">
      <div className="navbar-sec mt-0 pt-0">
        <NavbarC />
      </div>
      <div className="header-content">
        <a href="/" className="mr-1">
          home
        </a>

        <a href={`/shopping-cart`} className="mr-1">
          / product /shopping-cart
        </a>
      </div>
      <Container className="mt-4 mb-5 pb-5 shopping-cart">
        <h2>Your Shopping Cart</h2>
        <ListGroup className="mt-3">
          {cardItems?.map((item, index) => (
            <ListGroupItem key={index}>
              <Row className="d-flex justify-content-center align-items-center">
                <Col md={2} className="d-flex justify-content-center align-items-center">
                <img src={item.img} className="img-fluid w-50 " alt="" />

                </Col>
                <Col md={10} className="d-flex">
                  <a href={`/product/${item.key}`} className="text-decoration-none text-warning">{item.name}</a>
                </Col>

               
              </Row>
              <Row className="d-flex justify-content-center">
              <Col md={6} className="d-flex flex-column align-items-start">
                  <div className="quantity-input d-flex align-items-center justify-content-between w-25 text-secondary">
                    <div className="font-weight-bold">Quantity: {item?.quantity}</div>
                  </div>
                  <div className="update-quantity ">
                 <ShoppingCartQuantity Itemkey={item.key} quantity={item.quantity}  />

                  </div>
                </Col>
                <Col md={6}>
                  <div className="font-weight-bold">Total: {(item?.price * item.quantity).toFixed(2)}৳</div>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
        <ListGroup className="mt-3">
          <ListGroupItem>
            <Row>
              <Col md={6}>
                <strong>Sub-Total:</strong>
              </Col>
              <Col md={6}>
                {cardItems.map((item, index) => (
                  <div key={index}>
                    = $
                    {
                     ( Array.isArray(item.price)
                        ? item.price.reduce((acc, total) => acc + total, 0) // Use reduce for arrays
                        : item.price * item.quantity // Handle the case when price is not an array
                        ).toFixed(2) 
                    }
                  </div>
                ))}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col md={6}>
                <strong>Total:</strong>
              </Col>
              <Col md={6}>
                {" "}
                = $
                {cardItems
                  .map((product) => {
                    return product.price * product.quantity;
                  })
                  .reduce((total, productTotal) => total + productTotal, 0)
                  .toFixed(2)}
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
        <div className="mt-3">
          <Form.Group controlId="voucherCode">
            <Form.Label>Apply Voucher:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter voucher code"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="couponCode" className="mt-2">
            <Form.Label>Apply Coupon:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={onApplyVoucher} className="mt-2">
            Apply Voucher
          </Button>{" "}
          <Button
            variant="secondary"
            onClick={onApplyCoupon}
            className="ml-2 mt-2"
          >
            Apply Coupon
          </Button>{" "}
          <Button
            variant="success"
            onClick={onConfirmOrder}
            className="ml-2 float-right mt-2"
          >
            Confirm Order
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ShoppingCart;
