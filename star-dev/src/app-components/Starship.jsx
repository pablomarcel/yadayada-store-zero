import { useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch"
import StarshipList from "./StarshipList";

export default function Starship({starship}){

  const {id} = useParams()

  const {error, isPending, data: starShips} = useFetch(`https://swapi.dev/api/starships/`)

  // const { data: starShip, error, isPending} = useFetch('https://swapi.dev/api/starships/'+starShip.id)

  return(

    <div className="home">

      { starShips && <StarshipList starShips={starShips}/>}

    </div>



  )


}
