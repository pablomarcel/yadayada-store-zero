import {Card, CardActions, CardContent, Divider, Stack, Typography} from "@mui/material";
import {Button} from "@mui/material"
// import {Box} from "@mui/material"
import React from "react";
import { useNavigate } from "react-router";

export default function AddedToCart(){

  const navigate = useNavigate()
  const handleClickHome=(e)=>{
    e.preventDefault()
    navigate(-2)

  }

  const handleClickShoppingCart=(e)=>{
    e.preventDefault()
    navigate('/shoppingcart')

  }

  return(
    <div>
        <div>
          <Card
            elevation={2}
            style={{
              backgroundColor: "#B2DFDB"
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant = "h5"
                style={{
                  color:"#004D40"
                }}
              >
                Item Added To Cart
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  color:"#009688"
                }}
              >
                Click on the Shopping Cart to review or continue Shopping
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
              >
              </Typography>
            </CardContent>
            <CardActions>
              <Stack

                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                margin={2}
                divider={<Divider orientation="vertical" flexItem />}
                justifyContent="center"
                alignItems="center"

              >
                <Button
                  size="large"
                  variant="contained"
                  color="tertiary"
                  onClick={handleClickShoppingCart}
                  style={{
                    color:"white"
                  }}
                >
                  Shopping Cart
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  color="tertiary"
                  onClick={handleClickHome}
                  style={{
                    color:"white",
                  }}
                >
                  Back to Items
                </Button>
              </Stack>
            </CardActions>

          </Card>

        </div>

    </div>



  )
}
