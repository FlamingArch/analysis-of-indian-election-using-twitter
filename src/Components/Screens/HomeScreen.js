import { React, useContext } from "react";
import { AppContext } from "../AppContext";
import {
  TopBar,
  Button,
  SectionCard,
  SectionControls,
  Page,
} from "../ThemeControls";
import ButtonToggleDarkMode from "../ButtonToggleDarkMode";

// Icons
import { ChartBarIcon, InformationCircleIcon } from "@heroicons/react/outline";

const HomeScreen = () => {
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

export default HomeScreen;
