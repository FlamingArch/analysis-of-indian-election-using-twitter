import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Button from "./Button";

const TopBar = (props) => {
  function getMaterialStyles(material) {
    switch (material) {
      case "solid":
        return "bg-opacity-100";
      case "acrylic":
        return "bg-opacity-80 backdrop-filter backdrop-blur-xl";
      case "clear":
        return "bg-opacity-0";
      case "transparent":
        return "bg-opacity-80";
      default:
        return "bg-opacity-100";
    }
  }

  return (
    <div className="relative h-20 z-10">
      <div
        className={`w-screen ${
          props.darkMode ? "bg-black" : "bg-white"
        }  ${getMaterialStyles(props.material ?? "solid")} fixed`}
      >
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
