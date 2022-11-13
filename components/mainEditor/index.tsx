import React from "react";
import { useState } from "react";
import MainContainer from "../mainContainer";
import ActionNavBar from "./common/actionNavBar";
import { useSelector, useDispatch } from "react-redux";
import useChooseDesign from "../../hooks/useChooseDesign";
import SelectDesign from "./common/selectDesign";
import SelectSection from "./common/selectSection";
import DesignFromSection from "./common/DesignFromSection";
import { sectionsImgs } from "../../constant";
import { useContext } from "react";
import { CompsContext } from "../../context/compsContext";
import ActionBarDesc from "./common/actionBarDesc";
import ChangeColors from "../changeColors";
import { useStickyState } from "../../hooks/useStickyState";

const colors = [
  "Captain-Green",
  "Masr",
  "Egyption-Blue",
  "Custard-With-Mustard",
  "Ron-Burgundy",
  "Baby-Blue",
  "Black-Panther",
  "Blue-Sky",
  "Barbie-Girl",
  "Juice-Box",
  "Rose-Flower",
  "Teal",
  "Emerald",
  "Indigo",
  "Violet",
  "Gray",
  "Lime",
];
const modes = ["light", "dark"];

const MainEditor = () => {
  const { comps, setComps } = useContext(CompsContext);
  const [currentColor, setCurrentColor] = useStickyState(
    colors[0],
    "theme-color"
  );
  const [mode, setMode] = useStickyState(modes[0], "theme-mode");
  const [selectedSection, setSelectedSection] = useState(null);
  const dispatch = useDispatch();
  const editSections = useSelector((state: any) => state.editSections.value);
  const addSection = useSelector((state: any) => state.editSections.addSection);
  const selectSection = useSelector(
    (state: any) => state.addSections.selectSection
  );
  const nextIndex = useSelector((state: any) => state.addSections.compIndex);
  const openColors = useSelector((state: any) => state.colors.enableColors);
  const compName = useSelector((state: any) => state.compName.compName);
  const { designs } = useChooseDesign(compName);
  const containerWidth = useSelector((state: any) => state.mainWidth.width);

  return (
    <div
      className={[
        "",
        currentColor && `theme-${currentColor}`,
        mode && `theme-${mode}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div>
        <ActionNavBar />
        {editSections && compName && !addSection && (
          <SelectDesign
            comps={comps}
            designs={designs}
            nextIndex={nextIndex}
            setComps={setComps}
          />
        )}
        {addSection && editSections && (
          <div className="bg-[#26313f] flex px-5">
            <ActionBarDesc
              selectSection={selectSection}
              dispatch={dispatch}
              compName={compName}
            />
            <div className="h-40 flex items-center gap-4  overflow-auto w-full">
              {selectSection ? (
                <DesignFromSection
                  designs={designs}
                  dispatch={dispatch}
                  sectionsImgs={sectionsImgs}
                  selectedSection={selectedSection}
                  setComps={setComps}
                  compName={compName}
                  comps={comps}
                  nextIndex={nextIndex}
                />
              ) : (
                <SelectSection
                  dispatch={dispatch}
                  sectionsImgs={sectionsImgs}
                  setSelectedSection={setSelectedSection}
                />
              )}
            </div>
          </div>
        )}
        {openColors && !addSection && editSections ? (
          <ChangeColors
            mode={mode}
            colors={colors}
            setCurrentColor={setCurrentColor}
            currentColor={currentColor}
          />
        ) : null}
      </div>
      <MainContainer
        comps={comps}
        setComps={setComps}
        containerWidth={containerWidth}
      />
    </div>
  );
};

export default MainEditor;
