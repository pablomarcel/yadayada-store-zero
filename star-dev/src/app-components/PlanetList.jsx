import React from 'react';
import {Link} from 'react-router-dom'

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

      {planetList}

    </div>

  )

}

