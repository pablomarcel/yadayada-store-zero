import React, {useState} from "react";
import {cardElement, useStripe, useElements, CardElement} from "@stripe/react-stripe-js";
import {useNavigate} from "react-router";
import { apiInstance} from "../Utils";
import {Button} from "@mui/material";

const initialAddressState = {
  street:'',
  city:'',
  state:'',
  code:'',
  country:''
}

export default function PaymentDetails({subtotal, cart}){

  const [name, setName]= useState("")
  const [street, setStreet]= useState("")
  const [city, setCity]= useState("")
  const [state, setState]= useState("")
  const [code, setCode]= useState("")
  const [country, setCountry]= useState("")
  const [billingAddress, setBillingAddress] = useState({...initialAddressState})
  const [shippingAddress, setShippingAddress] = useState({...initialAddressState})
  const navigate = useNavigate()
  const stripe = useStripe()
  const elements = useElements()
  const total = subtotal

  const handleForm = async e => {

    // gets the element entity that triggered the event, in this case the form.

    e.preventDefault()
    const cardElement = elements.getElement('card')

    apiInstance.post('/payments/create',{
      amount: total*100,
      shipping: {
        name: name,
        address: {
          ...shippingAddress
        }
      }
    }).then(({data: clientSecret}) =>{
      stripe.createPaymentMethod({
        type:'Card',
        card: cardElement,
        billing_details:{
          name:name,
          address:{
            ...billingAddress
          }
        }
      }).then(({paymentMethod})=>{

        // payment_method is defined but never used???

        // payment_method: paymentMethod.id
        paymentMethod.id


      }).then(({paymentIntent})=>{
        const configOrder = {
          orderTotal: total,
          orderItems: cart.map(item=>{
            const { name, price, description, image } = item

            return{
              name,
              price,
              description,
              image
            }
          })
        }
        // supposed to do something here?

        const target = e.target
        console.log('form button clicked')

        setName("")
        setStreet("")
        setCity("")
        setState("")
        setCode("")
        setCountry("")
        setBillingAddress({...initialAddressState})
        setShippingAddress({...initialAddressState})
        target.reset()
        navigate("/")

      })
    })
  }

  const configCardElement = {
    iconStyle: 'solid',
    style: {
      base: {
        fontSize: '16px'
      }
    },
    hidePostalCode: true
  }


  return(
    <div>

      <form onSubmit={handleForm} id="bnb-form">

        <h2>
          Shipping Address
        </h2>
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

        <h2>
          Billing Address
        </h2>
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
        <div>
          <h2>
            Card Details
          </h2>
          <CardElement
            options={configCardElement}
          />
        </div>

        <Button
          type="submit">Pay Now</Button>




        {/*<div className="form-group mb-2">*/}
        {/*  <input*/}
        {/*    id="submit"*/}
        {/*    className="btn btn-primary"*/}
        {/*    type="submit"*/}
        {/*    value="Submit Form"*/}
        {/*    style={{*/}
        {/*      backgroundColor: "#009688",*/}
        {/*      border:"none"*/}
        {/*    }}*/}

        {/*  />*/}
        {/*</div>*/}
      </form>


    </div>





  )
}
