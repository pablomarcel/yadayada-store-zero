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


export default function Machine(){

  const {id} = useParams()

  const { data: machine, error, isPending} = useFetch('https://pokeapi.co/api/v2/machine/'+id)

  return(

    <div className="home">

      {machine && (
        <div>

          <Card elevation={2}>

            <CardContent>

              <Typography gutterBottom variant = "h5" component="div">

                Item: {machine.item.name}

              </Typography>

              <Typography variant="body2" color="text.secondary">

                Category: {machine.move.name}

              </Typography>
              <Typography variant="body2" color="text.secondary">

                Name: {machine.version_group.name}

              </Typography>

            </CardContent>

          </Card>

        </div>
      )}

    </div>

  )

}
