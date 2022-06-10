import React from 'react'
import Navbar from './app-components/Navbar';
import Home from './app-components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headphones from "./app-components/Headphones";
import Bags from "./app-components/Bags";
import Berrys from "./app-components/Berrys";
import Headphone from "./app-components/Headphone";
import NotFound from "./app-components/NotFound";
import Bag from "./app-components/Bag";
import Berry from "./app-components/Berry";
import Products from "./app-components/Products";
import ProductDetails from "./app-components/ProductDetails"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element = {<Home />}/>
            <Route path="/headphones" element = {<Bags />}/>
            <Route path="/headphones/:id" element = {<Bag />}/>
            <Route path="/handbags" element = {<Headphones />}/>
            <Route path="/handbags/:id" element = {<Headphone />}/>
            <Route path="/gaming" element = {<Berrys />}/>
            <Route path="/gaming/:id" element = {<Berry />}/>
            <Route path="/cameras" element = {<Products />}/>
            <Route path="/cameras/:id" element = {<ProductDetails />}/>
            <Route path="*" element = {<NotFound />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
