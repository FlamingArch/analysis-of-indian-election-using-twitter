import { React, useState } from "react";
import Button from "./Supporting/Button";
import SectionCard from "./Supporting/SectionCard";
import SectionControls from "./Supporting/SectionControls";
import TopBar from "./TopBar";
import OverlayWindow from "./Supporting/OverlayWindow";


function App() {
  const [windowVisible, setWindowVisible] = useState(false);

  function displayOverlayWindow() {
    setWindowVisible(true);
  }

  return (
    <div className="w-screen min-h-screen bg-white">
      <TopBar />
      <div className="h-16"></div>
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
