import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

export default function StarshipList() {
  const [shipProfile, setshipProfile] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/?page=1`)
      .then(response => response.json())
      .then(data => {
      // .then(results => {
        console.log(data.results)
        setshipProfile(data.results[0].name);
        // console.log(data)

        // console.log(results)
        // setshipProfile(results);
        setIsLoading(false);
      });
  }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      {/*<h1> Placeholder </h1>*/}
      {/*<h1>{profile.login}</h1>*/}
      {/*<img src={profile.avatar_url} alt={profile.name} />*/}
      {/*<h2>{shipProfile.name} - {shipProfile.manufacturer}</h2>*/}
      <h2>{shipProfile}</h2>
    </div>
  );
}

// GithubProfile.propTypes = {
//   username: PropTypes.string.isRequired
// };
