import React from "react";
import DatePicker from "react-datepicker";
import range from "lodash/range";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

/**
 * It's a function that takes in a value and a setDateOfBirth function and returns a DatePicker
 * component that has a custom header.
 * @returns A React component that renders a date picker.
 */
const ChooseDateOfBirth = ({ value, setDateOfBirth }) => {
  const years = range(1960, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="date">
      <label htmlFor="date of birth">Date of Birth</label>
      <DatePicker
        id="date of birth"
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)}>
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
          </div>
        )}
        selected={value}
        onChange={(date) => setDateOfBirth(date)}
        dateFormat="dd/M/yyyy"
      />
      {/* <DatePicker className="dateOfBirth" selected={value} date={value} onChange={(date) => setDateOfBirth(date)} /> */}
    </div>
  );
};
export default ChooseDateOfBirth;

ChooseDateOfBirth.propTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
  setDateOfBirth: PropTypes.func.isRequired,
};
