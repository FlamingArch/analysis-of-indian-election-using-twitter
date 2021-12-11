import { React, useContext } from "react";
import { AppContext } from "./AppContext";
import HomeScreen from "./Screens/HomeScreen";
import { Window, SectionCard, OverlayWindow } from "./ThemeControls";

function App(props) {
  const context = useContext(AppContext);
  return (
    <Window darkMode={context.darkMode}>
      <HomeScreen />
      <OverlayWindow
        visible={context.overlayWindowVisible}
        title={context.overlayWindowTitle}
      >
        <SectionCard>Hello, World</SectionCard>
      </OverlayWindow>
    </Window>
  );
}

export default App;
