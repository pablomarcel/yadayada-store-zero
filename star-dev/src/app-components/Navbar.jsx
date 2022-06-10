import React from 'react';

const Navbar = () => {

  return (

    <nav className="navbar">
      <div className="navbar-container">
        <center><img src="https://fontmeme.com/permalink/220610/2f6798e0ac6e2a6f38e4f3769a208d66.png" alt="Yada Yada"/></center>
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
               // backgroundColor: '#f1356d',
               backgroundColor: '#009688',
               borderRadius: '8px'
             }}
          >Cameras</a>
          <a href="/headphones" style={{
            color: 'white',
            // backgroundColor: '#48C2F9',
            // backgroundColor: '#44af35',
            backgroundColor: '#009688',
            borderRadius: '8px'
          }}>Headphones</a>
          <a href="/handbags"
             style={{
               color: 'white',
               // backgroundColor: '#48C2F9',
               // backgroundColor: '#fccf00',
               backgroundColor: '#009688',
               borderRadius: '8px'
             }}
          >Handbags</a>
          <a href="/gaming"
             style={{
               color: 'white',
               // backgroundColor: '#48C2F9',
               // backgroundColor: '#fccf00',
               // backgroundColor: '#e62310',
               backgroundColor: '#009688',
               borderRadius: '8px'
             }}
          >Gaming</a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
