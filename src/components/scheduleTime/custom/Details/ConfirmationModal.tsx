import { SchedulingStateEnum } from "@/types/loadtype";
import Image from "next/image";
import React from "react";
import { getTimeExtractFromDateTime } from "../DemoText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns/fp";

interface confirmationProps {
  selectedAboutOptions: string[];
  selectedWork_forOptions: string[];
  inputValue: string;
  inputWorkspace: string;
  name: string | undefined;
  email: string | undefined;
  schedulingState: SchedulingStateEnum;
  selectedDateTime: Date;
  selectedTimeZone: string;
}
const ConfirmationModal: React.FC<confirmationProps> = ({
  selectedAboutOptions,
  selectedWork_forOptions,
  inputValue,
  inputWorkspace,
  name,
  email,
  schedulingState,
  selectedDateTime,
  selectedTimeZone,
}) => {
  const startTime = getTimeExtractFromDateTime(selectedDateTime);

  const endTime = getTimeExtractFromDateTime(
    new Date(new Date(selectedDateTime).getTime() + 45 * 60 * 1000)
  );

  return (
    <div>
      <div className="flex flex-col items-center mt-8">
        <Image
          src="/people-5.jpg"
          alt="pep"
          width={500}
          height={500}
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
          }}
        />
        <div className="flex">
          <Image
            src="/success.svg"
            alt="done"
            width={500}
            height={500}
            style={{
              height: "24px",
              width: "24px",
              borderRadius: "50%",
            }}
          />
          <h2 className="text-xl font-bold ml-4">You are scheduled</h2>
        </div>
        <div>
          <p className="text-xs mt-4">
            A calender invitation has been sent to your email address.
          </p>
        </div>
        <div className="border border-zinc-300 w-full  sm:w-1/2 p-4 text-xs font-semibold text-zinc-600 rounded mb-8">
          <h2 className="text-lg font-bold text-zinc-800">Fibery Demo</h2>
          <div className="flex items-center">
            <Image
              src="/user.svg"
              alt="user"
              width={500}
              height={500}
              style={{
                height: "15px",
                width: "15px",
                borderRadius: "50%",
              }}
            />{" "}
            <p className="ml-2">{name}</p>
          </div>
          <div className="flex items-center mt-2">
            <Image
              src="/gmail.svg"
              alt="user"
              width={500}
              height={500}
              style={{
                height: "15px",
                width: "15px",
                borderRadius: "50%",
              }}
            />{" "}
            <p className="ml-2">{email}</p>
          </div>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faCalendar} />
            <div className="flex  ml-2 items-center text-xs">
              <p>
                {startTime}--{endTime}
                {",,  "}
              </p>
              <p className="">
                {format("EEEE, MMMM d, yyyy ", selectedDateTime)}{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faEarthAsia} />{" "}
            <p className="ml-2">{selectedTimeZone}</p>
          </div>
          <div className="flex mt-2 items-center">
            <Image
              src="/webcam.svg"
              alt="user"
              width={500}
              height={500}
              style={{
                height: "15px",
                width: "15px",
                borderRadius: "50%",
              }}
            />{" "}
            <p className="ml-2">{"Web Conferencing details to follow"}</p>
          </div>
          <div className="flex flex-col gap-2 mt-4 ">
            <div>About:{selectedAboutOptions}</div>
            <div>Work For:{selectedWork_forOptions}</div>
            <div>Shared content: {inputValue}</div>
            <div>Fibery workspace (if any):{inputWorkspace}</div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 border-b border-zinc-300 h-4  mb-8"></div>

        <div className="w-full px-2 sm:w-1/2 flex flex-col items-start ">
          <h4 className="text-sm font-bold">
            Schedule your own meetings with Calendly for free
          </h4>
          <p className="text-xs">
            Eliminate the back-and-forth emails for finding time
          </p>
          <div className="flex w-full gap-4 mb-4 mt-4">
            <div
              className="flex w-1/2 items-center border-2 border-zinc-300 rounded-full justify-center"
              style={{
                padding: "4px",
              }}
            >
              <Image
                src="/google.svg"
                alt="googleOauth"
                width={500}
                height={500}
                style={{
                  height: "25px",
                  width: "25px",
                }}
              />
              <p className="text-xs ml-4">Sign Up with Google</p>
            </div>
            <div
              className="flex w-1/2 items-center border-2 border-zinc-300 rounded-full justify-center"
              style={{
                padding: "4px",
              }}
            >
              <Image
                src="/microsoft.svg"
                alt="microsoftOauth"
                width={500}
                height={500}
                style={{
                  height: "25px",
                  width: "25px",
                }}
              />
              <p className="text-xs ml-4">Sign Up with Microsoft</p>
            </div>
          </div>
        </div>
        <div className="flex text-center text-xs text-cyan-600 justify-center mb-8">
          Sign up with work email
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
