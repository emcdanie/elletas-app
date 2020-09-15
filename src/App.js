import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search.js";
import Sunrise from "./Sunrise.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";

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
      <Search defaultCity="Barcelona" />
      <Sunrise />
      <Forecast />
      <Footer />
    </div>
  );
}
