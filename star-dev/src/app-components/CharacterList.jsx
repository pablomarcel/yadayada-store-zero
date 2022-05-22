import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

export default function CharactersList({characters}) {

  const characterList = characters.results.map((character)=>(

    <div key={character.url}>

      <Link to={`/people/${character.url.split('/')[character.url.split('/').length-2]}`} style={{
        textDecoration:"none"
      }}>

        <h2>{character.name}</h2>
        <p>Date of Birth: {character.birth_year}</p>

      </Link>

    </div>

  ))

  return(
    <div>

      {characterList}

    </div>

  )

}

CharactersList.propTypes = {

  characters: PropTypes.arrayOf(PropTypes.object).isRequired

}
