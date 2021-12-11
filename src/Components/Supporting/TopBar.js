import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Button from "./Button";

const TopBar = (props) => {
  return (
    <div className="relative h-20 z-10">
      <div className={`w-screen ${props.darkMode ? "bg-black" : "bg-white" } bg-opacity-80 backdrop-filter backdrop-blur-xl fixed`}>
        <div
          style={{ gridTemplateColumns: "1fr auto 1fr" }}
          className="grid p-4 h-min"
        >
          <div className="flex flex-row">
            {props.closeButtonAction && (
              <Button type="icon" onClick={props.closeButtonAction}>
                <ArrowLeftIcon className="w-6 h-6" />
              </Button>
            )}
            {props.logo && (
              <div className="w-min p-2 transition-all">{props.logo}</div>
            )}
          </div>
          <div className="h-min">
            <div className="grid place-content-center h-full text-lg">
              {props.title}
            </div>
          </div>
          <div className="flex flex-row-reverse">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
