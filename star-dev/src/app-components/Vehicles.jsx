import React from 'react';
import VehicleList from './VehicleList'
import useFetch from "./useFetch";
import {useState} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Vehicles() {

  const [page, setPage] = useState("1")

  const {error, isPending, data: vehicles} = useFetch(`https://swapi.dev/api/vehicles/?page=${page}`)

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

        { !error && vehicles && <VehicleList vehicles={vehicles}/>}

        <br/>

        <div className="error-message">

          {error && <div>{error}</div>}

        </div>

      </div>

    </div>

  )

}

