import React from "react";
import MainContainer from "../mainContainer";
import useMainData from "../../hooks/useMainData";

const MainEditor = ({ id }) => {
  const { comps, editSections, themeId, themeColor, themeFont, themeEffect } =
    useMainData();

  return (
    <div
      className={[themeColor && `theme-${themeColor}`, `theme-light`]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          `font font-choosedFont`,
          themeFont && `fontName-${themeFont}`,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <MainContainer
          editSections={editSections}
          themeId={themeId}
          animate={themeEffect}
          comps={comps}
        />
      </div>
    </div>
  );
};

export default MainEditor;
