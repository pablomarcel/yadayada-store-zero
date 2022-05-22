const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src="https://fontmeme.com/permalink/220522/0bafee88ce1e973f69ae759e2b3b927b.png" alt="star-dev"/>
        <br />
        <br />
        <div className="links">
          <a href="/"
             style={{
               color: 'white',
               // backgroundColor: '#48C2F9',
               backgroundColor: '#386abb',
               borderRadius: '8px'
             }}
          >Home</a>
          <a href="/characters" style={{
            color: 'white',
            // backgroundColor: '#48C2F9',
            backgroundColor: '#44af35',
            borderRadius: '8px'
          }}>Characters</a>
          <a href="/starships"
             style={{
               color: 'white',
               // backgroundColor: '#48C2F9',
               backgroundColor: '#e62310',
               borderRadius: '8px'
             }}
          >Starships</a>
          <a href="/planets"
             style={{
               color: 'white',
               // backgroundColor: '#48C2F9',
               backgroundColor: '#fccf00',
               borderRadius: '8px'
             }}
          >Planets</a>

          <a href="/pokemons"
             style={{
               color: 'white',
               // backgroundColor: '#48C2F9',
               backgroundColor: '#6200ea',
               borderRadius: '8px'
             }}
          >Pokemons</a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
