import React, {useEffect, useState} from 'react'
import {doc, getDoc} from 'firebase/firestore'
import { useParams} from "react-router-dom";
import db from "../db";
import {Button, CardActions, CardMedia, Divider, Stack} from '@mui/material';
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {Typography} from "@mui/material";
import {Box} from "@mui/material"
import { useNavigate } from 'react-router'

export default function ProductDetails({addToCart}){
  const history = useNavigate()
  const {id} = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const[ error, setError]= useState(false)

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
              height="400"
              image={product.image}
              alt="product"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant = "h5"
                style={{
                  color:"#004D40",
                  fontWeight:"bold"
                }}
              >
                {product.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  fontSize:16,
                  color:"#009688"
                }}

              >
                {product.description}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  color:"#009688",
                  // fontWeight:"bold"
                }}
              >
                Price: ${product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Box
                m={1}
                p={0}

              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  margin={0}
                  divider={<Divider orientation="vertical" flexItem />}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    size="large"
                    variant="contained"
                    color="tertiary"
                    onClick={()=>{
                      addToCart(product)
                      history("/addedtocart")
                    }}
                    style={{
                      // padding:10
                      color:"white"
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    size="large"
                    variant="contained"
                    color="tertiary"
                    onClick={()=>{
                      addToCart(product)
                      history(-1)
                    }}
                    style={{
                      // padding:10
                      color:"white"
                    }}
                  >
                    Back to Items
                  </Button>
                </Stack>
              </Box>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  )

}
