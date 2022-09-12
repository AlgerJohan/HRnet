import React from "react";

const Fieldset = (props) =>
  props.data.map((name, index) => (
    <div key={index}>
      <label>{name.title2}</label>
      <input type="text" id="first-name" />
    </div>
  ));

export default Fieldset;
