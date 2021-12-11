// React
import { React, useContext } from "react";

// Components
import TopBar from "./Supporting/TopBar";
import Button from "./Supporting/Button";
import SectionCard from "./Supporting/SectionCard";
import SectionControls from "./Supporting/SectionControls";
import OverlayWindow from "./Supporting/OverlayWindow";

// Icons
import { ChartBarIcon, InformationCircleIcon } from "@heroicons/react/outline";

// Context
import { AppContext } from "./AppContext";
import ButtonToggleDarkMode from "./ButtonToggleDarkMode";

function App(props) {
  const context = useContext(AppContext);

  const windowStyle = context.darkMode
    ? "w-screen min-h-screen text-white bg-black"
    : "w-screen min-h-screen text-black bg-white";
  return (
    <div className={windowStyle}>
      <TopBar
        darkMode={context.darkMode}
        title="Analysis of Indian Elections using Twitter"
        logo={<ChartBarIcon className="w-6 h-6" />}
      >
        <Button type="icon" onClick="">
          <InformationCircleIcon className="w-6 h-6" />
        </Button>
        <ButtonToggleDarkMode />
      </TopBar>
      {context.topics.map((e) => (
        <SectionCard id={e.id} heading={e.heading} staggerTransition={true}>
          {e.description}
          <SectionControls>
            <Button onClick={e.onClick}>Run</Button>
          </SectionControls>
        </SectionCard>
      ))}
      ß
      {context.overlayWindowVisible && (
        <OverlayWindow title={context.overlayWindowTitle}>
          <SectionCard>Hello, World</SectionCard>
        </OverlayWindow>
      )}
    </div>
  );
}

export default App;
