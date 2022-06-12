import React from 'react'
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {Typography} from "@mui/material";

export default function Home() {

  return (

    <div className="home">

      <Card
        elevation={2}
        style={{
          // backgroundColor: "#E1F5FE"
          backgroundColor: "#B2DFDB"
      }}
      >
        <CardContent>
          <Typography
            variant='subtitle2'

            color="textSecondary">

            <h2>Welcome Shoppers!</h2>
            <p>Online Shop coming up Q4 2022</p>
            <p>Credit Card Gateway courtesy of Stripe</p>
            <br/>
            <div className="swapi">

              <div className="links">
                <a href="https://stripe.com/docs/api"
                   style={{
                     color: 'white',
                     // backgroundColor: '#386abb',
                     backgroundColor: '#009688',
                     borderRadius: '8px',
                     padding: 8,
                     textDecoration: "none"

                   }}
                >Stripe</a>

              </div>

            </div>

            <p>Images courtesy of Pexels</p>
            <br/>

            <div className="swapi">

              <div className="links">
                <a href="https://www.pexels.com/"
                   style={{
                     color: 'white',
                     // backgroundColor: '#f1356d',
                     backgroundColor: '#009688',
                     borderRadius: '8px',
                     padding: 8,
                     textDecoration: "none"
                   }}
                >Pexels</a>

              </div>

            </div>

            <div id="swapi-dummy">
              <br/>
            </div>

          </Typography>

        </CardContent>

      </Card>

    </div>

  );
}

