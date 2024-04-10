import { SchedulingStateEnum } from "@/types/loadtype";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons/faEarthAsia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns/fp";
import Image from "next/image";
import React from "react";

export const getTimeExtractFromDateTime = (selectedDateTime: Date) => {
  const dateObj = new Date(selectedDateTime);

  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

  // Create the formatted time string with AM/PM
  const timeString = `${formattedHour}:${
    minute < 10 ? "0" : ""
  }${minute} ${ampm}`;

  return timeString;
};
export interface DateAndTimeZoneProps {
  schedulingState: SchedulingStateEnum;
  selectedDateTime: Date;
  selectedTimeZone: string;
}

const DemoText: React.FC<DateAndTimeZoneProps> = ({
  schedulingState,
  selectedDateTime,
  selectedTimeZone,
}) => {
  const startTime = getTimeExtractFromDateTime(selectedDateTime);

  const endTime = getTimeExtractFromDateTime(
    new Date(new Date(selectedDateTime).getTime() + 45 * 60 * 1000)
  );

  return (
    <div className="h-full p-5 flex flex-col justify-between	">
      <div className="">
        <div className="flex justify-center">
          <Image
            src="/fibery.png"
            alt="logoImg"
            width={500}
            height={500}
            style={{
              width: "150px",
              height: "150px",
            }}
          />
        </div>
        <div className="my-3">
          <h3 className="text-lg font-bold">Fibery Demo</h3>
        </div>
        <div className="my-2 text-sm font-semibold text-zinc-500">
          <FontAwesomeIcon icon={faClock} /> <span>45 min</span>
        </div>

        {schedulingState != SchedulingStateEnum.DATE_TIME_SET ? (
          <div>
            <div>
              {" "}
              {/* <p>
                Selected Date and Time: {selectedDateTime?.toString()} (
                {selectedTimeZone})
              </p> */}
              <div className="flex">
                <FontAwesomeIcon icon={faCalendar} />
                <div className="flex flex-col ml-2 mb-2 justify-center text-xs">
                  <p>
                    {startTime}--{endTime}
                  </p>
                  <p className="">
                    {format("EEEE, MMMM d, yyyy ", selectedDateTime)}{" "}
                  </p>
                </div>
              </div>
              <div className="flex text-xs mb-4">
                <FontAwesomeIcon icon={faEarthAsia} />
                <p className="ml-2">{selectedTimeZone}</p>
              </div>
            </div>
          </div>
        ) : null}

        <p className="text-sm ">
          Book a meeting with our Fibery team. Talk to a real person about how
          to get your processes set up with us or not
        </p>
      </div>
      <div>
        <p className="text-sm text-sky-600">Cookie settings</p>
      </div>
    </div>
  );
};

export default DemoText;
