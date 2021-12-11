import React, { useContext } from "react";
import { OverlayWindow, SectionCard } from "../ThemeControls";
import { AppContext } from "../Context";

export const ControversiesPage = () => {
  const context = useContext(AppContext);
  return (
    <OverlayWindow
      darkMode={context.darkMode}
      visible={context.selectedPage === "Controversies"}
      title="Controversies"
    >
      <SectionCard>Work in Progress</SectionCard>
    </OverlayWindow>
  );
};
