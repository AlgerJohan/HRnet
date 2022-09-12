import React from "react";
import "./css/homepage .css";
import { Link } from "react-router-dom";
import Home from "./DataMapPages/home";
import Fieldset from "./DataMapPages/fieldset";
import Option from "./DataMapPages/option";
import { data } from "./DataMapPages/homePageData";
import { data2 } from "./DataMapPages/homePageData";
import { data3 } from "./DataMapPages/homePageData";

const Homepage = () => {
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
        <Home data={data} />
        <fieldset className="address">
          <legend>Address</legend>
          <Fieldset data={data2} />
        </fieldset>
        <label className="department">Department</label>
        <select name="department" id="department">
          <Option data={data3} />
        </select>
        <button>Save</button>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </div>
  );
};

export default Homepage;
