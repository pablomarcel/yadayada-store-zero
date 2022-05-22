import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Pagination from "./Pagination";

// import PropTypes from 'prop-types';

export default function VehicleList({vehicles}) {

  const vehicleList = vehicles.results.map((vehicle)=>(

    <div key={vehicle.url}>

      <Link to={`/vehicles/${vehicle.url.split('/')[vehicle.url.split('/').length-2]}`} style={{
        textDecoration:"none"
      }}>

      {/*<Link to={`/vehicles/${vehicle.url.charAt(vehicle.url.length-2)}`} style={{*/}
      {/*  textDecoration:"none"*/}
      {/*}}>*/}

        <h2>{vehicle.name}</h2>
        <p>Model: {vehicle.model}</p>

      </Link>

    </div>


  ))


  return(
    <div>

      {/*<div>*/}

      {/*  <Pagination*/}
      {/*    previous={vehicles.previous}*/}
      {/*    next={vehicles.next}*/}
      {/*  />*/}

      {/*</div>*/}

      {vehicleList}

    </div>

  )

}

