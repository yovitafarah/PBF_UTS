import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Microwave from "./container/Smartphone/Smartphone";
import Keranjang from "./container/Smartphone/Keranjang";
import microwave_img from './Smartphone.jpg';
// import samsung1 from './samsung1.png'
import foto from './fotoku.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <Router>
      <div>

        <ul className="menu">
          {/* <img src="https://media.wired.com/photos/5ed7d5b17f41315c30f0d5d1/master/w_2611,h_512,c_limit/5017.png" alt="Gambar" /> */}
          <p>MICROWAVE</p>
          <li>
            <Link to="/about" ><span>About</span></Link>
          </li>
          <li>
            <Link to="/keranjang" ><span>Cart</span></Link>
          </li>
          <li>
            <Link to="/list-product" ><span>List Product</span></Link>
          </li>
          <li>
            <Link to="/" ><span>Home</span></Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list-product">
            <Products />
          </Route>
          <Route path="/keranjang">
            <Keranjangs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="carousel-smartphone">
      {/* <img src={apple} id="img-bg" /> */}
      <div className="header">
        <p className="header-t1 h-t-1">Smartphone that</p>
        <p className="header-t1">every one</p>
        <p className="header-t1">Loves</p>

        <div className="h-t-2">
          <p className="header-t2">We have 5000+ Review and our customers trust on our</p>
          <p className="header-t2">Furniture and Quality Product</p>
        </div>

        <button className="btn btn-sm btn-header-1">Buy Now</button>
        <button className="btn btn-sm btn-header-2">Explore</button>
      </div>
      <img id="img-smartphone" src={smartphone_img} alt="gambar"/>
    </div> 
  );
}

const About = () => {
  return (
  <div>
    <div className="About">
      {/* <center><h2>Biodata</h2></center> */}
      <img src={foto} alt="gambar" />
      {/* <div id="kotak" /> */}
      <div id="bio">
        <p id="p-1">Hallo!</p>
        <p id="p-2">My name is Yovita</p>
      </div>
    </div>
    <p id="about-me">I am a student with a D4 Informatics Engineering study program. I belong to the class of 2018.</p>
  </div>
  );
}

function Products() {
  return (
    <div>
      <Microwave />
    </div>
  )
}

function Keranjangs() {
  return (
    <div>
      <Keranjang />
    </div>
  )
}

export default App;
