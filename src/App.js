import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop_page";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up-page/sign-in-and-signup-page";
import { auth, createUserProfileDocument } from "./firebase/firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({
        currentUser: userAuth,
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/sign-in" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
