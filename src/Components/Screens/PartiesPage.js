import React, { useContext } from "react";
import { OverlayWindow, SectionCard } from "../ThemeControls";
import { AppContext } from "../Context";

export const PartiesPage = () => {
  const context = useContext(AppContext);
  return (
    <OverlayWindow
      darkMode={context.darkMode}
      visible={context.selectedPage === "Parties"}
      title="Parties"
    >
      <SectionCard background="bg-red-700">Something went wrong</SectionCard>
    </OverlayWindow>
  );
};
