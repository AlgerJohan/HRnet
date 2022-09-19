import React from "react";
import "./css/homepage .css";
import { Link } from "react-router-dom";
import Home from "./DataMapPages/home";
import Fieldset from "./DataMapPages/fieldset";
import Option from "./DataMapPages/option";
import StartDate from "./datePiker";
import DateOfBirth from "./dateOfBirth";
import { data, data2, data3 } from "./DataMapPages/homePageData";
// import { useDispatch, useSelector } from "react-redux";
// import { setValue } from "../features/homePageSLice";

const Homepage = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState(null);
  // const [startDate, setStartDate] = useState(null);
  // const [zipCode, setZipCode] = useState(null);
  // const [department, setDepartment] = useState(null);
  // const [birth, setBirth] = useState(null);
  // const [street, setStreet] = useState(null);
  // const [city, setCity] = useState(null);
  // const [State, setState] = useState(null);
  // const values = {
  //   // firstName,
  //   // lastName,
  //   // startDate,
  //   // zipCode,
  //   // department,
  //   birth,
  //   // street,
  //   // city,
  //   // State,
  // };
  // console.log(values);

  // const value = useSelector((state) => state.homePage.value);
  // const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(setValue());
    // console.log(setValue());
  };
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
          <Home data={data} />

          <DateOfBirth />
          <StartDate />
          <fieldset className="address">
            <legend>Address</legend>
            <Fieldset data={data2} />
          </fieldset>
          <label htmlFor="department" className="department">
            Department
          </label>
          <select name="department" id="department">
            <Option data={data3} />
          </select>
          <button className="save">Save</button>
        </form>
      </div>
      {/* <div id="confirmation" className="modal">
        Employee Created!
      </div> */}
    </div>
  );
};

export default Homepage;
