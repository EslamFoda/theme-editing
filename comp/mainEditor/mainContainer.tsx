import React from "react";
import MainHero from "./theme/hero";
import MainAbout from "./theme/about";
import MainFeatured from "./theme/featured";
const MainContainer = ({ containerWidth }) => {
  const containers = [MainHero, MainAbout, MainFeatured];
  return (
    <div
      style={{
        margin: "0px auto",
        flex: "1 1 0%",
        transition: "width 0.2s ease 0s",
        width: containerWidth,
      }}
      className="flex flex-col"
    >
      {containers.map((Comp, i) => {
        return (
          <div key={i}>
            <Comp />
          </div>
        );
      })}
    </div>
  );
};

export default MainContainer;
