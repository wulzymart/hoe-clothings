import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Lmij0LEPC4HFl5NtQP74ZCTophKnxhHtdFz8RmexCbXFdbZwePpuIcsoTFZOY5Opaqc7W9HIEURXZOVRvsyc3fR00NeXidCq3";
  return (
    <StripeCheckout
      name="hoe-clothings"
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
