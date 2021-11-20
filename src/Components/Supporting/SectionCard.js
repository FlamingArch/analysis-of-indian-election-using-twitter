import React from "react";
import { motion } from "framer-motion";

const SectionCard = (props) => {
  return (
    <div className="w-full grid py-4 px-6">
      <motion.div
        animate={{ translateY: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.4 }}
        className="w-full flex flex-col mx-4 my-2 rounded-lg shadow-2xl lg:w-1/2 md:w-3/4 p-4 sm:w-full h-full bg-white"
        style={{ margin: "auto" }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default SectionCard;
