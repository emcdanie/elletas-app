import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <div class="row">
        <div class="col-8">
          <p className="interested">Interested in climate change ?</p>
          <div className="col-4">
            <a
              href="https://blog.feedspot.com/global_warming_blogs/"
              className="btn btn-light shadow-sm"
            >
              Click Here{" "}
            </a>
          </div>
        </div>
      </div>
      <p>
        {" "}
        Coded by{" "}
        <a
          className="link"
          href="https://github.com/emcdanie/WeatherAppProject"
        >
          {" "}
          Elleta Mcdaniel
        </a>{" "}
      </p>
    </div>
  );
}
