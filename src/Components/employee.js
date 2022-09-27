import React from "react";
import { Link } from "react-router-dom";
import DataTable from "./DataMapPages/dataTable";
import "./css/employee.css";
// import { useSelector } from "react-redux";
// import { selectEmployees } from "../features/homePageSLice";
const Employee = () => {
  // const  employee = useSelector(selectEmployees)
  return (
    <div id="employee-div">
      <h1>Current Employees</h1>
      <DataTable />
      <div id="linkReturn">
        <Link to="/" className="link">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Employee;
