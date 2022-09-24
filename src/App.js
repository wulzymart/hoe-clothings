import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import ShopPage from "./pages/shop/shop_page";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up-page/sign-in-and-signup-page";
import { auth, createUserProfileDocument } from "./firebase/firebase";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="">
        <Header />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            exact
            path="/sign-in"
            element={
              this.props.currentUser ? (
                <Navigate to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}
const mapToStateProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapToStateProps, mapDispatchToProps)(App);
