import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="TempConversion">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unitC">
          °C |{" "}
          <a href="/" onClick={showFahrenheit} className="unitF">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TempConversion">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
