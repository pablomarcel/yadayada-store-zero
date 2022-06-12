import React from 'react'
import ShopItem from "./ShopItem";
import Masonry from 'react-masonry-css'
import {Container} from "@mui/material";
import {Button} from "@mui/material"
import {Box} from "@mui/material"
// import {Box, Button, CardActions} from "@mui/material"

export default function ShoppingCart({cart, removeFromCart}){


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

      <Box m={3} pt={1}>
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




      {/*<Box*/}
      {/*  m={3}*/}
      {/*  p={0}*/}

      {/*>*/}


        {/*<Button*/}
        {/*  size="large"*/}
        {/*  variant="contained"*/}
        {/*  color="black"*/}
        {/*>*/}
        {/*  Checkout*/}

        {/*</Button>*/}





      {/*</Box>*/}





    </div>
  )
}
