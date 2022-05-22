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


export default function Berry(){

  const {id} = useParams()

  const { data: berry, error, isPending} = useFetch('https://pokeapi.co/api/v2/berry/'+id)

  return(

    <div className="home">

      {berry && (
        <div>

          <Card elevation={2}>

            <CardContent>

              <Typography gutterBottom variant = "h5" component="div">

                {berry.name}

              </Typography>

              <Typography variant="body2" color="text.secondary">

                Firmness: {berry.name}

              </Typography>
              <Typography variant="body2" color="text.secondary">

                Name: {berry.item.name}

              </Typography>
              <Typography variant="body2" color="text.secondary">

                Smoothness: {berry.smoothness}

              </Typography>

            </CardContent>

          </Card>

        </div>
      )}

    </div>

  )

}
