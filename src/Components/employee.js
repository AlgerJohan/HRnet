import React from "react";
import { Link } from "react-router-dom";
import DataTable from "./DataMapPages/dataTable";
import "./css/employee.css";
import { useSelector } from "react-redux";
import { selectEmployees } from "../features/homePageSLice";
import PropTypes from "prop-types";
/**
 * The Employee function is a React component that uses the useSelector hook to get the employee data
 * from the Redux store and then passes that data to the DataTable component.
 *
 * The DataTable component is a React component that uses the useTable hook from the react-table
 * library to create a table.
 *
 * The useTable hook takes the employee data and returns a table.
 *
 * The table is then rendered in the Employee component.
 *
 * The Employee component is then rendered in the App component.
 *
 * The App component is then rendered in the index.js file.
 *
 * The index.js file is then rendered in the index.html file.
 *
 * The index.html file is then rendered in the browser.
 *
 * The browser then displays the table.
 *
 * The table is then displayed in the browser.
 * @returns The employee object is being returned.
 */
const Employee = () => {
  const employee = useSelector(selectEmployees);

  return (
    <div id="employee-div">
      <h1>Current Employees</h1>
      <DataTable data={employee} />
      <div id="linkReturn">
        <Link to="/" className="link">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Employee;

Employee.propTypes = {
  employee: PropTypes.array,
};
