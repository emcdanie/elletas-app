import React from "react";

import imgSunrise from "./images/sunrise.svg";
export default function Sunrise() {
  let weatherData = {
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-12">
          <p className="title">
            <img src={imgSunrise} className="sunrise-image" />
            Sunrise 6:45 | Sunset 21:06
          </p>
        </div>
      </div>
    </div>
  );
}
