import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  const [windowVisible, setWindowVisible] = useState(false);
  const [windowTitle, setWindowTitle] = useState("");

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
    setWindowTitle(pageTitle);
    setWindowVisible(true);
  }

  return (
    <AppContext.Provider
      value={{
        darkMode: darkMode,
        toggleDarkMode: toggleDarkMode,
        topics: listItems,
        overlayWindowVisible: windowVisible,
        topicPageTitle: windowTitle,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
