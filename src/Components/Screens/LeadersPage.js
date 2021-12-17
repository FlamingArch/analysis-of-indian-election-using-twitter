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
} from "../ThemeControls";
import { AppContext } from "../Context";
import { ChatIcon, HeartIcon } from "@heroicons/react/outline";

export const LeadersPage = () => {
  const context = useContext(AppContext);
  return (
    <OverlayWindow
      darkMode={context.darkMode}
      visible={context.selectedPage === "Leaders"}
      title="Leaders"
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
            <div className="h-16"></div>
            <SectionCard heading="Fetch Tweets">
              <div className="w-min, h-auto">Count: {context.count}</div>
              <SectionControls>
                <Button onClick={() => context.fetchTweets("leaders")}>
                  Fetch
                </Button>
                <Spacer></Spacer>
                <input
                  type="range"
                  name="value"
                  id="value"
                  max={100000}
                  min={1000}
                  value={context.count}
                  onChange={(val) => context.setCount(val.target.value)}
                />
              </SectionControls>
              {context.loading && <h1>Loading...</h1>}
            </SectionCard>

            {context.tweets[0] && (
              <SectionCard heading="Perform Analysis">
                <SectionControls>
                  <Button onClick={() => context.run()}>Run</Button>
                </SectionControls>
                {context.performingSentimentAnalysis &&
                  "Performing Sentiment Analysis..."}
              </SectionCard>
            )}

            {context.tweets[0] &&
              Object.keys(context.tweets[0]).map((key) => (
                <SectionCard background="bg-gray-900">
                  <SectionHeading>{key}</SectionHeading>
                  {context.sentimentAnalysis ? (
                    <div>
                      {Object.keys(context.sentimentAnalysis).length > 0
                        ? "Sentiment Analysis Result:"
                        : "Showing Top 10 Tweets:"}
                      {Object.keys(context.sentimentAnalysis).length === 0 ? (
                        context.tweets[0][key].map((tweet) => (
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
                        ))
                      ) : (
                        <div className="">
                          <h1>Positive: {context.sentimentAnalysis[key]}</h1>
                          <h1>
                            Negative:
                            {context.count - context.sentimentAnalysis[key]}
                          </h1>
                        </div>
                      )}
                    </div>
                  ) : (
                    <SectionHeading>
                      {JSON.stringify(context.sentimentAnalysis)}
                    </SectionHeading>
                  )}
                </SectionCard>
              ))}
          </BackdropCover>
        ) : (
          <BackdropCover darkMode={context.darkMode}>
            <div className="h-16"></div>
            <SectionCard>
              <SectionHeading>Trend Analysis</SectionHeading>
              {Object.keys(context.trends).map((key) => (
                <p>{`${key}: ${context.trends[key]}`}</p>
              ))}
            </SectionCard>
          </BackdropCover>
        )}
      </Overlay>
    </OverlayWindow>
  );
};
