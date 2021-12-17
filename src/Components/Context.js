import $ from "jquery";
import _ from "lodash";
import { fetchResults } from "./ThemeControls";
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

const useThemeDetector = () => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  const mqListener = (e) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);

  return isDarkTheme;
};

export const AppProvider = (props) => {
  const [darkMode, setDarkMode] = useState(useThemeDetector());

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  const [selectedPage, setSelectedPage] = useState(null);

  const closeSelectedPage = () => {
    setTweets([]);
    setSentimentAnalysis({});
    closeOverlay();
    setSelectedPage(null);
  };

  const listItems = [
    {
      id: 1,
      heading: "Parties",
      description:
        "Run Sentiment Analysis on tweets mentioning Top Political Parties.",
      onClick: function () {
        displayOverlayWindow("Parties");
      },
    },
    {
      id: 2,
      heading: "Leaders",
      description:
        "Run Sentiment Analysis on tweets mentioning Top Political Leaders.",
      onClick: function () {
        displayOverlayWindow("Leaders");
      },
    },
    {
      id: 3,
      heading: "Controversies",
      description:
        "Run Sentiment Analysis on tweets mentioning Top Political Controversies.",
      onClick: function () {
        displayOverlayWindow("Controversies");
      },
    },
  ];

  function displayOverlayWindow(pageTitle) {
    setSelectedPage(pageTitle);
  }

  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState(20000);
  const [tweets, setTweets] = useState([]);

  function getTweets(pageTitle, n = count) {
    setSentimentAnalysis({});
    console.log("Getting Tweets for " + pageTitle);
    setLoading(true);
    $.getJSON(`http://127.0.0.1:42069/fetch/${pageTitle}/${10}`, (res) => {
      console.log("RESPONSE:" + res);
      setLoading(false);
      setTweets([res]);
    });
  }

  const [overlay, setOverlay] = useState(false);
  const [content, setContent] = useState("");

  function displayOverlay(content) {
    setContent(content);
    setOverlay(true);
  }

  function closeOverlay() {
    setContent("");
    setOverlay(false);
    setSentimentAnalysis({});
  }

  function performSentimentAnalysis(topic) {
    return fetchResults(`127.0.0.1:42069/analyse/${topic}`, count);
  }

  const [sentimentAnalysis, setSentimentAnalysis] = useState({});
  const [performingSentimentAnalysis, setPerformingSentimentAnalysis] =
    useState(false);

  function runSentimentAnalysis() {
    setSentimentAnalysis(performSentimentAnalysis(_.lowerCase(selectedPage)));
  }

  function run() {
    setPerformingSentimentAnalysis(true);
    setTimeout(() => {
      runSentimentAnalysis();
      setPerformingSentimentAnalysis(false);
    }, 1500);
  }

  return (
    <AppContext.Provider
      value={{
        darkMode: darkMode,
        toggleDarkMode: toggleDarkMode,
        topics: listItems,
        tweets: tweets,
        selectedPage: selectedPage,
        closeSelectedPage: closeSelectedPage,
        fetchTweets: getTweets,
        count: count,
        setCount: (i) => {
          setTweets([]);
          setCount(i);
        },
        loading: loading,
        overlay: overlay,
        displayOverlay: displayOverlay,
        content: content,
        closeOverlay: closeOverlay,
        sentimentAnalysis: sentimentAnalysis,
        performingSentimentAnalysis: performingSentimentAnalysis,
        run: run,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
