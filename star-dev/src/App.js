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
import {createTheme, ThemeProvider} from "@mui/material";
import {teal} from "@mui/material/colors";
import DrawerLeft from "./app-components/DrawerLeft"

const theme = createTheme({
  palette:{
    primary:{
      main:'#E0F2F1'
    },
    secondary: {
      main: teal[900]
    }
  },
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">

            <Navbar />
            <div className="content">
              <DrawerLeft>
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
              </DrawerLeft>

            </div>

        </div>
      </Router>

    </ThemeProvider>

  );
}

export default App;
