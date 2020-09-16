import React from "react";
import FormatDate from "./FormatDate";
import Icons from "./Icons";
import TempConversion from "./TempConversion";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div class="row">
        <div class="col-12">
          <h1> {props.data.city} </h1>
          <ul>
            <li class="title">Today </li>
            <li>
              <FormatDate date={props.data.date} />
            </li>
            <li>
              <span className="text-capitalize">{props.data.description}</span>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <Icons
                className="weather-icon"
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>

            <div className="float-right">
              <TempConversion celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li className="current-data">
              {" "}
              Feels Like: {Math.round(props.data.feels_like)} °C
            </li>
            <li className="current-data">Humidity: {props.data.humidity} %</li>
            <li className="current-data">Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
