import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

export default function StarshipList({starShips}) {

  const starshipList = starShips.results.map((starship)=>(

    <div key={starship.url}>

      <Link to={`/starships/${starship.url.split('/')[starship.url.split('/').length-2]}`} style={{
        textDecoration:"none"
      }}>

        <h2>{starship.name}</h2>
        <p>Manufacturer: {starship.manufacturer}</p>

      </Link>

    </div>

  ))

  return(
    <div>

      {starshipList}

    </div>

  )

}

StarshipList.propTypes = {
  starShips: PropTypes.arrayOf(PropTypes.object).isRequired
}
