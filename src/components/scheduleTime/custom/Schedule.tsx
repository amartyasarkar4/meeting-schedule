import React, { useState } from "react";

import { format } from "date-fns";
import DateTimePicker from "./CustomDateTimepIck";
import TimeZoneSelector from "./TimeZoneSelector";
import DemoText from "./DemoText";
import { SchedulingStateEnum } from "@/types/loadtype";
import DetailsEnter from "./Details/DetailsEnter";
import ConfirmationModal from "./Details/ConfirmationModal";

const SchedulePage: React.FC = () => {
  const [schedulingState, setSchedulingState] = useState<SchedulingStateEnum>(
    SchedulingStateEnum.DATE_TIME_SET
  );
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

  // STAtes FOR DETAILS

  const [name, setName] = useState<string>();

  const [email, setEmail] = useState<string>();

  const [selectedAboutOptions, setSelectedAboutOptions] = useState<string[]>(
    []
  );
  const [selectedWork_forOptions, setSelectedWork_forOptions] = useState<
    string[]
  >([]);

  const [inputValue, setInputValue] = useState("");
  const [inputWorkspace, setInputWorkspace] = useState("");

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  const handleChangeWorkspace = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputWorkspace(event.target.value);
  };

  const toggleAboutOption = (option: string) => {
    if (selectedAboutOptions.includes(option)) {
      setSelectedAboutOptions(
        selectedAboutOptions.filter((item: string) => item !== option)
      );
    } else {
      setSelectedAboutOptions([...selectedAboutOptions, option]);
    }
  };

  const toggleWorkForOption = (option: string) => {
    if (selectedWork_forOptions.includes(option)) {
      setSelectedWork_forOptions(
        selectedWork_forOptions.filter((item: string) => item !== option)
      );
    } else {
      setSelectedWork_forOptions([...selectedWork_forOptions, option]);
    }
  };

  const show = () => {
    console.log("heggg is data", selectedDateTime);
    setSchedulingState(SchedulingStateEnum.DETAILS_ENTER);
  };

  const submitToschedule = () => {
    console.log("name", name);
    console.log("name", email);
    console.log("name", inputValue);
    console.log("name", inputWorkspace);
    console.log("name", selectedWork_forOptions);
    console.log("name", selectedAboutOptions);
    if (
      !name ||
      !email ||
      selectedAboutOptions.length == 0 ||
      selectedWork_forOptions.length == 0
    ) {
      alert("please add name  email and check some workfor and about options");
    } else {
      setSchedulingState(SchedulingStateEnum.CONFIRMATION);
    }
  };

  return (
    <div>
      {schedulingState == SchedulingStateEnum.CONFIRMATION ? (
        <div>
          <ConfirmationModal
            selectedAboutOptions={selectedAboutOptions}
            selectedWork_forOptions={selectedWork_forOptions}
            inputValue={inputValue}
            inputWorkspace={inputWorkspace}
            name={name}
            email={email}
            schedulingState={schedulingState}
            selectedDateTime={selectedDateTime}
            selectedTimeZone={selectedTimeZone}
          />
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row bg-slate-50 px-5 py-10">
          <div className="w-full sm:w-1/3">
            <DemoText
              schedulingState={schedulingState}
              selectedDateTime={selectedDateTime}
              selectedTimeZone={selectedTimeZone}
            />
          </div>
          {schedulingState == SchedulingStateEnum.DATE_TIME_SET && (
            <div className="w-full">
              <div className="flex justify-start m-4">
                <h1 className="text-sm font-semibold">Select a Date & Time</h1>
              </div>
              <DateTimePicker
                selectedDateTime={selectedDateTime}
                onDateTimeChange={handleDateTimeChange}
              />
              <br />

              <p className="font-semibold text-sm">Time zone</p>
              <TimeZoneSelector
                selectedTimeZone={selectedTimeZone}
                onTimeZoneChange={handleTimeZoneChange}
              />
              <br />
              <p>
                Selected Date and Time:{" "}
                {format(selectedDateTime, "MMMM d, yyyy h:mm aa")} (
                {selectedTimeZone})
              </p>

              <button
                className="bg-cyan-500 text-slate-50 px-2 py-1 rounded"
                onClick={show}
              >
                Next
              </button>
            </div>
          )}
          {schedulingState == SchedulingStateEnum.DETAILS_ENTER && (
            <div className="w-full sm:w-2/3">
              <DetailsEnter
                selectedAboutOptions={selectedAboutOptions}
                selectedWork_forOptions={selectedWork_forOptions}
                inputValue={inputValue}
                inputWorkspace={inputWorkspace}
                oninputValueChange={handleChange}
                onWorkspaceValueChange={handleChangeWorkspace}
                onsetSelectedAboutOptions={toggleAboutOption}
                onSelectedWork_forOptions={toggleWorkForOption}
                handleName={handleName}
                handleEmail={handleEmail}
                name={name}
                email={email}
                handleSchedule={submitToschedule}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SchedulePage;
