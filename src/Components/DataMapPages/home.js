import React from "react";

const Home = (props) =>
  props.data.map((name, index) => (
    <form key={index} id="create-employee">
      <label htmlFor="first-name">{name.title}</label>
      <input type="text" id="first-name" />
    </form>
  ));

export default Home;
