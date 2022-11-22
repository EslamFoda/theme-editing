import React from "react";
import { useSelector } from "react-redux";
import DragAndDrop from "./common/dragAndDrop";
import Preview from "./common/preview";
import Editable from "./common/editable";
const MainContainer = ({ containerWidth, comps, setComps, animate }) => {
  const editSections = useSelector((state) => state.editSections.value);
  const device = useSelector((state) => state.mainWidth.device);

  return (
    <>
      <Preview
        animate={animate}
        comps={comps}
        containerWidth={containerWidth}
        setComps={setComps}
        device={device}
        editSections={editSections}
      />
    </>
  );
};

export default MainContainer;
