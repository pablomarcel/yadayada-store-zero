import React from "react";
import {Elements} from "@stripe/react-stripe-js";
import {publishableKey} from "../stripe/config";
import {loadStripe} from "@stripe/stripe-js";
import PaymentDetails from "./PaymentDetails";

const stripePromise = loadStripe(publishableKey)

export default function Payment({subtotal, cart}){

  return(
    <Elements stripe={stripePromise}>

      <PaymentDetails
        subtotal={subtotal}
        cart={cart}

      />

    </Elements>
  )


}
