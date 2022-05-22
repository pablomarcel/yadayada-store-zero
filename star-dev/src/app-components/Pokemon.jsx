import { useParams} from "react-router-dom";
import useFetch from "./useFetch"
export default function Pokemon(){

  const {id} = useParams()

  const { data: pokemon, error, isPending} = useFetch('https://swapi.dev/api/pokemon/'+id)

  return(

    <div className="home">

      {pokemon && (
        <article>
          <h2>{pokemon.species.name}</h2>
          {/*<p>Model: {pokemon.model}</p>*/}
          {/*<p>Manufacturer: {pokemon.manufacturer}</p>*/}
          {/*<p>Length: {pokemon.length}</p>*/}
          {/*<p>Max Atmospheric Speed: {pokemon.max_atmosphering_speed}</p>*/}
          {/*<p>Crew: {pokemon.crew}</p>*/}
          {/*<p>Passengers: {pokemon.passengers}</p>*/}

        </article>
      )}

    </div>

  )

}
