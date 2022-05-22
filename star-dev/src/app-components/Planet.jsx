import { useParams} from "react-router-dom";
import useFetch from "./useFetch"

export default function Planet(){

  const {id} = useParams()

  const { data: planet, error, isPending} = useFetch('https://swapi.dev/api/planets/'+id)

  return(

    <div className="home">

      {planet && (
        <article>
          <h2>{planet.name}</h2>
          <p>Rotation Period: {planet.rotation_period}</p>
          <p>Orbital Period: {planet.orbital_period}</p>
          <p>Diameter: {planet.diameter}</p>
          <p>Climate: {planet.climate}</p>
          <p>Gravity: {planet.gravity}</p>
          <p>Terrain: {planet.terrain}</p>

        </article>
      )}

    </div>

  )

}
