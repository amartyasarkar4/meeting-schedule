import React from "react";
import OwnDateTimePicker from "./OwnDateTimePicker";
import SchedulePage from "./custom/Schedule";
import FullModal from "./custom/FullModal";

const MainSchedule = () => {
  return (
    <div className="bg-slate-300">
      <h2 className="font-semibold ml-4">Click to schedule A meeting</h2>

      {/* <OwnDateTimePicker />
       */}
      {/* <SchedulePage /> */}
      <FullModal />
    </div>
  );
};

export default MainSchedule;
