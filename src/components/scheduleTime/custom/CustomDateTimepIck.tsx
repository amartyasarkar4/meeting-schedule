import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { DateTime } from "luxon"; // Use luxon for date/time formatting
import "./newCustom.css";
import TimeZoneSelector from "./TimeZoneSelector";
import { format } from "date-fns";

export interface DateTimePickerProps {
  selectedDateTime: Date | null;
  onDateTimeChange: (date: Date) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  selectedDateTime,
  onDateTimeChange,
}) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(true);
  return (
    <div>
      {/* <DatePicker
        selected={selectedDateTime}
        onChange={(date: Date) => onDateTimeChange(date)}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
        timeIntervals={15}
        inline
      /> */}

      {isDatePickerOpen && (
        <div className="date-time-picker-modal">
          <DatePicker
            selected={selectedDateTime}
            onChange={(date: Date) => onDateTimeChange(date)}
            //   onChange={handleDateTimeChange}
            showTimeSelect
            timeIntervals={30}
            dateFormat="MMMM d, yyyy h:mm aa"
            inline
            minDate={new Date(new Date().getTime() + 2 * 60 * 60 * 100)} // Disable past days starting from today and upcoming 2 hours also
          />

          {/* <p className="font-semibold text-sm">Time zone</p>

            <TimeZoneSelector
              selectedTimeZone={selectedTimeZone}
              onTimeZoneChange={handleTimeZoneChange}
            />

            <p>
              Selected Date and Time: 
              {selectedTimeZone}
            </p>

            <button onClick={show}>show</button> */}
        </div>
      )}
    </div>
  );
};

export default DateTimePicker;
