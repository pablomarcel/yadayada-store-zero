import React from 'react'

const Home = () => {

  return (

    <div className="home">
      <h2>Welcome Shoppers!</h2>
      <p>Launching Q4 2022, I promise</p>
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


    </div>

  );
}

export default Home;
