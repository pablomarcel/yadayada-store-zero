// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  return (

    <div className="home">
      <h2>Welcome to Star Dev</h2>
      <p>Click on a link above to display items from the Star Wars Universe</p>

      <p>Data Source courtesy of The Star Wars API:</p>

      <br/>

      <div className="swapi">

        <div className="links">
          <a href="https://swapi.dev/"
             style={{
               color: 'white',
               backgroundColor: '#f1356d',
               borderRadius: '8px',
               padding: 8

             }}
          >SWAPI</a>

        </div>

      </div>

    </div>

  );
}

export default Home;
