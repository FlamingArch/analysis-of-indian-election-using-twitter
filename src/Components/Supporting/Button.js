import React from "react";

export const Button = (props) => {
  return (
    <button
      className="bg-blue-700 text-white w-min px-4 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-110 transform transition-all"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
