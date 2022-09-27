import React from "react";
import "./checkout-item.scss";
import { connect } from "react-redux";
import {
  addItems,
  clearItemFromCart,
  removeItems,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="product" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItems(item)),
  removeItem: (item) => dispatch(removeItems(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
