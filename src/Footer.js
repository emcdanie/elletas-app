import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <div class="row">
        <div class="col-8" className="interested">
          Interested in climate change ?
        </div>
        <div className="col-4">
          <a
            href="https://blog.feedspot.com/global_warming_blogs/"
            className="btn btn-light shadow-sm"
          >
            Click Here{" "}
          </a>
        </div>
      </div>
      <div>
        {" "}
        <div class="row">
          <div class="col-12" className="coded">
            Coded by{" "}
            <a
              className="link"
              href="https://github.com/emcdanie/WeatherAppProject"
            >
              {" "}
              Elleta Mcdaniel
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
