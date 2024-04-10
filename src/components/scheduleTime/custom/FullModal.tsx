import React, { useState } from "react";
import SchedulePage from "./Schedule";
import DemoText from "./DemoText";

const FullModal = () => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date>(
    new Date(new Date().getTime() + 2 * 60 * 60 * 1000)
  );
  const [selectedTimeZone, setSelectedTimeZone] =
    useState<string>("Asia/Kolkata");

  const handleDateTimeChange = (dateTime: Date) => {
    setSelectedDateTime(dateTime);
  };

  const handleTimeZoneChange = (timeZone: string) => {
    setSelectedTimeZone(timeZone);
  };
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute top-5 right-[-35px] rotate-45 bg-slate-500 text-slate-50 text-xs w-36 flex flex-col items-center overflow-hidden font-semibold"
        style={{
          fontSize: "10px",
        }}
      >
        Powered by
        <p
          className="font-bold"
          style={{
            fontSize: "12px",
          }}
        >
          {" "}
          Amartya
        </p>
      </div>
      <div className="flex flex-col sm:flex-row bg-slate-50">
        <div className="w-full">
          <SchedulePage />
        </div>
      </div>
    </div>
  );
};

export default FullModal;
