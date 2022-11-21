import React from "react";
import { useEffect } from "react";
import MainContainer from "../mainContainer";
import ActionNavBar from "../actionNavBar";
import { useSelector, useDispatch } from "react-redux";
import useChooseDesign from "../../hooks/useChooseDesign";
import SelectDesign from "./common/selectDesign";
import SelectSection from "./common/selectSection";
import DesignFromSection from "./common/DesignFromSection";
import { sectionsImgs } from "../../constant";
import { useContext } from "react";
import { CompsContext } from "../../context/compsContext";
import ActionBarDesc from "./common/actionBarDesc";

import { useStickyState } from "../../hooks/useStickyState";
import ChangeImgs from "../changeImgs";
import ChangeStyles from "../changeStyles";

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

const fonts = [
  "sans",
  "Poppins",
  "Tillana",
  "Montserrat",
  "rubek",
  "hind",
  "Saira",
  "Roboto",
  "Amatic",
  "Bangers",
  "Kdam",
  "Krub",
  "Lato",
  "Lora",
  "Nerko",
  "Roboto",
  "Roboto-Mono",
  "Ropa-Sans",
  "Russo-One",
  "Saira-Condensed",
  "Secular-One",
];
const modes = ["light", "dark"];

const MainEditor = () => {
  const { comps, setComps } = useContext(CompsContext);
  const [currentColor, setCurrentColor] = useStickyState(
    colors[0],
    "theme-color"
  );
  const [currentFont, setCurrentFont] = useStickyState(fonts[0], "theme-font");
  const [mode, setMode] = useStickyState(modes[0], "theme-mode");
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
  const editImg = useSelector((state: any) => state.editImg.editImage);
  const editFiles = useSelector((state: any) => state.files.editFiles);
  const stylesEditing = useSelector(
    (state: any) => state.stylesEdit.stylesEditor
  );
  const fontEdit = useSelector((state: any) => state.stylesEdit.fontEdit);

  useEffect(() => {
    const data = window.localStorage.getItem("ALL_SECTIONS");
    if (data !== null) setComps([...JSON.parse(data)]);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ALL_SECTIONS", JSON.stringify(comps));
  }, [comps]);

  return (
    <div
      className={[
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
            <div className="h-40 flex items-center gap-4  scrollable overflow-auto w-full">
              {selectSection ? (
                <DesignFromSection
                  designs={designs}
                  dispatch={dispatch}
                  setComps={setComps}
                  compName={compName}
                  comps={comps}
                  nextIndex={nextIndex}
                />
              ) : (
                <SelectSection
                  dispatch={dispatch}
                  sectionsImgs={sectionsImgs}
                />
              )}
            </div>
          </div>
        )}
        {stylesEditing && !addSection && editSections ? (
          <ChangeStyles
            fonts={fonts}
            currentFont={currentFont}
            setCurrentFont={setCurrentFont}
            fontEdit={fontEdit}
            openColors={openColors}
            mode={mode}
            colors={colors}
            setCurrentColor={setCurrentColor}
            currentColor={currentColor}
          />
        ) : null}
        {editImg || editFiles ? (
          <ChangeImgs setComps={setComps} comps={comps} />
        ) : null}
      </div>
      <div
        className={[
          `font font-choosedFont`,
          currentFont && `fontName-${currentFont}`,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <MainContainer
          comps={comps}
          setComps={setComps}
          containerWidth={containerWidth}
        />
      </div>
    </div>
  );
};

export default MainEditor;
