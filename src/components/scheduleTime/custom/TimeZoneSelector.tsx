import React from "react";
import moment from "moment-timezone";

interface TimeZoneSelectorProps {
  selectedTimeZone: string;
  onTimeZoneChange: (timeZone: string) => void;
}

const TimeZoneSelector: React.FC<TimeZoneSelectorProps> = ({
  selectedTimeZone,
  onTimeZoneChange,
}) => {
  const timeZones = moment.tz.names();

  return (
    <select
      className="w-52 rounded text-sm"
      value={selectedTimeZone}
      onChange={(e) => onTimeZoneChange(e.target.value)}
    >
      {timeZones.map((timeZone) => (
        <option key={timeZone} value={timeZone}>
          {timeZone}
        </option>
      ))}
    </select>
  );
};

export default TimeZoneSelector;
