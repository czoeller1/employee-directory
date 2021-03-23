import React from "react";

function Filter(props) {
  return (
    <div className=" d-flex justify-content-between">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="filter"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filter by Gender
        </button>
        <div className="dropdown-menu" aria-labelledby="filter">
          <button
            className="dropdown-item"
            id="male"
            onClick={props.filterDisplay}
          >
            Male
          </button>
          <hr></hr>
          <button
            className="dropdown-item"
            id="female"
            onClick={props.filterDisplay}
          >
            Female
          </button>
        </div>
      </div>
      <button className="btn btn-secondary" onClick={props.clearFilter}>
        Reset
      </button>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="sort"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sort by Age
        </button>
        <div className="dropdown-menu" aria-labelledby="sort">
          <button className="dropdown-item" id="<" onClick={props.sortDisplay}>
            Ascending
          </button>
          <hr></hr>
          <button className="dropdown-item" id=">" onClick={props.sortDisplay}>
            Descending
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
