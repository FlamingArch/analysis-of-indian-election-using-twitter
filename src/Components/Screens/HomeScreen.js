import { React, useContext } from "react";
import { AppContext } from "../AppContext";
import TopBar from "../Supporting/TopBar";
import Button from "../Supporting/Button";
import SectionCard from "../Supporting/SectionCard";
import SectionControls from "../Supporting/SectionControls";
import ButtonToggleDarkMode from "../ButtonToggleDarkMode";
import { Page } from "../Supporting/Page";

// Icons
import { ChartBarIcon, InformationCircleIcon } from "@heroicons/react/outline";

export const HomeScreen = () => {
  const context = useContext(AppContext);

  return (
    <Page>
      <TopBar
        darkMode={context.darkMode}
        title="Analysis of Indian Elections using Twitter"
        logo={<ChartBarIcon className="w-6 h-6" />}
      >
        <Button type="icon" onClick="">
          <InformationCircleIcon className="w-6 h-6" />
        </Button>
        <ButtonToggleDarkMode />
      </TopBar>
      {context.topics.map((e) => (
        <SectionCard id={e.id} heading={e.heading} staggerTransition={true}>
          {e.description}
          <SectionControls>
            <Button onClick={e.onClick}>Run</Button>
          </SectionControls>
        </SectionCard>
      ))}
    </Page>
  );
};
