import React from 'react';
import StarshipList from './StarshipList'
import useFetch from "./useFetch";


export default function Starships() {

  const {error, isPending, data: starShips} = useFetch(`https://swapi.dev/api/starships/`)

  return(
    <div className="home">

      { starShips && <StarshipList starShips={starShips}/>}

    </div>
  )


}

