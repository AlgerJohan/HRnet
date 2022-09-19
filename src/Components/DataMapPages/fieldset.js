import React from "react";

const Fieldset = (props) =>
  props.data.map((name, index) => (
    <div key={index}>
      <label htmlFor="name">{name.title2}</label>
      <input type="text" id="address-name" />
    </div>
  ));

export default Fieldset;
