import React from "react";
import {useState} from "react";
import CheckoutForm from "./CheckoutForm";
import {useNavigate} from "react-router";

export default function CheckoutPage(){

  const [name, setName]= useState("")
  const [street, setStreet]= useState("")
  const [city, setCity]= useState("")
  const [state, setState]= useState("")
  const [code, setCode]= useState("")
  const [country, setCountry]= useState("")
  const navigate = useNavigate()

  function handleForm(event){
    event.preventDefault()

    // gets the element entity that triggered the event, in this case the form.
    const target = event.target
    console.log('form button clicked')
    console.log()

    setName("")
    setStreet("")
    setCity("")
    setState("")
    setCode("")
    setCountry("")
    target.reset()
    navigate("/")

  }

  return(

    <CheckoutForm
      setName={setName}
      setStreet={setStreet}
      setCity={setCity}
      setState={setState}
      setCode={setCode}
      setCountry={setCountry}
      handleForm={handleForm}/>

  )
}
