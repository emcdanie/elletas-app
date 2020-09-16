import React from "react";
import FormatDate from "./FormatDate";
import Icons from "./Icons";

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
              <Icons code={props.data.icon} alt={props.data.description} />
            </div>

            <div className="float-right">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
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
              Feels Like: {props.data.feels_like} °C
            </li>
            <li className="current-data">Humidity: {props.data.humidity} %</li>
            <li className="current-data">Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
