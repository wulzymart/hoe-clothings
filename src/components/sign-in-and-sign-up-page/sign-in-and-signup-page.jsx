import React from "react";
import SignIn from "../sign-in/sign-in";
import "./sign-in-and-signup-page.scss";
import SignUp from "../sign-up/sign-up";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInAndSignUpPage;
