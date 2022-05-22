import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Pagination from "./Pagination";

// import PropTypes from 'prop-types';

export default function StarshipList({starShips}) {

  const starshipList = starShips.results.map((starship)=>(

    <div key={starship.url}>

      <Link to={`/starships/${starship.url.charAt(starship.url.length-2)}`} style={{
        textDecoration:"none"
      }}>

        <h2>{starship.name}</h2>
        <p>Manufacturer: {starship.manufacturer}</p>

      </Link>

    </div>


  ))


  return(
    <div>

      <div>

        <Pagination
          previous={starShips.previous}
          next={starShips.next}
        />

      </div>

      {starshipList}

    </div>

  )

}

