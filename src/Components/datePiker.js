import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ChooseDate = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="date">
      <p>Start Date</p>
      <DatePicker className="datePiker" selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
    </div>
  );
};
export default ChooseDate;
