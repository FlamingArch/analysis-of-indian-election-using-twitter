import { React, useContext } from "react";
import Button from "./Supporting/Button";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { AppContext } from "./AppContext";

const ButtonToggleDarkMode = () => {
  const context = useContext(AppContext);
  return (
    <Button type="icon" onClick={context.toggleDarkMode}>
      {context.darkMode ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </Button>
  );
};

export default ButtonToggleDarkMode;
