import React from "react";

export default function Weather() {
  let weatherData = {
    city: "Barcelona",
    temperature: 30,
    date: "Saturday Aug 1, 2020 | Time 16:10",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    feelslike: 34,
    humidity: 66,
    wind: 11,
  };

  return (
    <div className="Weather">
      <div class="row">
        <div class="col-12">
          <h1> {weatherData.city} </h1>
          <ul>
            <li class="title">Today </li>
            <li> {weatherData.date} </li>
            <li>
              <span>{weatherData.description}</span>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={weatherData.imgUrl}
              alt={"sunhappy.svg"}
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
            <li className="current-data">Humidity: {weatherData.humidity} %</li>
            <li className="current-data">Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
