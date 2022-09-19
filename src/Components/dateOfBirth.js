import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ChooseDateOfBirth = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="date">
      <p>Date of Birth</p>
      <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
    </div>
  );
};
export default ChooseDateOfBirth;
