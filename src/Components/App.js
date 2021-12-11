// React
import { React, useContext } from "react";

// Components
import TopBar from "./Supporting/TopBar";
import Button from "./Supporting/Button";
import SectionCard from "./Supporting/SectionCard";
import SectionControls from "./Supporting/SectionControls";
import OverlayWindow from "./Supporting/OverlayWindow";

// Icons
import {
  ChartBarIcon,
  InformationCircleIcon,
  PauseIcon,
} from "@heroicons/react/outline";

// Context
import { AppContext } from "./AppContext";
import ButtonToggleDarkMode from "./ButtonToggleDarkMode";

function App(props) {
  const context = useContext(AppContext);

  const windowStyle = context.darkMode
    ? "w-screen min-h-screen text-white bg-black"
    : "w-screen min-h-screen text-black bg-white";
  return (
    <div
      className={windowStyle}
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/7103134/pexels-photo-7103134.jpeg?cs=srgb)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <TopBar
        material="clear"
        darkMode={context.darkMode}
        title="Analysis of Indian Elections using Twitter"
        logo={<ChartBarIcon className="w-6 h-6" />}
      >
        <Button type="icon" onClick="">
          <InformationCircleIcon className="w-6 h-6" />
        </Button>
        <ButtonToggleDarkMode />
      </TopBar>
      <div
        style={{
          gridTemplateRows: "1fr 1fr",
        }}
        className={`h-full grid`}
      >
        <div className="grid place-content-center">
          <PauseIcon className="w-12 h-12"></PauseIcon>
        </div>
        <div
          style={{
            WebkitBackdropFilter: "blur(48px)",
          }}
          className={`flex h-full px-8 backdrop-filter backdrop-blur-2xl bg-opacity-20 ${
            context.darkMode ? "bg-white" : "bg-black"
          }`}
        >
          {context.topics.map((e) => (
            <SectionCard
              id={e.id}
              heading={e.heading}
              staggerTransition={true}
              background={
                context.darkMode
                  ? "bg-black bg-opacity-80 text-white"
                  : "bg-white bg-opacity-80 text-black"
              }
            >
              <div
                style={{ gridTemplateRows: "1fr auto" }}
                className="h-full grid"
              >
                <p>{e.description}</p>
                <SectionControls>
                  <Button onClick={e.onClick}>Run</Button>
                </SectionControls>
              </div>
            </SectionCard>
          ))}
        </div>
      </div>
      {context.overlayWindowVisible && (
        <OverlayWindow title={context.overlayWindowTitle}>
          <SectionCard>Hello, World</SectionCard>
        </OverlayWindow>
      )}
    </div>
  );
}

export default App;
