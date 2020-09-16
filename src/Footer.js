import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <div class="row">
        <div class="col-10" className="interested">
          Interested in climate change ?
          <div className="col-1">
            <a
              href="https://blog.feedspot.com/global_warming_blogs/"
              className="btn btn-light shadow-sm float-right"
            >
              Click Here{" "}
            </a>
          </div>{" "}
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
  );
}
