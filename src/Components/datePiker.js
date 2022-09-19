import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ChooseDate = () => {
  let [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="date">
      <p>Start Date</p>
      <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
    </div>
  );
};
export default ChooseDate;
