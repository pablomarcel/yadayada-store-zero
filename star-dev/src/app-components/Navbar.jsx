const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src="https://fontmeme.com/permalink/220522/9b924195db7e3a66e0995df903672788.png" alt="star-dev"/>
        <br />
        <br />
        <div className="links">
          <a href="/"
             style={{
               color: 'white',
               backgroundColor: '#48C2F9',
               borderRadius: '8px'
             }}
          >Home</a>
          <a href="/characters" style={{
            color: 'white',
            backgroundColor: '#48C2F9',
            borderRadius: '8px'
          }}>Characters</a>
          <a href="/starships"
             style={{
               color: 'white',
               backgroundColor: '#48C2F9',
               borderRadius: '8px'
             }}
          >Starships</a>
          <a href="/planets"
             style={{
               color: 'white',
               backgroundColor: '#48C2F9',
               borderRadius: '8px'
             }}
          >Planets</a>

          <a href="/vehicles"
             style={{
               color: 'white',
               backgroundColor: '#48C2F9',
               borderRadius: '8px'
             }}
          >Vehicles</a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
