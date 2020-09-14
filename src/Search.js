import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form" value="Search">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter your location.."
              className="form-control shadow-sm"
              autofocus="on"
              autocomplete="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-light shadow-sm w-100"
            />
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-light shadow-sm w-100">
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
