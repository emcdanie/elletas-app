import React from "react";
import Search from "./Search.js";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";
import Sunrise from "./Sunrise.js";
import "./App.css";
import "./Search.css";
import "./Sunrise.css";
import "./Forecast.css";
import "./Footer.css";

export default function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="weather-app" />
      </div>
      <Search />
      <Weather />
      <Sunrise />
      <Forecast />
      <Footer />
    </div>
  );
}
