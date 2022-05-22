import { useParams} from "react-router-dom";
import useFetch from "./useFetch"
// import StarshipList from "./StarshipList";

export default function Planet(){

  const {id} = useParams()

  // const {error, isPending, data: starShips} = useFetch(`https://swapi.dev/api/starships/`)

  const { data: planet, error, isPending} = useFetch('https://swapi.dev/api/planets/'+id)

  // const history = useHistory()

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

      {/*{ starShip && <StarshipList starShips={starShips}/>}*/}

    </div>

  )

}
