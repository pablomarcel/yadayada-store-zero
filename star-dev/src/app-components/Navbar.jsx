import React from 'react';

const Navbar = () => {

  return (

    <nav className="navbar">
      <div className="navbar-container">
        <center><img src="https://fontmeme.com/permalink/220608/974e832392ca53a94294cc0f0b79a703.png" alt="Yada Yada"/></center>
        <br/>
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
          <a href="/cameras"
             style={{
               color: 'white',
               // backgroundColor: '#48C2F9',
               // backgroundColor: '#6200ea',
               backgroundColor: '#f1356d',
               borderRadius: '8px'
             }}
          >Cameras</a>
          <a href="/bags" style={{
            color: 'white',
            // backgroundColor: '#48C2F9',
            backgroundColor: '#44af35',
            borderRadius: '8px'
          }}>Bags</a>
          <a href="/headphones"
             style={{
               color: 'white',
               // backgroundColor: '#48C2F9',
               backgroundColor: '#fccf00',
               borderRadius: '8px'
             }}
          >Headphones</a>
          <a href="/berries"
             style={{
               color: 'white',
               // backgroundColor: '#48C2F9',
               // backgroundColor: '#fccf00',
               backgroundColor: '#e62310',
               borderRadius: '8px'
             }}
          >Berries</a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
