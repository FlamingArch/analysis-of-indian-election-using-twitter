import React from "react";
import { motion } from "framer-motion";
import TopBar from "./TopBar";

const OverlayWindow = (props) => {
  return (
    <motion.div
      style={{ gridTemplateRows: "auto 1fr" }}
      className="w-full h-full absolute bg-white z-20 top-0 left-0 grid"
    >
      <TopBar title="Overlay Window"></TopBar>
      {props.children}
    </motion.div>
  );
};

export default OverlayWindow;
