import React from 'react'
import ShopItem from "./ShopItem";
import Masonry from 'react-masonry-css'
import {Card, CardActions, CardContent, Container, Typography} from "@mui/material";
import {Button} from "@mui/material"
import {Box} from "@mui/material"

export default function ShoppingCart({cart, removeFromCart, sum}){

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  const shoppingCartList = cart.map((card, idx )=>

    <ShopItem
      card={card}
      key={idx}
      onRemove={()=>removeFromCart(idx)}
    />)

  return(

    <div className="shopping-cart-component">

      <Container>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {shoppingCartList}
        </Masonry>
      </Container>
      <Container>
        <Card
          elevation={2}
          style={{
            // backgroundColor: "#B2DFDB"
            backgroundColor: "#E0F2F1",
            borderColor:"#009688",
            borderStyle:"solid"
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant = "h5"
            >
              Subtotal
            </Typography>
            <Typography
              variant="h3"
              color="text.secondary">
              ${sum}
            </Typography>
          </CardContent>
          <CardActions>
            <Box m={1} pt={0}>
              <Button
                size="large"
                variant="contained"
                color="checkout3"
                style={{
                  color: "white"
                }}
              >
                Checkout
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Container>
    </div>
  )
}
