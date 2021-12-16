import _ from "loadsh";
import $ from "jquery";
import { result } from "lodash";
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

  const closeSelectedPage = () => setSelectedPage(null);

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
    getTweets(_.lowerCase(pageTitle));
    setSelectedPage(pageTitle);
  }

  const [tweets, setTweets] = useState([]);

  function getTweets(count) {
    $.getJSON("localhost:42069/fetch/parties", (res) => {
      setTweets([result]);
    });
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
