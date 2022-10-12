import React, { useState } from "react";
import "./css/homepage .css";
import { Link } from "react-router-dom";
import StartDate from "./datePiker";
import DateOfBirth from "./dateOfBirth";
import { useDispatch } from "react-redux";
import { addEmployees } from "../features/homePageSLice";
import { states } from "./DataMapPages/homePageData";
import Modal from "./modal";
import PropTypes from "prop-types";

const Homepage = () => {
  /* A hook that allows you to use state in a functional component. */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  /**
   * If the user has entered all the required fields, then add the employee to the database.
   * @param e - event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && dateOfBirth && startDate && street && city && state && zipCode && department) {
      dispatch(addEmployees({ firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode, department }));
      setShowModal(true);
    }
  };
  /* Returning the JSX code. */
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
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              className="input-name"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              className="input-name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <DateOfBirth setDateOfBirth={setDateOfBirth} value={dateOfBirth} />
          <StartDate setStartDate={setStartDate} value={startDate} />
          <fieldset className="address">
            <legend>Address</legend>
            <label htmlFor="street">Street</label>
            <input id="street" type="text" value={street} required onChange={(e) => setStreet(e.target.value)} />
            <label htmlFor="city">City</label>
            <input id="city" type="text" value={city} required onChange={(e) => setCity(e.target.value)} />
            <label htmlFor="state">State</label>
            <select name="state" id="state" value={state} required onChange={(e) => setState(e.target.value)}>
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state.abbreviation} value={state.name} required>
                  {state.name}
                </option>
              ))}
            </select>
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" value={zipCode} required onChange={(e) => setZipCode(e.target.value)} />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            value={department}
            name="department"
            id="department"
            required
            onChange={(e) => setDepartment(e.target.value)}
          >
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
      <Modal show={showModal} />
    </div>
  );
};

export default Homepage;

Homepage.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  startDate: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zipCode: PropTypes.string,
  department: PropTypes.string,
};
