import {Card, CardActions, CardContent, Typography} from "@mui/material";
import {Box, Button} from "@mui/material"
import React from "react";
import { useNavigate } from "react-router";
// import {useNavigation} from '@react-navigation/native'

export default function AddedToCart(){

  const navigate = useNavigate()

  // history = useNavigate()
  const handleClickHome=(e)=>{
    e.preventDefault()
    navigate('/')

  }

  const handleClickShoppingCart=(e)=>{
    e.preventDefault()
    navigate('/shoppingcart')

  }

  return(

    <div className="home">
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

              >
                Item Added To Cart

              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
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
              <Box
                m={3}
                p={0}
              >
                <Button
                  size="large"
                  variant="contained"
                  color="tertiary"
                  onClick={handleClickShoppingCart}

                >
                  Shopping Cart

                </Button>

              </Box>

              <Box
                m={3}
                p={0}
              >
                <Button
                  size="large"
                  variant="contained"
                  color="tertiary"
                  onClick={handleClickHome}

                >
                  Home

                </Button>

              </Box>

            </CardActions>



          </Card>

        </div>


    </div>



  )
}
