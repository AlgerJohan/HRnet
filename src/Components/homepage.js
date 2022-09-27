import React, { useState } from "react";
import "./css/homepage .css";
import { Link } from "react-router-dom";
// import Name from "./DataMapPages/name";
// import Fieldset from "./DataMapPages/fieldset";
// import Department from "./DataMapPages/Department";
import StartDate from "./datePiker";
import DateOfBirth from "./dateOfBirth";
import { useDispatch } from "react-redux";
import { addEmployees } from "../features/homePageSLice";
import { states } from "./DataMapPages/homePageData";
const Homepage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployees({ firstName, lastName, street, city, state, zipCode, department }));
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addEmployees(editData()));
  // };
  return (
    <div className="container">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="blocPage">
        <Link to="/employee" className="link">
          View Current Employees
        </Link>
        <h2>Create Employee</h2>
        <form id="create-employee" onSubmit={(e) => handleSubmit(e)}>
          {/* <Name /> */}
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              className="input-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" className="input-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <DateOfBirth />
          <StartDate />
          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" value={street} onChange={(e) => setStreet(e.target.value)} />

            <label htmlFor="city">City</label>
            <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />

            <label htmlFor="state">State</label>
            <select name="state" id="state" value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state.abbreviation} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
          </fieldset>
          {/* <Fieldset /> */}
          {/* <Department /> */}
          <label htmlFor="department">Department</label>
          <select value={department} name="department" id="department" onChange={(e) => setDepartment(e.target.value)}>
            <option value="">Select a department</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
          <button type="submit" className="save">
            Save
          </button>
        </form>
      </div>
      {/* <div id="confirmation" className="modal">
        Employee Created!
      </div> */}
    </div>
  );
};

export default Homepage;
