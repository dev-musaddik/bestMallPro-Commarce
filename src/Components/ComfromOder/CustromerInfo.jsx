import React from 'react';

const CustomerInfo = () => {
  return (
    <div className="my-3">
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" id="firstName" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="mobile">Mobile</label>
            <input type="text" className="form-control" id="mobile" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
        </div>
    PaymentMethod    <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" className="form-control" id="city" />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea className="form-control" id="comment" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="form-control" id="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="zone">Zone</label>
          <input type="text" className="form-control" id="zone" value="Dhaka City" readOnly />
        </div>
      </form>
    </div>
  );
};

export default CustomerInfo;