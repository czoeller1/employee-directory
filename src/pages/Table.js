import React, { useEffect, useState } from "react";
import API from "../util/API";
import Row from "../components/Row";
import Filter from "../components/Filter";

function Table() {
  const [employees, setEmployees] = useState();
  const [display, changeDisplay] = useState();

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.fetchUsers()
      .then((users) => {
        setEmployees(users);
        changeDisplay(users);
      })

      .catch((err) => console.log(err));
  }

  const filterDisplay = (e) => {
    changeDisplay(
      employees.filter((employee) => employee.gender === e.target.id)
    );
  };

  const sortDisplay = (e) => {
    let ages = employees.map((a) => a);
    ages.sort((a, b) => (e.target.id === "<" ? a.age - b.age : b.age - a.age));
    changeDisplay(ages);
  };

  const clearFilter = () => {
    changeDisplay(employees);
  };

  //console.log(employees);
  return (
    <div className="w-50 mx-auto">
      <Filter
        filterDisplay={filterDisplay}
        clearFilter={clearFilter}
        sortDisplay={sortDisplay}
      ></Filter>
      {/* <div className=" d-flex justify-content-between">
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
            <button className="dropdown-item" id="male" onClick={filterDisplay}>
              Male
            </button>
            <hr></hr>
            <button
              className="dropdown-item"
              id="female"
              onClick={filterDisplay}
            >
              Female
            </button>
          </div>
        </div>
        <button className="btn btn-secondary" onClick={clearFilter}>
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
            <button className="dropdown-item" id="<" onClick={sortDisplay}>
              Ascending
            </button>
            <hr></hr>
            <button className="dropdown-item" id=">" onClick={sortDisplay}>
              Descending
            </button>
          </div>
        </div>
      </div> */}

      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Picture</th>
          </tr>
        </thead>
        <tbody>
          <Row employees={display}></Row>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
