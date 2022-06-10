import React from 'react'
import Navbar from './app-components/Navbar';
import Home from './app-components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gaming from "./app-components/Gaming";
import Headphones from "./app-components/Headphones";
import HeadphoneDetails from "./app-components/HeadphoneDetails";
import NotFound from "./app-components/NotFound";
import Products from "./app-components/Products";
import ProductDetails from "./app-components/ProductDetails"
import Handbags from "./app-components/Handbags";
import HandbagDetails from "./app-components/HandbagDetails";
import GamingDetails from "./app-components/GamingDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element = {<Home />}/>
            <Route path="/headphones" element = {<Headphones />}/>
            <Route path="/headphones/:id" element = {<HeadphoneDetails />}/>
            <Route path="/handbags" element = {<Handbags />}/>
            <Route path="/handbags/:id" element = {<HandbagDetails />}/>
            <Route path="/gaming" element = {<Gaming />}/>
            <Route path="/gaming/:id" element = {<GamingDetails />}/>
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
