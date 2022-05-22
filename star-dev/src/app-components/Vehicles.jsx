import React from 'react';
import VehicleList from './VehicleList'
import useFetch from "./useFetch";


export default function Starships() {

  const {error, isPending, data: vehicles} = useFetch(`https://swapi.dev/api/vehicles/`)

  return(
    <div className="home">

      { vehicles && <VehicleList vehicles={vehicles}/>}

    </div>
  )


}

