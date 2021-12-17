import { ArrowLeftIcon, GlobeIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { AppContext } from "./Context";
import { React, useContext } from "react";
import _ from "lodash";

export const Button = (props) => {
  function getButtonType(type) {
    var raisedButton =
      "bg-white text-black w-min px-4 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-110 transform transition-all";
    var iconButton =
      "hover:bg-blue-900 hover:bg-opacity-40 w-min rounded-lg p-2 transition-all";
    switch (type) {
      case "raised":
        return raisedButton;
      case "icon":
        return iconButton;
      default:
        return raisedButton;
    }
  }
  return (
    <button className={getButtonType(props.type)} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export const OverlayWindow = (props) => {
  const context = useContext(AppContext);
  return props.visible ? (
    <motion.div
      style={{
        gridTemplateRows: "auto 1fr",
        WebkitBackdropFilter: "blur(64px)",
      }}
      animate={{ translateX: ["200vw", "0px"], opacity: [0, 1] }}
      transition={{ duration: 0.2 }}
      className={`w-full h-full absolute ${
        props.darkMode ? "bg-black" : "bg-white"
      } bg-opacity-80 backdrop-blur-3xl backdrop-filter z-20 top-0 left-0 right-0 bottom-0 grid shadow-2xl opacity-0`}
    >
      <TopBar
        closeButtonAction={context.closeSelectedPage}
        darkMode={props.darkMode}
        title={props.title}
      ></TopBar>
      <div className="">{props.children}</div>
    </motion.div>
  ) : null;
};

export const Page = (props) => {
  return <div>{props.children}</div>;
};

export const SectionCard = (props) => {
  return (
    <div className="w-full grid py-4 px-6 text-white">
      <motion.div
        animate={{ translateY: [100, 0], opacity: [0, 1] }}
        transition={{
          duration: 0.4,
          delay: props.staggerTransition ? props.id * 0.15 : 0,
        }}
        className={`w-full flex flex-col mx-4 my-2 rounded-lg shadow-2xl ${
          props.expanded ? "w-full" : "lg:w-1/2 md:w-3/4 p-4 sm:w-full"
        } h-full ${props.background ?? "bg-blue-700"} ${props.color} ${
          props.padding
        }`}
        style={{ margin: "auto" }}
      >
        {props.heading && <SectionHeading>{props.heading}</SectionHeading>}
        {props.children}
      </motion.div>
    </div>
  );
};

export const SectionControls = (props) => {
  return <div className="flex flex-row-reverse pt-4">{props.children}</div>;
};

export const SectionHeading = (props) => {
  return <h1 className="text-xl font-bold">{props.children}</h1>;
};

export const TopBar = (props) => {
  return (
    <div className="relative h-20" style={{ zIndex: props.zIndex ?? 10 }}>
      <div
        className={`w-screen ${
          props.darkMode ? "bg-black" : "bg-white"
        } bg-opacity-80 backdrop-filter backdrop-blur-xl fixed`}
      >
        <div
          style={{ gridTemplateColumns: "1fr auto 1fr" }}
          className="grid p-4 h-min"
        >
          <div className="flex flex-row">
            {props.closeButtonAction && (
              <Button type="icon" onClick={props.closeButtonAction}>
                <ArrowLeftIcon className="w-6 h-6" />
              </Button>
            )}
            {props.logo && (
              <div className="w-min p-2 transition-all">{props.logo}</div>
            )}
          </div>
          <div className="h-min">
            <div className="grid place-content-center h-full text-lg">
              {props.title}
            </div>
          </div>
          <div className="flex flex-row-reverse">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export const Window = (props) => {
  const windowStyle = props.darkMode
    ? "w-screen min-h-screen text-white bg-black"
    : "w-screen min-h-screen text-black bg-white";
  return <div className={windowStyle}>{props.children}</div>;
};

export const Preloader = () => {
  return <GlobeIcon className="w-6 h-6 animate-spin"></GlobeIcon>;
};

export const Spacer = () => {
  return <div className="h-full w-full"></div>;
};

export const BackdropCover = (props) => {
  return (
    <div
      className={`w-screen h-screen absolute top-0 left-0 ${
        props.darkMode ? "bg-black" : "bg-white"
      } bg-opacity-80 backdrop-filter backdrop-blur-xl`}
      style={{ WebkitBackdropFilter: "blur(48px)" }}
    >
      {props.children}
    </div>
  );
};

export const Overlay = (props) => {
  return props.visible ? (
    <div className="w-full h-full">{props.children}</div>
  ) : null;
};

export function fetchResults(url, max_lim) {
  switch (url) {
    default:
    case "127.0.0.1:42069/analyze/parties":
      return {
        bjp: Math.abs(_.random(1000, max_lim)),
        bsp: Math.abs(_.random(1000, max_lim)),
        congress: Math.abs(_.random(1000, max_lim)),
        ncp: Math.abs(_.random(1000, max_lim)),
        samajwadi: Math.abs(_.random(1000, max_lim)),
        shivsena: Math.abs(_.random(1000, max_lim)),
      };
    case "127.0.0.1:42069/analyze/leaders":
      return {
        narendramodi: Math.abs(_.random(1000, max_lim)),
        rahulgandhi: Math.abs(_.random(1000, max_lim)),
        akhileshyadav: Math.abs(_.random(1000, max_lim)),
        arvindkejriwal: Math.abs(_.random(1000, max_lim)),
        soniagandhi: Math.abs(_.random(1000, max_lim)),
        shivsena: Math.abs(_.random(1000, max_lim)),
      };
    case "127.0.0.1:42069/analyze/controversies":
      return {
        kisanandolan: Math.abs(_.random(1000, max_lim)),
        caa: Math.abs(_.random(1000, max_lim)),
        farmlaw: Math.abs(_.random(1000, max_lim)),
        covid: Math.abs(_.random(1000, max_lim)),
        vaccine: Math.abs(_.random(1000, max_lim)),
      };
  }
}
