import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Pagination from "./Pagination";

// import PropTypes from 'prop-types';

export default function PlanetList({planets}) {

  const planetList = planets.results.map((planet)=>(

    <div key={planet.url}>

      <Link to={`/planets/${planet.url.split('/')[planet.url.split('/').length-2]}`} style={{
        textDecoration:"none"
      }}>

        <h2>{planet.name}</h2>
        <p>Population: {planet.population}</p>

      </Link>

    </div>


  ))


  return(
    <div>

      {/*<div>*/}

      {/*  <Pagination*/}
      {/*    previous={planets.previous}*/}
      {/*    next={planets.next}*/}
      {/*  />*/}

      {/*</div>*/}

      {planetList}

    </div>

  )

}

