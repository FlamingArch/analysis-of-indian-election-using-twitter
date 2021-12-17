import React, { useContext } from "react";
import {
  Button,
  Spacer,
  OverlayWindow,
  SectionCard,
  SectionControls,
  Overlay,
  SectionHeading,
  BackdropCover,
  TopBar,
} from "../ThemeControls";
import { AppContext } from "../Context";
import { ChatIcon, HeartIcon } from "@heroicons/react/outline";

export const PartiesPage = () => {
  const context = useContext(AppContext);
  return (
    <OverlayWindow
      darkMode={context.darkMode}
      visible={context.selectedPage === "Parties"}
      title="Parties"
    >
      <SectionCard>
        <SectionHeading>Trend Analysis</SectionHeading>
        <SectionControls>
          <Button onClick={() => context.displayOverlay("trend")}>Run</Button>
        </SectionControls>
      </SectionCard>
      <SectionCard>
        <SectionHeading>Sentiment Analysis</SectionHeading>
        <SectionControls>
          <Button onClick={() => context.displayOverlay("sentiment")}>
            Run
          </Button>
        </SectionControls>
      </SectionCard>
      <Overlay visible={context.overlay}>
        {context.content === "sentiment" ? (
          <BackdropCover darkMode={context.darkMode}>
            {/* <TopBar ></TopBar> */}
            <div className="h-16"></div>
            <SectionCard heading="Fetch Tweets">
              <div className="w-min, h-auto">Count: {context.count}</div>
              <SectionControls>
                <Button onClick={() => context.fetchTweets("parties")}>
                  Fetch
                </Button>
                <Spacer></Spacer>
                <input
                  type="range"
                  name="value"
                  id="value"
                  max={100}
                  min={1}
                  value={context.count}
                  onChange={(val) => context.setCount(val.target.value)}
                />
              </SectionControls>
              {context.loading && <h1>Loading...</h1>}
            </SectionCard>

            {context.tweets[0] &&
              Object.keys(context.tweets[0]).map((key) => (
                <SectionCard>
                  <SectionHeading>{key}</SectionHeading>
                  {context.tweets[0][key].map((tweet) => (
                    <SectionCard
                      expanded={true}
                      color="text-black"
                      background="bg-white"
                      padding="p-6"
                    >
                      <SectionHeading>{tweet.username}</SectionHeading>
                      {tweet.text}
                      <SectionControls>
                        {tweet.retweets ?? 0}
                        <ChatIcon className="h-6 w-6 mx-2"></ChatIcon>
                        {tweet.likes ?? 69}
                        <HeartIcon className="h-6 w-6 mx-2"></HeartIcon>
                      </SectionControls>
                    </SectionCard>
                  ))}
                </SectionCard>
              ))}
          </BackdropCover>
        ) : null}
      </Overlay>
    </OverlayWindow>
  );
};
