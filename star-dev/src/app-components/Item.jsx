import { useParams} from "react-router-dom";
import useFetch from "./useFetch"
import {CardMedia, Container} from '@mui/material';
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


export default function Item(){

  const {id} = useParams()

  const { data: item, error, isPending} = useFetch('https://pokeapi.co/api/v2/item/'+id)

  return(

    <div className="home">

      {item && (
        <div>

          <Card elevation={2}>

            <CardContent>

              <Typography gutterBottom variant = "h5" component="div">

                {item.name}

              </Typography>

              <Typography variant="body2" color="text.secondary">

                Category: {item.category.name}

              </Typography>
              <Typography variant="body2" color="text.secondary">

                Name: {item.name}

              </Typography>
              <Typography variant="body2" color="text.secondary">

                Cost: {item.cost}

              </Typography>

            </CardContent>

          </Card>

        </div>
      )}

    </div>

  )

}
