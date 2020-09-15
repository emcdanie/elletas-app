import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastBackend from "./ForecastBackend";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
        <ForecastBackend data={forecast.list[0]} />
        <ForecastBackend data={forecast.list[1]} />
        <ForecastBackend data={forecast.list[2]} />
        <ForecastBackend data={forecast.list[3]} />
        <ForecastBackend data={forecast.list[4]} />
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
