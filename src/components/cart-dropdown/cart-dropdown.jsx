import React from "react";
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>

    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
