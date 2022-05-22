import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Pagination from "./Pagination";

// import PropTypes from 'prop-types';

export default function CharacterList({characters}) {

  return(
    <div>

      <div>

        <Pagination
          previous={characters.previous}
          next={characters.next}
        />

      </div>

      {characters.results.map((character)=>(
        // const url = starship.url

        <div key={character.url}>
          <Link to={character.url} style={{
            textDecoration:"none"
          }}>
            <h2>{character.name}</h2>
            <p>Date of Birth: {character.birth_year}</p>
          </Link>

        </div>

      ))}

    </div>

  )

}

