import React from "react";
import { Link } from "react-router-dom";

import "./css/employee.css";
const Employee = () => {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <Link to="/" className="link">
        Home
      </Link>
    </div>
  );
};

export default Employee;
