import React from 'react'
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

export default function ShopItem({card, id, onRemove}){

  return ( card.name ?

    <div key={id} className="home-shop">
      <Card elevation={2} style={{
        backgroundColor: "#B2DFDB"
      }}>

        <CardMedia
          component="img"
          height="100"
          image={card.image}
          alt="camera"

        />

        <CardContent
          style={{
          padding:0
        }}
        >
          <Typography
            variant='body2'
            color="#004D40"
          >
              <p>{card.name}</p>

          </Typography>
          <Typography
            variant='body2'
            color="text.secondary"
          >
            <p>Price: ${card.price}</p>

          </Typography>

        </CardContent>

        <CardActions
          style={{
            padding:0
          }}

        >
          <Box
            m={1.5}
            p={0}
          >
            <Button
              size="small"
              variant="contained"
              color="tertiary"
              onClick={onRemove}
            >
              Remove
            </Button>
          </Box>
        </CardActions>
      </Card>

    </div>

    :
      null

  )


}
