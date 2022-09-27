import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ChooseDate = ({ value, setStartDate }) => {
  return (
    <div className="date">
      <p>Start Date</p>
      <DatePicker className="datePiker" selected={value} date={value} onChange={(date) => setStartDate(date)} />
    </div>
  );
};
export default ChooseDate;
