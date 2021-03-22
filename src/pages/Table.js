import React, { useEffect, useState } from "react";
import API from "../util/API";

function Table() {
  API.fetchUsers();

  return <div>Test Axios</div>;
}

export default Table;
