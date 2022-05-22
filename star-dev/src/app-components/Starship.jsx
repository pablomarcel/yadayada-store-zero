import { useParams} from "react-router-dom";
import useFetch from "./useFetch"
// import StarshipList from "./StarshipList";

export default function Starship({starship}){

  const {id} = useParams()

  // const {error, isPending, data: starShips} = useFetch(`https://swapi.dev/api/starships/`)

  const { data: starShip, error, isPending} = useFetch('https://swapi.dev/api/starships/'+id)

  // const history = useHistory()

  return(

    <div className="home">

      {starShip && (
        <article>
          <h2>{starShip.name}</h2>
          <p>Model: {starShip.model}</p>
          <p>Manufacturer: {starShip.manufacturer}</p>
          <p>Crew: {starShip.crew}</p>
          <p>Passengers: {starShip.passengers}</p>
          <p>Starship Class: {starShip.starship_class}</p>
          <p>Hyperdrive Rating: {starShip.hyperdrive_rating}</p>

        </article>
      )}

      {/*{ starShip && <StarshipList starShips={starShips}/>}*/}

    </div>



  )


}
