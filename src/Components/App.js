import { React, useState } from "react";

import TopBar from "./Supporting/TopBar";
import Button from "./Supporting/Button";
import SectionCard from "./Supporting/SectionCard";
import SectionControls from "./Supporting/SectionControls";
import OverlayWindow from "./Supporting/OverlayWindow";

import { ChartBarIcon, InformationCircleIcon } from "@heroicons/react/outline";

function App() {
  const [windowVisible, setWindowVisible] = useState(false);

  function displayOverlayWindow() {
    setWindowVisible(true);
  }

  return (
    <div className="w-screen min-h-screen bg-white">
      <TopBar
        title="Analysis of Indian Elections using Twitter"
        logo={<ChartBarIcon className="w-6 h-6" />}
      >
        <Button type="icon" onClick="">
          <InformationCircleIcon className="w-6 h-6" />
        </Button>
      </TopBar>

      <SectionCard heading="Parties">
        Run Sentiment Analysis on tweets mentioning Top Political Parties.
        <SectionControls>
          <Button onClick={displayOverlayWindow}>Run</Button>
        </SectionControls>
      </SectionCard>

      <SectionCard heading="Leaders">
        Run Sentiment Analysis on tweets mentioning Top Political Leaders.
        <SectionControls>
          <Button onClick={displayOverlayWindow}>Run</Button>
        </SectionControls>
      </SectionCard>

      <SectionCard heading="Controversies">
        Run Sentiment Analysis on tweets mentioning Top Political Controversies.
        <SectionControls>
          <Button onClick={displayOverlayWindow}>Run</Button>
        </SectionControls>
      </SectionCard>

      {windowVisible && <OverlayWindow>Hello, World</OverlayWindow>}
    </div>
  );
}

export default App;
