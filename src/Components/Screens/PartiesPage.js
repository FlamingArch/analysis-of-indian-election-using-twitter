import React, { useContext } from "react";
import {
  OverlayWindow,
  Preloader,
  SectionCard,
  SectionHeading,
} from "../ThemeControls";
import { AppContext } from "../Context";

export const PartiesPage = () => {
  const context = useContext(AppContext);
  return (
    <OverlayWindow
      darkMode={context.darkMode}
      visible={context.selectedPage === "Parties"}
      title="Parties"
    >
      {context.tweets.map((e) => (
        <SectionCard>
          <SectionHeading>{e.text}</SectionHeading>
        </SectionCard>
      ))}
    </OverlayWindow>
  );
};
