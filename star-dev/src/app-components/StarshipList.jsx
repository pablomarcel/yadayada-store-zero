import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Pagination from "./Pagination";

// import PropTypes from 'prop-types';

export default function StarshipList({starShips}) {

  return(
    <div>

      <div>
      {/*<div className="swapi">*/}


        <Pagination
          previous={starShips.previous}
          next={starShips.next}
        />

      </div>


      {starShips.results.map((starship)=>(
        // const url = starship.url

        <div key={starship.url}>
          <Link to={starship.url} style={{
            textDecoration:"none"
          }}>
            <h2>{starship.name}</h2>
            <p>{starship.manufacturer}</p>
          </Link>

        </div>

      ))}

    </div>

  )




}
//   const [data, setData] = useState(undefined);
//   const [isLoading, setIsLoading] = useState(true);
//
//   useEffect(() => {
//     fetch(`https://swapi.dev/api/starships/`)
//       .then(response => response.json())
//       .then(data => {
//         // .then(results => {
//         console.log(data.results)
//         setData(data);
//         // console.log(data)
//
//         // console.log(results)
//         // setshipProfile(results);
//         setIsLoading(false);
//       });
//   }, []);
//
//   // if (isLoading) {
//   //   return <p>Loading...</p>;
//   // }
//
//   return (
//     <h1>
//
//     </h1>
//     // data
//     // <div>
//     //   {/*<h1> Placeholder </h1>*/}
//     //   {/*<h1>{profile.login}</h1>*/}
//     //   {/*<img src={profile.avatar_url} alt={profile.name} />*/}
//     //   {/*<h2>{shipProfile.name} - {shipProfile.manufacturer}</h2>*/}
//     //   <h2>{data}</h2>
//     // </div>
//   );
// }

// GithubProfile.propTypes = {
//   username: PropTypes.string.isRequired
// };
