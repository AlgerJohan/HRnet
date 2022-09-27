import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";

const ChooseDateOfBirth = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const date = useSelector((state) => state.homePage.dateOfBirth);
  return (
    <div className="date">
      <p>Date of Birth</p>
      <DatePicker
        className="dateOfBirth"
        selected={selectedDate}
        date={date}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
};
export default ChooseDateOfBirth;
