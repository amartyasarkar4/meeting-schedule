import { loadOptionsAbout, loadOptionsWorkFor } from "@/api";
import { workForType } from "@/types/loadtype";
import Image from "next/image";
import React, { useState } from "react";

interface detailsProps {
  selectedAboutOptions: string[];
  selectedWork_forOptions: string[];
  inputValue: string;
  inputWorkspace: string;
  oninputValueChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onWorkspaceValueChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onsetSelectedAboutOptions: (value: string) => void;
  onSelectedWork_forOptions: (value: string) => void;
  handleName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string | undefined;
  email: string | undefined;
  handleSchedule: React.MouseEventHandler<HTMLButtonElement>;
}

const DetailsEnter: React.FC<detailsProps> = ({
  selectedAboutOptions,
  selectedWork_forOptions,
  inputValue,
  inputWorkspace,
  oninputValueChange,
  onWorkspaceValueChange,
  onsetSelectedAboutOptions,
  onSelectedWork_forOptions,
  handleName,
  handleEmail,
  name,
  email,
  handleSchedule,
}) => {
  const [allWorkForOptions, setAllWorkForOptions] = useState<workForType[]>([]);

  const [allAboutOptions, setAllAboutOptions] = useState<workForType[]>([]);

  // const [selectedAboutOptions, setSelectedAboutOptions] = useState<string[]>(
  //   []
  // );
  // const [selectedWork_forOptions, setSelectedWork_forOptions] = useState<
  //   string[]
  // >([]);

  // Handler function to toggle selection of an option
  // const toggleAboutOption = (option: string) => {
  //   if (selectedAboutOptions.includes(option)) {
  //     setSelectedAboutOptions(
  //       selectedAboutOptions.filter((item: string) => item !== option)
  //     );
  //   } else {
  //     setSelectedAboutOptions([...selectedAboutOptions, option]);
  //   }
  // };

  // const toggleWorkForOption = (option: string) => {
  //   if (selectedWork_forOptions.includes(option)) {
  //     setSelectedWork_forOptions(
  //       selectedWork_forOptions.filter((item: string) => item !== option)
  //     );
  //   } else {
  //     setSelectedWork_forOptions([...selectedWork_forOptions, option]);
  //   }
  // };

  React.useEffect(() => {
    const resAB = loadOptionsAbout();
    setAllAboutOptions(resAB);
    console.log("ghjgj", resAB);

    const resWK = loadOptionsWorkFor();
    setAllWorkForOptions(resWK);
  }, []);
  return (
    <div>
      <div className="w-full text-sm font-semibold ">
        <h2 className="text-md font-bold mb-2">Enter Details</h2>
        <div className="flex flex-col mb-2">
          <label className="">Name *</label>
          <input
            className="w-full border-2 border-zinc-300 rounded p-1"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={handleName}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="">Email *</label>
          <input
            className="border-2 border-zinc-300 rounded p-1"
            type="text"
            placeholder="account@refero.design"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="text-xs border-2 border-cyan-600 rounded-full px-2 py-1 w-28 text-center text-cyan-600">
          Add Guests
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-xs font-semibold">I want Fibery to work for:</h4>

        <div className="flex flex-col gap-4 mt-4">
          {allWorkForOptions.map((option, indx) => {
            return (
              <div key={option.id}>
                <label className="flex text-xs ">
                  <input
                    type="checkbox"
                    checked={selectedWork_forOptions.includes(option.label)}
                    onChange={() => onSelectedWork_forOptions(option.label)}
                    className="mr-2"
                  />
                  <div className="flex">
                    <Image
                      src={option.pic}
                      alt="option pic"
                      width={500}
                      height={500}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "5px",
                      }}
                    />
                    {option.label}
                  </div>
                </label>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <h4 className="text-xs font-semibold">I want Fibery to work for:</h4>

          <div className="flex flex-col gap-4 mt-4">
            {allAboutOptions.map((option, indx) => {
              return (
                <div key={option.id}>
                  <label className="flex text-xs ">
                    <input
                      type="checkbox"
                      checked={selectedAboutOptions.includes(option.label)}
                      onChange={() => onsetSelectedAboutOptions(option.label)}
                      className="mr-2"
                    />
                    <div className="flex">
                      <Image
                        src={option.pic}
                        alt="option pic"
                        width={500}
                        height={500}
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "5px",
                        }}
                      />
                      {option.label}
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-8 mb-8">
          <h4 className="text-xs font-semibold">
            Please ,share anything that will help prepare for our meeting
          </h4>
          <textarea
            value={inputValue}
            onChange={oninputValueChange}
            placeholder="Type your text here..."
            style={{
              width: "100%",
              minHeight: "6rem", // Adjust this value to show 4-5 lines
              resize: "vertical", // Allow vertical resizing
              padding: "0.5rem",
              fontSize: "11px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div className="mt-8 mb-8">
          <h4 className="text-xs font-semibold">
            Please ,share with us the name of your Fibery workspace (if any)
          </h4>
          <textarea
            value={inputWorkspace}
            onChange={onWorkspaceValueChange}
            placeholder="Type your Workspace name here..."
            style={{
              width: "100%",
              minHeight: "3rem", // Adjust this value to show 4-5 lines
              resize: "vertical", // Allow vertical resizing
              padding: "0.5rem",
              fontSize: "11px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        <div className="mt-8 mb-8">
          <button
            className="bg-cyan-500 text-slate-50 px-4 py-3 rounded-full text-xs font-bold"
            onClick={handleSchedule}
          >
            Schedule Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsEnter;
