import $ from "jquery";
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

  const [count, setCount] = useState(20);
  const [tweets, setTweets] = useState([]);

  function getTweets(pageTitle, n = count) {
    console.log("Getting Tweets for " + pageTitle);
    setLoading(true);
    $.getJSON(`http://127.0.0.1:42069/fetch/${pageTitle}/${n}`, (res) => {
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
        setCount: setCount,
        loading: loading,
        overlay: overlay,
        displayOverlay: displayOverlay,
        content: content,
        closeOverlay: closeOverlay,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
