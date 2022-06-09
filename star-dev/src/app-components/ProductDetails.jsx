import React, {useEffect, useState} from 'react'
import {doc, getDoc} from 'firebase/firestore'
import { useParams} from "react-router-dom";
import db from "../db";

// import useFetch from "./useFetch"
// import {CardMedia} from '@mui/material';
// import {Card} from "@mui/material";
// import {CardContent} from "@mui/material";
// import {Typography} from "@mui/material";

export default function ProductDetails(){

  const {id} = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const[ error, setError]= useState(false)

  // const { data: pokemon, error} = useFetch('https://pokeapi.co/api/v2/pokemon/'+id)

  useEffect(()=>{
    const productRef = doc(db, 'electronics', id)
    getDoc(productRef).then(docSnap=>{
      setLoading(false)
      if(docSnap.exists()){
        setProduct(docSnap.data())
      }else{
        setError(true)
      }
    })
  },[id])

  if (loading){
    return <p>Loading...</p>
  }

  if (error){
    return <p>Error, that doc may not exist</p>
  }


  return(
    <div>
      <h1>Product {id}</h1>
      {product.name}
    </div>
  )

}
