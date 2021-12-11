import React, { useContext } from "react";
import { OverlayWindow, SectionCard } from "../ThemeControls";
import { AppContext } from "../Context";

export const LeadersPage = () => {
  const context = useContext(AppContext);
  return (
    <OverlayWindow
      darkMode={context.darkMode}
      visible={context.selectedPage === "Leaders"}
      title="Leaders"
    >
      <SectionCard>Work in Progress</SectionCard>
    </OverlayWindow>
  );
};
