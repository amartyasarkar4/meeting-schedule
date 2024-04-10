import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "./custom-styles.css";

const OwnDateTimePicker = () => {
  const [value, onChange] = useState<Value>(new Date());

  const show = () => {
    console.log("heggg is data", value);
  };

  return (
    <div className="flex flex-col items-center ">
      <DateTimePicker
        // format="y-MM-dd h:mm:ss a"
        format="y-MM-dd h:mm a"
        autoFocus={true}
        onChange={onChange}
        value={value}
        isCalendarOpen={true}
        // isClockOpen={true}
      />
      <button onClick={show}>Show Time & Date</button>
    </div>
  );
};

export default OwnDateTimePicker;
