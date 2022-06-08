import React from 'react';
import useFetch from "./useFetch";
import {useState} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HeadphoneList from "./HeadphoneList";

export default function Headphones() {

  const [offset, setOffset] = useState("0")
  const limit = "20"
  const {error, data: machines} = useFetch(`https://pokeapi.co/api/v2/machine/?offset=${offset}&limit=${limit}`)

  return(

    <div>

      <div className="pagination-buttons">

        <Stack spacing={2} direction="row">

          <Button onClick={()=>{
            const offsetNumber = Number(offset)
            const previousPage = offsetNumber-20
            setOffset(String(previousPage))
          }} variant="contained" style={{
            // backgroundColor: "#f1356d",
            // backgroundColor: "#48C2F9",
            backgroundColor: "#D500F9",
            padding: "10px 10px",
            marginTop: "10px",

          }}>Previous</Button>

          <Button onClick={()=>{
            const offsetNumber = Number(offset)
            const nextPage = offsetNumber+20
            setOffset(String(nextPage))
          }} variant="contained" style={{
            // backgroundColor: "#f1356d",
            // backgroundColor: "#48C2F9",
            backgroundColor: "#D500F9",
            padding: "10px 10px",
            marginTop: "10px",

          }}>Next</Button>

        </Stack>

      </div>

      <div className="home">

        { !error && machines && <HeadphoneList machines={machines}/>}

        <br/>

        <div className="error-message">

          {error && <div>{error}</div>}

        </div>

      </div>

    </div>

  )

}

