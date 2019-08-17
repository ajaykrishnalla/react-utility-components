import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const DateComponent = () => {
  const [date, SetDate] = useState(new Date());
  const handleDate = e => {
    SetDate(e);
  };
  const handleForm = e => {
    e.preventDefault();
    console.log(date);
  };
  return (
    <React.Fragment>
      <h1>React Date picker</h1>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <DatePicker
            name="startdate"
            dateFormat="MM/dd/yyyy"
            selected={date}
            showTimeSelect
            onChange={handleDate}
          />
        </div>
        <div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default DateComponent;
