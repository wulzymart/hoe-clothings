import React from "react";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button";
import "./collection-item.scss";

const CollectionItem = ({ item, addItems }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        onClick={() => {
          addItems(item);
        }}
        inverted
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};
const mapDispatchtoProps = (dispatch) => ({
  addItems: (item) => dispatch(addItems(item)),
});
export default connect(null, mapDispatchtoProps)(CollectionItem);
