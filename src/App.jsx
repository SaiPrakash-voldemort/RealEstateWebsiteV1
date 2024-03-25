import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Overview from "./components/Overview"
import Highlights from "./components/Highlights";
import Amenities from "./components/Amenities";
import Primaryutil from "./components/Primaryutil";
import Location from "./components/Location";
import Landmark from "./components/Landmark";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Home />
      <Overview />
      <Highlights />

      <Amenities />
      <Primaryutil />
      <Location />
      <Landmark />
      <Contact />
    </div>
  );
};

export default App;
