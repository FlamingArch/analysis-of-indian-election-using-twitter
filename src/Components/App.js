import { React, useContext } from "react";
import { AppContext } from "./Context";
import { ControversiesPage } from "./Screens/ControversiesPage";
import HomeScreen from "./Screens/HomeScreen";
import { LeadersPage } from "./Screens/LeadersPage";
import { PartiesPage } from "./Screens/PartiesPage";
import { Window } from "./ThemeControls";

function App(props) {
  const context = useContext(AppContext);
  return (
    <Window darkMode={context.darkMode}>
      <HomeScreen />
      <PartiesPage />
      <LeadersPage />
      <ControversiesPage />
    </Window>
  );
}

export default App;
