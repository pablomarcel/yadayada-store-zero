import React, {useState} from "react";
import {useStripe, useElements, CardElement} from "@stripe/react-stripe-js";
import {useNavigate} from "react-router";
import { apiInstance} from "../Utils";
import {Button} from "@mui/material";

const initialAddressState = {
  line1:'',
  city:'',
  state:'',
  postal_code:'',
  country:''
}

export default function PaymentDetails({subtotal, cart, setCart, setSubtotal}){

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

  const handleShipping = e =>{
    const {name, value } = e.target
    setShippingAddress({
      ...shippingAddress,
      [name]:value
    })
  }

  const handleBilling = e =>{
    const {name, value } = e.target
    setBillingAddress({
      ...billingAddress,
      [name]:value
    })
  }

  const handleForm = async e => {

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
        type:"card",
        card: cardElement,
        billing_details:{
          name:name,
          address:{
            ...billingAddress
          }
        }
      }).then(({paymentMethod})=>{
        stripe.confirmCardPayment(clientSecret,{
          payment_method: paymentMethod.id
        }).then(({paymentIntent})=> {
          const configOrder = {
            orderTotal: total,
            orderItems: cart.map(item => {
              const {name, price, description, image} = item

              return {
                name,
                price,
                description,
                image
              }
            })
          }

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
          setCart([])
          setSubtotal(0)
          navigate("/")
        })
      })
    })

  }

  const configCardElement = {
    iconStyle: 'solid',
    style: {
      base: {
        fontSize: '18px'
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
            placeholder="John Doe"
            // pattern="^\w+\s*\w+$"

          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="line1">line1</label>
          <input
            required
            id="line1"
            name="line1"
            value={shippingAddress.line1}
            // onChange={(event)=> setStreet(event.target.value)}
            onChange={e=>handleShipping(e)}
            className="form-control"
            type="text"
            placeholder="123 Infinite Loop"
            // pattern="^\w+\s*\w+$"
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="city">City</label>
          <input
            required
            id="city"
            name="city"
            value={shippingAddress.city}
            // onChange={(event)=> setCity(event.target.value)}
            onChange={e=>handleShipping(e)}
            className="form-control"
            type="text"
            placeholder="Sun City"
            // pattern="\d{1,}"
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="state">State</label>
          <input
            required
            id="state"
            name="state"
            value={shippingAddress.state}
            // onChange={(event)=> setState(event.target.value)}
            onChange={e=>handleShipping(e)}
            className="form-control"
            type="text"
            placeholder="WA"
            pattern="^[A-Z]{2}$"
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="postal_code">Postal Code</label>
          <input
            required
            id="postal_code"
            name="postal_code"
            value={shippingAddress.postal_code}
            // onChange={(event)=> setCode(event.target.value)}
            onChange={e=>handleShipping(e)}
            className="form-control"
            type="text"
            placeholder="98000"
            // pattern="\d{1,}"
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="country">Country</label>
          <input
            required
            id="country"
            name="country"
            value={shippingAddress.country}
            onChange={e=>handleShipping(e)}
            // onChange={(event)=> setCountry(event.target.value)}
            className="form-control"
            type="text"
            placeholder="US"
            pattern="^[A-Z]{2}$"
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
            placeholder="John Doe"
            // pattern="^\w+\s*\w+$"

          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="line1">line1</label>
          <input
            required
            id="line1"
            name="line1"
            value={billingAddress.line1}
            // onChange={(event)=> setStreet(event.target.value)}
            onChange={e=>handleBilling(e)}
            className="form-control"
            type="text"
            placeholder="123 Infinite Loop"
            // pattern="^\w+\s*\w+$"
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="city">City</label>
          <input
            required
            id="city"
            name="city"
            value={billingAddress.city}
            // onChange={(event)=> setCity(event.target.value)}
            onChange={e=>handleBilling(e)}
            className="form-control"
            type="text"
            placeholder="Sun City"
            // pattern="\d{1,}"
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="state">State</label>
          <input
            required
            id="state"
            name="state"
            value={billingAddress.state}
            // onChange={(event)=> setState(event.target.value)}
            onChange={e=>handleBilling(e)}
            className="form-control"
            type="text"
            placeholder="WA"
            pattern="^[A-Z]{2}$"
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="postal_code">Postal Code</label>
          <input
            required
            id="postal_code"
            name="postal_code"
            value={billingAddress.postal_code}
            // onChange={(event)=> setCode(event.target.value)}
            onChange={e=>handleBilling(e)}
            className="form-control"
            type="text"
            placeholder="98000"
            // pattern="\d{1,}"
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="country">Country</label>
          <input
            required
            id="country"
            name="country"
            value={billingAddress.country}
            // onChange={(event)=> setCountry(event.target.value)}
            onChange={e=>handleBilling(e)}
            className="form-control"
            type="text"
            placeholder="US"
            pattern="^[A-Z]{2}$"
          />
        </div>
        <br/>

        <div>
          <h2>
            Card Details
          </h2>
          <CardElement
            options={configCardElement}

          />
        </div>
        <br/>

        <Button
          size="large"
          variant="contained"
          color="tertiary"
          style={{
            color: "white"
          }}
          type="submit"

        >
          Pay Now

        </Button>
      </form>
    </div>

  )
}
