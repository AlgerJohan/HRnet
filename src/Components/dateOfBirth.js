import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ChooseDateOfBirth = ({ value, setDateOfBirth }) => {
  return (
    <div className="date">
      <p>Date of Birth</p>
      <DatePicker className="dateOfBirth" selected={value} date={value} onChange={(date) => setDateOfBirth(date)} />
    </div>
  );
};
export default ChooseDateOfBirth;
