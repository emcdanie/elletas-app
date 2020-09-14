import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div class="row">
          <div class="col-12">
            <h1> {weatherData.city} </h1>
            <ul>
              <li class="title">Today </li>
              <li> {weatherData.date} </li>
              <li>
                <span className="text-capitalize">
                  {weatherData.description}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="weather-icon"
              />
              <div className="float-right">
                <span className="temperature">{weatherData.temperature}</span>
                <span className="units">
                  <a href="/" className="link">
                    °C
                  </a>{" "}
                  |
                  <a href="/" className="link">
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li className="current-data">
                {" "}
                Feels Like: {weatherData.feelslike} °C
              </li>
              <li className="current-data">
                Humidity: {weatherData.humidity} %
              </li>
              <li className="current-data">Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "717c122d03da5b502d476732c8793a31";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
