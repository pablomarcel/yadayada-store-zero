import React from 'react'
import Navbar from './app-components/Navbar';
import Home from './app-components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headphones from "./app-components/Headphones";
import Bags from "./app-components/Bags";
import Berrys from "./app-components/Berrys";
import Cameras from "./app-components/Cameras";
import Headphone from "./app-components/Headphone";
import NotFound from "./app-components/NotFound";
import Bag from "./app-components/Bag";
import Berry from "./app-components/Berry";
import Camera from "./app-components/Camera";
import Dummy from "./app-components/Dummy";
import Dummys from "./app-components/Dummys";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element = {<Home />}/>
            <Route path="/bags" element = {<Bags />}/>
            <Route path="/bags/:id" element = {<Bag />}/>
            <Route path="/headphones" element = {<Headphones />}/>
            <Route path="/headphones/:id" element = {<Headphone />}/>
            <Route path="/berries" element = {<Berrys />}/>
            <Route path="/berries/:id" element = {<Berry />}/>
            <Route path="/cameras" element = {<Cameras />}/>
            <Route path="/cameras/:id" element = {<Camera />}/>
            <Route path="/dummys" element = {<Dummys />}/>
            <Route path="/dummys/:id" element = {<Dummy />}/>
            <Route path="*" element = {<NotFound />}/>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
