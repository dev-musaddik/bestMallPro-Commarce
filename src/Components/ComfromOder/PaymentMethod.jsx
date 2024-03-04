import React from 'react';

const PaymentMethod = () => {
  return (
    <div className="my-3">
      <form>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="paymentMethod" id="cashOnDelivery" value="Cash on Delivery" defaultChecked />
          <label className="form-check-label" htmlFor="cashOnDelivery">
            Cash on Delivery
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="paymentMethod" id="onlinePayment" value="Online Payment" />
          <label className="form-check-label" htmlFor="onlinePayment">
            Online Payment
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="paymentMethod" id="posOnDelivery" value="POS on Delivery" />
          <label className="form-check-label" htmlFor="posOnDelivery">
            POS on Delivery
          </label>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethod;
