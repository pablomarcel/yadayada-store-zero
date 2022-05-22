import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {Container} from '@mui/material';
import Masonry from 'react-masonry-css'
import {Card} from "@mui/material";
import {CardHeader} from "@mui/material";
import {CardContent} from "@mui/material";
import {IconButton} from "@mui/material";
import {Typography} from "@mui/material";
import DeleteOutlined from "@mui/material"
import {makeStyles} from "@mui/material";
import {Avatar} from "@mui/material";
import {yellow, green, pink, blue} from "@mui/material/colors"

export default function PokemonList({pokemons}) {

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  const pokemonList = pokemons.results.map((pokemon)=>(

    <div key={pokemon.url}>

      <br/>

      <Card elevation={1}>

        <Link to={`/pokemons/${pokemon.url.split('/')[pokemon.url.split('/').length-2]}`} style={{
          textDecoration:"none"
        }}>

          <h2>{pokemon.name}</h2>
          {/*<p>Model: {pokemon.model}</p>*/}

        </Link>

      </Card>



    </div>

  ))

  return(

    <Container>
      <Masonry

        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"

      >

        {pokemonList}

        {/*<div>*/}

        {/*  {pokemonList}*/}

        {/*</div>*/}

      </Masonry>


    </Container>





  )

}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
}
