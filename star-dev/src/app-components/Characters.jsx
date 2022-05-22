import React from 'react';
import CharacterList from './CharacterList'
import useFetch from "./useFetch";


export default function Starships() {

  const {error, isPending, data: characters} = useFetch(`https://swapi.dev/api/people/`)

  return(
    <div className="home">

      { characters && <CharacterList characters={characters}/>}

    </div>
  )


}

