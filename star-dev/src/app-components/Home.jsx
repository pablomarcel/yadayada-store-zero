const Home = () => {

  return (

    <div className="home">
      <h2>Welcome to Star Dev</h2>

      <p>This app explores content from Star Wars Universe</p>

      <p>Click on a link above to start</p>

      <p>Data Source courtesy of The Star Wars API:</p>

      <br/>

      <div className="swapi">

        <div className="links">
          <a href="https://swapi.dev/"
             style={{
               color: 'white',
               backgroundColor: '#f1356d',
               borderRadius: '8px',
               padding: 8

             }}
          >SWAPI</a>

        </div>

      </div>

    </div>

  );
}

export default Home;
