import React, { useEffect, useState } from "react";
// import {collection, getDocs, onSnapshot, query} from 'firebase/firestore'
import {collection, onSnapshot, query} from 'firebase/firestore'
import db from '../db'
import {Link} from 'react-router-dom'
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Container} from '@mui/material';
import Masonry from 'react-masonry-css'

export default function Gaming(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  useEffect(()=>{

    const productsQuery = query(
      collection(db, 'gaming')
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


  const productList = products.map(product => {
    return (
      <div key={product.id}>

        <Card elevation={2} style={{
          // backgroundColor: "#E1F5FE"
          // backgroundColor: "#673AB7"
          // backgroundColor: "#651FFF"
          backgroundColor: "#B2DFDB"

        }}>

          <CardMedia
            component="img"
            height="140"
            image={product.data().image}
            alt="camera"

          />

          <CardContent>
            <Typography
              variant='subtitle2'
              // color="textSecondary"
              color="#18FFFF"
              style={{
                fontSize:20,
                fontWeight:"bold",
                color:"#004D40"
              }}
            >

              <Link to={`/gaming/${product.id}`}
                    style={{
                      textDecoration:"none",
                      color:"#004D40"

                    }}

              >

                <p>{product.data().name}</p>

              </Link>

            </Typography>

          </CardContent>

        </Card>

      </div>
    );
  })


  return (

    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {productList}

      </Masonry>

    </Container>

  )

}
