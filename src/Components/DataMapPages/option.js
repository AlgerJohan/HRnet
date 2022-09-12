import React from "react";

const Select = (props) =>
  props.data.map((name, index) => (
    <option key={index} typeof="text">
      {name.title3}
    </option>
  ));

export default Select;
