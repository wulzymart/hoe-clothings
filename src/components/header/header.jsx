import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import "./header.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
const mapToStateProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapToStateProps)(Header);
