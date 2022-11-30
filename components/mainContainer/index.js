import React from "react";
import { useSelector } from "react-redux";
import Preview from "./common/preview";
const MainContainer = ({
  comps,
  animate,
  themeId,
  editSections,
}) => {
  // const editSections = useSelector((state) => state.editSections.value);
  const device = useSelector((state) => state.mainWidth.device);

  return (
    <>
      {themeId && (
        <Preview
          animate={animate}
          comps={comps}
          device={device}
          editSections={editSections}
          themeId={themeId}
        />
      )}
    </>
  );
};

export default MainContainer;
