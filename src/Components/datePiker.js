import React from "react";
import DatePicker from "react-datepicker";
import range from "lodash/range";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

/**
 * It's a custom date picker that allows the user to select a year and month from a dropdown menu.
 * @returns A React component that renders a date picker.
 */
const ChooseDate = ({ value, setStartDate }) => {
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
      <label htmlFor="start date">Start Date</label>
      <DatePicker
        id="start date"
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
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/M/yyyy"
      />
    </div>
  );
};
export default ChooseDate;

ChooseDate.propTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
  setStartDate: PropTypes.func.isRequired,
};
