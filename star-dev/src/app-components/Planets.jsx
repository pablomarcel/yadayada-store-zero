import React from 'react';
import PlanetList from './PlanetList'
import useFetch from "./useFetch";


export default function Starships() {

  const {error, isPending, data: planets} = useFetch(`https://swapi.dev/api/planets/`)

  return(
    <div className="home">

      { planets && <PlanetList planets={planets}/>}

    </div>
  )


}

