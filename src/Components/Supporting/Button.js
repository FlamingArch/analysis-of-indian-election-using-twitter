import React from "react";

const Button = (props) => {
  function getButtonType(type) {
    var raisedButton =
      "bg-white text-black w-min px-4 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-110 transform transition-all";
    var iconButton =
      "hover:bg-blue-900 hover:bg-opacity-40 w-min rounded-lg p-2 transition-all";
    switch (type) {
      case "raised":
        return raisedButton;
      case "icon":
        return iconButton;
      default:
        return raisedButton;
    }
  }

  return (
    <button className={getButtonType(props.type)} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
