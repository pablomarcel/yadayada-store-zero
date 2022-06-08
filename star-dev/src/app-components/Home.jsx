import React from 'react'
// import {Container} from '@mui/material';
// import Masonry from 'react-masonry-css'
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {Typography} from "@mui/material";

const Home = () => {

  return (

    <div className="home">

      <Card elevation={2} style={{backgroundColor: "#E1F5FE"}}>
        <CardContent>
          <Typography variant='subtitle2' color="textSecondary">

            <h2>Welcome Shoppers!</h2>
            <p>Launching in Q4 2022, I promise</p>
            <p>Credit Card Gateway courtesy of Stripe</p>
            <br/>
            <div className="swapi">

              <div className="links">
                <a href="https://www.pexels.com/"
                   style={{
                     color: 'white',
                     backgroundColor: '#386abb',
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
                     backgroundColor: '#f1356d',
                     borderRadius: '8px',
                     padding: 8,
                     textDecoration: "none"

                   }}
                >Pexels</a>

              </div>

            </div>
            {/*<div id="swapi-dummy">*/}
            {/*  <br/>*/}
            {/*</div>*/}

            <div id="swapi-dummy">
              <br/>
            </div>

          </Typography>

        </CardContent>


      </Card>

      {/*<h2>Welcome Shoppers!</h2>*/}
      {/*<p>Launching Q4 2022, I promise</p>*/}
      {/*<p>Credit Card Gateway courtesy of Stripe</p>*/}
      {/*<br/>*/}
      {/*<div className="swapi">*/}

      {/*  <div className="links">*/}
      {/*    <a href="https://www.pexels.com/"*/}
      {/*       style={{*/}
      {/*         color: 'white',*/}
      {/*         backgroundColor: '#386abb',*/}
      {/*         borderRadius: '8px',*/}
      {/*         padding: 8,*/}
      {/*         textDecoration: "none"*/}

      {/*       }}*/}
      {/*    >Stripe</a>*/}

      {/*  </div>*/}

      {/*</div>*/}


      {/*<p>Images courtesy of Pexels</p>*/}
      {/*<br/>*/}

      {/*<div className="swapi">*/}

      {/*  <div className="links">*/}
      {/*    <a href="https://www.pexels.com/"*/}
      {/*       style={{*/}
      {/*         color: 'white',*/}
      {/*         backgroundColor: '#f1356d',*/}
      {/*         borderRadius: '8px',*/}
      {/*         padding: 8,*/}
      {/*         textDecoration: "none"*/}

      {/*       }}*/}
      {/*    >Pexels</a>*/}

      {/*  </div>*/}

      {/*</div>*/}
      {/*/!*<div id="swapi-dummy">*!/*/}
      {/*/!*  <br/>*!/*/}
      {/*/!*</div>*!/*/}

      {/*<div id="swapi-dummy">*/}
      {/*  <br/>*/}
      {/*</div>*/}


    </div>

  );
}

export default Home;
