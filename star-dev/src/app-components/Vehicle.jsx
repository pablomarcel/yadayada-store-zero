import { useParams} from "react-router-dom";
import useFetch from "./useFetch"
export default function Vehicle(){

  const {id} = useParams()

  const { data: vehicle, error, isPending} = useFetch('https://swapi.dev/api/vehicles/'+id)

  return(

    <div className="home">

      {vehicle && (
        <article>
          <h2>{vehicle.name}</h2>
          <p>Model: {vehicle.model}</p>
          <p>Manufacturer: {vehicle.manufacturer}</p>
          <p>Length: {vehicle.length}</p>
          <p>Max Atmospheric Speed: {vehicle.max_atmosphering_speed}</p>
          <p>Crew: {vehicle.crew}</p>
          <p>Passengers: {vehicle.passengers}</p>

        </article>
      )}

    </div>

  )

}
