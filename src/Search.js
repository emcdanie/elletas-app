import React, { useState } from "react";
import Forecast from "./Forecast";
import Weather from "./Weather.js";
import axios from "axios";
import "./Weather.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultcity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
      feelslike: response.data.feelslike,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "717c122d03da5b502d476732c8793a31";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit} className="search-form" value="Search">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter your location.."
                className="form-control shadow-sm"
                autofocus="on"
                autocomplete="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-light shadow-sm w-100"
              />
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-light shadow-sm w-100">
                Current
              </button>
            </div>
          </div>
        </form>
        <Weather data={weatherData} />
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
