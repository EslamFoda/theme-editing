import React from "react";
import { useSelector } from "react-redux";
import DragAndDrop from "./common/dragAndDrop";
import Preview from "./common/preview";
import TestDrag from "./common/testDrag";
const MainContainer = ({ containerWidth, comps, setComps }) => {
  const editSections = useSelector((state) => state.editSections.value);
  const device = useSelector((state) => state.mainWidth.device);

  return (
    <>
      {editSections ? (
        <DragAndDrop
          comps={comps}
          setComps={setComps}
          containerWidth={containerWidth}
          device={device}
        />
      ) : (
        <Preview
          comps={comps}
          containerWidth={containerWidth}
          setComps={setComps}
          device={device}
        />
      )}
    </>
  );
};

export default MainContainer;
