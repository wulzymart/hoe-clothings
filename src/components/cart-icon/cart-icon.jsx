import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import "./cart-icon.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const CartIcon = ({ toggleCartHidden, ItemsCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{ItemsCount}</span>
  </div>
);
const mapStateToProps = (state) => ({
  ItemsCount: selectCartItemsCount(state),
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
