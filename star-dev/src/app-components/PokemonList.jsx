import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

export default function PokemonList({pokemons}) {

  const pokemonList = pokemons.results.map((pokemon)=>(

    <div key={pokemon.url}>

      <Link to={`/pokemons/${pokemon.url.split('/')[pokemon.url.split('/').length-2]}`} style={{
        textDecoration:"none"
      }}>

        <h2>{pokemon.name}</h2>
        {/*<p>Model: {pokemon.model}</p>*/}

      </Link>

    </div>

  ))

  return(
    <div>

      {pokemonList}

    </div>

  )

}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
}
