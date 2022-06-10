import React, {useEffect, useState} from 'react'
import {doc, getDoc} from 'firebase/firestore'
import { useParams} from "react-router-dom";
import db from "../db";
import {CardMedia} from '@mui/material';
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {Typography} from "@mui/material";

export default function HandbagDetails(){

  const {id} = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const[ error, setError]= useState(false)

  useEffect(()=>{
    const productRef = doc(db, 'handbags', id)
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
    <div className="home">

      {!error && product && (
        <div>

          <Card
            elevation={2}
            style={{
              backgroundColor: "#B2DFDB"
            }}

          >
            <CardMedia
              component="img"
              height="600"
              image={product.image}
              alt="product"
            />
            <CardContent>

              <Typography gutterBottom variant = "h5" component="div">

                {product.name}

              </Typography>

              <Typography variant="body2" color="text.secondary">

                {product.description}

              </Typography>
              <Typography variant="body2" color="text.secondary">

                Price: ${product.price}

              </Typography>

            </CardContent>

          </Card>

        </div>
      )}

    </div>
  )

}
