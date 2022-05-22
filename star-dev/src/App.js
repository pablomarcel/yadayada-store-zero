import Navbar from './app-components/Navbar';
import Home from './app-components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Starships from "./app-components/Starships";
import CharacterList from "./app-components/ CharacterList";
import PlanetList from "./app-components/PlanetList";
import VehicleList from "./app-components/VehicleList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element = {<Home />}/>

            <Route path="/characters" element = {<CharacterList />}/>

            <Route path="/starships" element = {<Starships />}/>

            <Route path="/planets" element = {<PlanetList />}/>

            <Route path="/vehicles" element = {<VehicleList />}/>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
