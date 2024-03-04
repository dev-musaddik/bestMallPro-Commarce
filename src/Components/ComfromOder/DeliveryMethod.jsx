import React, { useContext, useEffect, useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Table,
} from "react-bootstrap";
import MyContext from "../../ContextApi/myContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarC from "../Navbar/Navbar";

const FormComponent = () => {
  const { productQuantityManager, data } = useContext(MyContext);
  //   console.log(productQuantityManager);
  const [orderSummary, setOrderSummary] = useState();
  const [orderSummarySubmit, setOrderSummarySubmit] = useState([]);

  //   ----------------------get payment option
  const [paymentMethod, setPaymentMethod] = useState("");
  console.log(paymentMethod);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.id);
  };

  //------------------------get delivery method
  const [deliveryMethod, setDeliveryMethod] = useState("");

  const handleDeliveryMethodChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  // ------------------------------get Zone city ---------------
  const [selectedZone, setSelectedZone] = useState("");

  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value);
  };
  console.log(selectedZone);

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
    setOrderSummary(updatedCardItems);
  }, [data, productQuantityManager]);
console.log(orderSummary)

//   -------------------------------------from SubmitEvent----------
  const handleSubmit = (e) => {
    e.preventDefault();
  console.log('click submit')
    if (!selectedZone || !deliveryMethod || !paymentMethod) {
        let errorMessage = '';
        if (!selectedZone) {
          errorMessage = 'Zone';
        } else if (!deliveryMethod) {
          errorMessage = 'Delivery Method';
        } else if (!paymentMethod) {
          errorMessage = 'Payment Method';
        }
  
        toast.error(`Please select a ${errorMessage}`);
        return;
      }
     else {
        const formData = new FormData(e.target);

        const summary = {
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          address: formData.get("address"),
          city: formData.get("city"),
          mobile: formData.get("mobile"),
          email: formData.get("email"),
          zone: formData.get("zone"),
          paymentMethod: formData.get("paymentMethod"),
          deliveryMethod: formData.get("deliveryMethod"),
          voucher: formData.get("voucher"),
        };
        
        const data = {
          paymentMethod: paymentMethod,
          deliveryMethod: deliveryMethod,
          zone: selectedZone,
        };
        
        setOrderSummarySubmit({...summary, ...data, orderSummary});
      toast.success('successfully')
    }
  };
  console.log(orderSummarySubmit);

  return (
   <div className="checkout">
    <div className="navbar-sec mb-5 pb-5">
      <NavbarC></NavbarC>
    </div>
    <Container className="mb-5 mb-5">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Label>First Name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="firstName"
              required
            />
          </Col>
          <Col>
            <Form.Label>Last Name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="lastName"
            />
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            required
          />
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Form.Label>City*</Form.Label>
            <Form.Control type="text" placeholder="Enter city" name="city" />
          </Col>
          <Col>
            <Form.Label>Mobile/Telephone*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter mobile number"
              name="mobile"
              required
            />
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-Mail*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="zone">
          <Form.Label>Zone</Form.Label>
          <Form.Select
            defaultValue="Choose..."
            required
            onChange={handleZoneChange}
          >
            <option>Choose...</option>
            <option>Dhaka</option>
            <option>Dhaka City 2</option>
            <option>Chittagong</option>
            <option>Rajshahi</option>
            <option>Khulna</option>
            <option>Barisal</option>
            <option>Rangpur</option>
            <option>Sylhet</option>
            <option>Comilla</option>
            <option>Cox's Bazar</option>
            <option>Bogra</option>
            <option>Satkhira</option>
            <option>Mymensingh</option>
            <option>Faridpur</option>
            <option>Jessore</option>
            <option>Natore</option>
            <option>Jamalpur</option>
            <option>Tangail</option>
            <option>Moulvibazar</option>
            <option>Pabna</option>
            <option>Feni</option>
            <option>Khagrachari</option>
            <option>Patuakhali</option>
            <option>Narail</option>
            <option>Joypurhat</option>
            <option>Kushtia</option>
            <option>Sirajganj</option>
            <option>Narsingdi</option>
            <option>Kishoreganj</option>
            {/* Continue adding all 64 districts */}
            <option>Chapainawabganj</option>
            <option>Lakshmipur</option>
            <option>Rangamati</option>
            <option>Thakurgaon</option>
            <option>Madaripur</option>
            <option>Gaibandha</option>
            <option>Bagerhat</option>
            <option>Jhalokathi</option>
            <option>Lalmonirhat</option>
            <option>Kurigram</option>
            <option>Sherpur</option>
            <option>Chandpur</option>
            <option>Shariatpur</option>
            <option>Netrokona</option>
            <option>Magura</option>
            <option>Habiganj</option>
            <option>Meherpur</option>
            <option>Narayanganj</option>
            <option>Sunamganj</option>
            <option>Bhola</option>
            <option>Laxmipur</option>
            <option>Chuadanga</option>
            <option>Nilphamari</option>
            <option>Satkhira</option>
            <option>Manikganj</option>
            <option>Bandarban</option>
            <option>Khulna</option>
            <option>Chapainawabganj</option>
            <option>Kurigram</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="paymentMethod">
          <Form.Label>Payment Method</Form.Label>
          <Form.Check
            type="radio"
            label="Cash on Delivery"
            name="paymentMethod"
            id="cashOnDelivery"
            onChange={handlePaymentMethodChange}
            checked={paymentMethod === "cashOnDelivery"}
          />
          <Form.Check
            type="radio"
            label="Online Payment"
            name="paymentMethod"
            id="onlinePayment"
            onChange={handlePaymentMethodChange}
            checked={paymentMethod === "onlinePayment"}
          />
          <Form.Check
            type="radio"
            label="POS on Delivery"
            name="paymentMethod"
            id="posOnDelivery"
            onChange={handlePaymentMethodChange}
            checked={paymentMethod === "posOnDelivery"}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="deliveryMethod">
          <Form.Label className="text-info font-weight-bold">
            Delivery Method
          </Form.Label>
          <Form.Check
            type="radio"
            label="Home Delivery - 60tk / 120tk"
            name="deliveryMethod"
            id="homeDelivery"
            value={`Home Delivery (${selectedZone})`}
            onChange={handleDeliveryMethodChange}
            checked={deliveryMethod === "Home Delivery - 60tk"}
          />
          <Form.Check
            type="radio"
            label="Store Pickup"
            name="deliveryMethod"
            id="storePickup"
            value="Store Pickup"
            onChange={handleDeliveryMethodChange}
            checked={deliveryMethod === "Store Pickup"}
          />
          <Form.Check
            type="radio"
            label="Request Express - Charge Applicable"
            name="deliveryMethod"
            id="requestExpress"
            value="Request Express - Charge Applicable"
            onChange={handleDeliveryMethodChange}
            checked={deliveryMethod === "Request Express - Charge Applicable"}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="voucher">
          <Form.Label>Apply Voucher</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter voucher code"
            name="voucher"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Confirm Order
        </Button>
      </Form>

      {orderSummary && (
        <div className="container mt-5 mb-0">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {orderSummary.map((item) => (
                <tr key={item.key}>
                  <td>{item.name}</td>
                  <td>
                    {item.price} * {item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Container className="d-flex flex-column border py-3 my-0 align-items-end justify-content-end w-100">
            <div className="sub-total w-75 d-flex justify-content-between">
              <strong>Sub-Total:</strong>
              <strong>
                {orderSummary
                  .map((items) => items.price)
                  .reduce((acc, total) => acc + total, 0)
                  .toFixed(2)}
              </strong>
            </div>
            <div className="delivery w-75 d-flex justify-content-between">
              <strong>
                {deliveryMethod ? deliveryMethod : "Home Delivery"}
              </strong>
              <strong>
                {selectedZone === "Dhaka" &&
                deliveryMethod === `Home Delivery (${selectedZone})`
                  ? 60
                  : deliveryMethod === "Store Pickup" ||
                    deliveryMethod === "Request Express - Charge Applicable"
                  ? 0
                  : 120}{" "}
                tk
              </strong>
            </div>
            <div className="total w-75 d-flex justify-content-between mb-5 pb-5">
              <strong>Order Total:</strong>
              <strong>
                {(
                  orderSummary
                    .map((items) => items.price)
                    .reduce((acc, total) => acc + total, 0) +
                  (selectedZone === "Dhaka" &&
                  deliveryMethod === "Home Delivery (Dhaka)"
                    ? 60
                    : deliveryMethod === "Store Pickup" ||
                      deliveryMethod === "Request Express - Charge Applicable"
                    ? 0
                    : 120)
                ).toFixed(2)}{" "}
                tk
              </strong>
            </div>
          </Container>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={5000} />
    </Container>
   </div>
  );
};

export default FormComponent;
