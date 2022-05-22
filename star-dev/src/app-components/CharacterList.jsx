import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Pagination from "./Pagination";

// import PropTypes from 'prop-types';

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

      {/*<div>*/}

      {/*  <Pagination*/}
      {/*    previous={characters.previous}*/}
      {/*    next={characters.next}*/}
      {/*  />*/}

      {/*</div>*/}

      {characterList}

    </div>

  )

}

