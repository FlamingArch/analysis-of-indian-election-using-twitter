// React
import { React, useContext } from "react";

// Components
import OverlayWindow from "./Supporting/OverlayWindow";

// Context
import { AppContext } from "./AppContext";
import { HomeScreen } from "./Screens/HomeScreen";
import SectionCard from "./Supporting/SectionCard";

function App(props) {
  const context = useContext(AppContext);
  const windowStyle = context.darkMode
    ? "w-screen min-h-screen text-white bg-black"
    : "w-screen min-h-screen text-black bg-white";
  return (
    <div className={windowStyle}>
      <HomeScreen />

      <OverlayWindow
        visible={context.overlayWindowVisible}
        title={context.overlayWindowTitle}
      >
        <SectionCard>Hello, World</SectionCard>
      </OverlayWindow>
    </div>
  );
}

export default App;
