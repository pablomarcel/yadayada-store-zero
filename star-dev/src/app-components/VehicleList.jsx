import React from 'react';
import {Link} from 'react-router-dom'

// import PropTypes from 'prop-types';

export default function VehicleList({vehicles}) {

  const vehicleList = vehicles.results.map((vehicle)=>(

    <div key={vehicle.url}>

      <Link to={`/vehicles/${vehicle.url.split('/')[vehicle.url.split('/').length-2]}`} style={{
        textDecoration:"none"
      }}>

        <h2>{vehicle.name}</h2>
        <p>Model: {vehicle.model}</p>

      </Link>

    </div>


  ))


  return(
    <div>

      {vehicleList}

    </div>

  )

}

