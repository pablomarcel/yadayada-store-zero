import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Pagination from "./Pagination";

// import PropTypes from 'prop-types';

export default function StarshipList({starShips}) {

  return(
    <div>

      <div>

        <Pagination
          previous={starShips.previous}
          next={starShips.next}
        />

      </div>

      {starShips.results.map((starship)=>(
        // const url = starship.url

        <div key={starship.url}>
          <Link to={starship.url} style={{
            textDecoration:"none"
          }}>

            <h2>{starship.name}</h2>
            <p>Manufacturer: {starship.manufacturer}</p>

          </Link>

        </div>

      ))}

    </div>

  )

}

