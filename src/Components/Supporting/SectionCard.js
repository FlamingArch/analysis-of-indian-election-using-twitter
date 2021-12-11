import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const SectionCard = (props) => {
  return (
    <div className=" grid text-white p-6">
      <motion.div
        animate={{ translateY: [100, 0], opacity: [0, 1] }}
        transition={{
          duration: 0.4,
          delay: props.staggerTransition ? props.id * 0.15 : 0,
        }}
        style={{
          width: "220px",
          height: "280px",
        }}
        className={`flex flex-col rounded-lg shadow-2xl p-4 h-full ${
          props.background ?? "bg-blue-700"
        }`}
      >
        {props.heading && <SectionHeading>{props.heading}</SectionHeading>}
        {props.children}
      </motion.div>
    </div>
  );
};

export default SectionCard;
