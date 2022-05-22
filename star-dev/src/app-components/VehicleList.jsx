import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Pagination from "./Pagination";

// import PropTypes from 'prop-types';

export default function VehicleList({vehicles}) {

  return(
    <div>

      <div>

        <Pagination
          previous={vehicles.previous}
          next={vehicles.next}
        />

      </div>

      {vehicles.results.map((vehicle)=>(
        // const url = starship.url

        <div key={vehicle.url}>
          <Link to={vehicle.url} style={{
            textDecoration:"none"
          }}>
            <h2>{vehicle.name}</h2>
            <p>Model: {vehicle.model}</p>
          </Link>

        </div>

      ))}

    </div>

  )

}

