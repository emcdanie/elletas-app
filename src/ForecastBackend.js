import React from "react";
import Icons from "./Icons";

export default function ForecastBackend(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

  return (
    <div className="WeatherForecastPreview col">
      {hours()}
      <Icons code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
