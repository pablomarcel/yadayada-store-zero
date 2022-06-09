import React, { useEffect, useState } from "react";
// import {collection, getDocs, onSnapshot, query} from 'firebase/firestore'
import {collection, onSnapshot, query} from 'firebase/firestore'
import db from '../db'
import {Link} from 'react-router-dom'
import {Card, CardContent, Typography} from "@mui/material";

export default function Products(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=>{

    const productsQuery = query(
      collection(db, 'electronics')
    )

    const unsubscribe = onSnapshot(
      productsQuery,
      snapshot => {
        setProducts(snapshot.docs)
        setLoading(false)
      },
      ()=>{
        setError(true)
        setLoading(false)
      }
    )

    return () => unsubscribe()

  }, [])

  if (error) {
    return <p>An error occurred, please try again</p>
  }

  if (loading){
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map(product => {
        return (
          <div key={product.id}>

            <Card elevation={2} style={{backgroundColor: "#E1F5FE"}}>

              <CardContent>
                <Typography variant='subtitle2' color="textSecondary">

                  <Link to={`/products/${product.id}`} style={{
                    textDecoration:"none"
                  }}>

                    <h2>{product.data().name}</h2>

                  </Link>

                </Typography>

              </CardContent>

            </Card>

            {/*<p>{product.data().name}</p>*/}
            {/*<span>*/}
            {/*  <Link to={`/products/${product.id}`}>View</Link>*/}
            {/*</span>*/}
            {/*<hr />*/}


          </div>
        );
      })}
    </div>
  )

}
