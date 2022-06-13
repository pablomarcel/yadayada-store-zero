import React from "react";
import { cardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import {useNavigate} from "react-router";
import { apiInstance} from "../Utils";


export default function CheckoutForm(
  {
  setName,
  setStreet,
  setCity,
  setState,
  setCode,
  setCountry,
  handleForm,
  subtotal
                                     }
                                     ){

  const stripe = useStripe()
  const elements = useElements()
  const history = useNavigate()



  return(

    <form onSubmit={handleForm} id="bnb-form">
      <div className="form-group mb-2">
        <label htmlFor="name">Name</label>
        <input
          required
          id="name"
          name="name"
          // value={title}
          onChange={(event)=> setName(event.target.value)}
          className="form-control"
          type="text"
          placeholder=""
          // pattern="^\w+\s*\w+$"
          pattern="/^[A-Za-z\x{00C0}-\x{00FF}][A-Za-z\x{00C0}-\x{00FF}\'\-]+([\ A-Za-z\x{00C0}-\x{00FF}][A-Za-z\x{00C0}-\x{00FF}\'\-]+)*/u"

        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="street">Street</label>
        <input
          required
          id="street"
          name="street"
          onChange={(event)=> setStreet(event.target.value)}
          className="form-control"
          type="text"
          placeholder=""
          // pattern="^\w+\s*\w+$"
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="city">City</label>
        <input
          required
          id="city"
          name="city"
          onChange={(event)=> setCity(event.target.value)}
          className="form-control"
          type="text"
          placeholder=""
          // pattern="\d{1,}"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="state">State</label>
        <input
          required
          id="state"
          name="state"
          onChange={(event)=> setState(event.target.value)}
          className="form-control"
          type="text"
          placeholder=""
          // pattern="\d{1,}"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="code">Postal Code</label>
        <input
          required
          id="code"
          name="code"
          onChange={(event)=> setCode(event.target.value)}
          className="form-control"
          type="text"
          placeholder=""
          // pattern="\d{1,}"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="country">Country</label>
        <input
          required
          id="country"
          name="country"
          onChange={(event)=> setCountry(event.target.value)}
          className="form-control"
          type="text"
          // placeholder=""
          // pattern="\d{1,}"
        />
      </div>
      <br/>

      {/*insert Stripe Component Pay Now Here In Place of the Default Submit Button*/}

      <div className="form-group mb-2">
        <input
          id="submit"
          className="btn btn-primary"
          type="submit"
          value="Submit Form"
          style={{
            backgroundColor: "#009688",
            border:"none"
          }}

        />
      </div>
    </form>


  )

}
