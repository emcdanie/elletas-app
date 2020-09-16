import React from "react";
import imgSunrise from "./images/sunrise.svg";
export default function Sunrise(props) {
  function formatTime(time) {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-12">
          <p className="title">
            <img src={imgSunrise} className="sunrise-image" />
            Sunrise {formatTime(props.data.sunrise)} | Sunset{" "}
            {formatTime(props.data.sunset)}
          </p>
        </div>
      </div>
    </div>
  );
}
