import React from 'react';
import PlanetList from './PlanetList'
import useFetch from "./useFetch";
import {useState} from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


export default function Planets() {

  const [page, setPage] = useState("1")

  const {error, isPending, data: planets} = useFetch(`https://swapi.dev/api/planets/?page=${page}`)

  function handleNext(){
    const pageNumber = Number(page)
    const nextPage = pageNumber+1
    setPage(String(nextPage))
    console.log(page)
  }

  function handlePrevious(){
    const pageNumber = Number(page)
    const previousPage = pageNumber-1
    setPage(String(previousPage))
    console.log(page)
  }

  return(

    <div>

      <div className="pagination-buttons">

        <Stack spacing={2} direction="row">

          <Button onClick={handlePrevious} variant="contained" style={{
            backgroundColor: "#f1356d",
            padding: "10px 10px",
            marginTop: "10px",

          }}>Previous</Button>

          <Button onClick={handleNext} variant="contained" style={{
            backgroundColor: "#f1356d",
            padding: "10px 10px",
            marginTop: "10px",

          }}>Next</Button>

        </Stack>

      </div>


      <div className="home">

        { !error && planets && <PlanetList planets={planets}/>}

        <br/>

        <div className="error-message">


          {error && <div>{error}</div>}

        </div>

      </div>

    </div>


  )


}

