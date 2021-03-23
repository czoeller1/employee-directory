import React from "react";

function Row(props) {
  if (!props.employees)
    return (
      <tr>
        {/* <i className="fa fa-spinner fa-spin" aria-hidden="true" /> */}
      </tr>
    );
  else {
    return props.employees.map((emp) => {
      return (
        <tr key={emp.id}>
          <th scope="row">{emp.id}</th>
          <td>{emp.first}</td>
          <td>{emp.last}</td>
          <td>{emp.gender}</td>
          <td>{emp.age}</td>
          <td>{emp.email}</td>
          <td>
            <img
              className="img-thumbnail"
              src={emp.picture}
              alt={`${emp.first} ${emp.last}`}
            ></img>
          </td>
        </tr>
      );
    });
  }
}

export default Row;
