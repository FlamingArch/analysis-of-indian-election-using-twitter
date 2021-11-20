import { motion } from "framer-motion";
import { ChartBarIcon, InformationCircleIcon } from "@heroicons/react/outline";
import React from "react";

const TopBar = () => {
  return (
    <motion.div
      className="grid w-screen bg-blue-700 bg-opacity-60 p-2 text-white fixed backdrop-blur-lg"
      animate={{ translateY: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 0.4 }}
      style={{
        gridTemplateColumns: "auto 1fr auto",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <ChartBarIcon className="w-6 h-6 m-4 " />
      <div className="grid place-content-center">
        Analysis of Indian Elections using Twitter
      </div>
      <InformationCircleIcon className="w-6 h-6 m-4 " />
    </motion.div>
  );
};

export default TopBar;
