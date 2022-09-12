import React from "react";

const Home = (props) =>
  props.data.map((name, index) => (
    <form key={index} id="create-employee">
      <label>{name.title}</label>
      <input type="text" id="first-name" />
    </form>
  ));

export default Home;
