import React from "react";
import Preview from "./common/preview";
const MainContainer = ({ comps, animate, themeId, editSections }) => {

  return (
    <>
      {themeId && (
        <Preview
          animate={animate}
          comps={comps}
          editSections={editSections}
          themeId={themeId}
        />
      )}
    </>
  );
};

export default MainContainer;
