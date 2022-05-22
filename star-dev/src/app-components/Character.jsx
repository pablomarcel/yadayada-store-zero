import { useParams} from "react-router-dom";
import useFetch from "./useFetch"

export default function Character(){

  const {id} = useParams()

  const { data: character, error, isPending} = useFetch('https://swapi.dev/api/people/'+id)

  return(

    <div className="home">

      {character && (
        <article>
          <h2>{character.name}</h2>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Birth Year: {character.birth_year}</p>
          <p>Gender: {character.gender}</p>
          <p>Eye Color: {character.eye_color}</p>
          <p>Hair Color: {character.eye_color}</p>

        </article>
      )}

    </div>

  )

}
