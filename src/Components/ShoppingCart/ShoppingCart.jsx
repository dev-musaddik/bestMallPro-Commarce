import React, { useContext, useState } from "react";
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

const ShoppingCart = () => {
  const [voucherCode, setVoucherCode] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const { data, productQuantityManager } = useContext(MyContext);
  var cardItems = [];

  productQuantityManager.forEach((product) => {
    const matchingItem = data.find((item) => item.key === product.key);

    if (matchingItem) {
      const itemWithQuantity = {
        ...matchingItem,
        quantity: product.quantity,
      };
      cardItems = [...cardItems, itemWithQuantity];
    }
  });

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
    <div className="">
      <div className="navbar">
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
      <Container className="mt-4 mb-5 pb-5">
        <h2>Your Shopping Cart</h2>
        <ListGroup className="mt-3">
          {cardItems?.map((item, index) => (
            <ListGroupItem key={index}>
              <Row>
                <Col md={6}>
                  <strong>{item.name}</strong>
                </Col>

                <Col md={3}>
                  <div>Quantity: {item?.quantity}</div>
                </Col>
                <Col md={3}>
                  <div>Total: {item?.price * item.quantity}৳</div>
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
                  = ${
                      Array.isArray(item.price)
                        ? item.price.reduce((acc, total) => acc + total, 0) // Use reduce for arrays
                        : item.price * item.quantity // Handle the case when price is not an array
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
                {" "}= $
                {cardItems
                  .map((product) => {
                   return product.price*product.quantity
                  })
                  .reduce((total, productTotal) => total + productTotal, 0).toFixed(2)}
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
