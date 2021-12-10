import { React, useState } from "react";

import TopBar from "./Supporting/TopBar";
import Button from "./Supporting/Button";
import SectionCard from "./Supporting/SectionCard";
import SectionControls from "./Supporting/SectionControls";
import OverlayWindow from "./Supporting/OverlayWindow";

import {
  ChartBarIcon,
  InformationCircleIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";

function App(props) {
  const [windowVisible, setWindowVisible] = useState(false);
  const [windowTitle, setWindowTitle] = useState("");

  function displayOverlayWindow(pageTitle) {
    setWindowTitle(pageTitle);
    setWindowVisible(true);
  }

  const listItems = [
    {
      id: 1,
      heading: "Parties",
      description:
        "Run Sentiment Analysis on tweets mentioning Top Political Parties.",
      onClick: function () {
        displayOverlayWindow("Parties");
      },
    },
    {
      id: 2,
      heading: "Leaders",
      description:
        "Run Sentiment Analysis on tweets mentioning Top Political Leaders.",
      onClick: function () {
        displayOverlayWindow("Leaders");
      },
    },
    {
      id: 3,
      heading: "Controversies",
      description:
        "Run Sentiment Analysis on tweets mentioning Top Political Controversies.",
      onClick: function () {
        displayOverlayWindow("Controversies");
      },
    },
  ];

  return (
    <div
      className={
        "w-screen min-h-screen" + props.darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }
    >
      <TopBar
        title="Analysis of Indian Elections using Twitter"
        logo={<ChartBarIcon className="w-6 h-6" />}
      >
        <Button type="icon" onClick="">
          <InformationCircleIcon className="w-6 h-6" />
        </Button>
        <Button type="icon" onClick="">
          {props.darkMode ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </Button>
      </TopBar>

      {listItems.map((e) => (
        <SectionCard id={e.id} heading={e.heading} staggerTransition={true}>
          {e.description}
          <SectionControls>
            <Button onClick={e.onClick}>Run</Button>
          </SectionControls>
        </SectionCard>
      ))}

      {windowVisible && (
        <OverlayWindow title={windowTitle}>
          <SectionCard>Hello, World</SectionCard>
        </OverlayWindow>
      )}
    </div>
  );
}

export default App;
