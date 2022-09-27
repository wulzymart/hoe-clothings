import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe/stripe-button";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <div className="total"> TOTAL: ${total}</div>
    <div className="test-warning">
      *Please use the following test card details for payment
      <br />
      4242 4242 4242 4242 01/23 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);
const mapToStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapToStateToProps)(CheckoutPage);
