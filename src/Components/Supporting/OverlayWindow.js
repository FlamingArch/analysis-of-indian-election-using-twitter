import React from "react";
import { motion } from "framer-motion";
import TopBar from "./TopBar";

const OverlayWindow = (props) => {
  return (
    <motion.div
      style={{
        gridTemplateRows: "auto 1fr",
        WebkitBackdropFilter: "blur(64px)",
      }}
      animate={{ translateX: ["200vw", "0px"], opacity: [0, 1] }}
      transition={{ duration: 0.2 }}
      className="w-full h-full absolute bg-black bg-opacity-80 backdrop-blur-3xl backdrop-filter z-20 top-0 left-0 right-0 bottom-0 grid shadow-2xl"
    >
      <TopBar
        title={props.title + (props.title ? " " : "") + "Sentiment Analysis"}
        closeButtonAction={() => {}}
      ></TopBar>
      <div className="">{props.children}</div>
    </motion.div>
  );
};

export default OverlayWindow;
