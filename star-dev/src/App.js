import Navbar from './app-components/Navbar';
import Home from './app-components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Starships from "./app-components/Starships";
import Characters from "./app-components/Characters";
import Planets from "./app-components/Planets";
import Vehicles from "./app-components/Vehicles";
import Starship from "./app-components/Starship";
import NotFound from "./app-components/NotFound";
import Character from "./app-components/Character";
import Planet from "./app-components/Planet";
import Vehicle from "./app-components/Vehicle";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element = {<Home />}/>
            <Route path="/characters" element = {<Characters />}/>
            <Route path="/people/:id" element = {<Character />}/>
            <Route path="/starships" element = {<Starships />}/>
            <Route path="/starships/:id" element = {<Starship />}/>
            <Route path="/planets" element = {<Planets />}/>
            <Route path="/planets/:id" element = {<Planet />}/>
            <Route path="/vehicles" element = {<Vehicles />}/>
            <Route path="/vehicles/:id" element = {<Vehicle />}/>
            <Route path="*" element = {<NotFound />}/>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
