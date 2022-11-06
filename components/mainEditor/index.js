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
import EditorComp from "../editor";
const MainEditor = () => {
  const { comps, setComps } = useContext(CompsContext);

  const [selectedSection, setSelectedSection] = useState(null);
  const dispatch = useDispatch();
  const editSections = useSelector((state) => state.editSections.value);
  const addSection = useSelector((state) => state.editSections.addSection);
  const selectSection = useSelector((state) => state.addSections.selectSection);
  const nextIndex = useSelector((state) => state.addSections.compIndex);

  const compName = useSelector((state) => state.compName.compName);
  const { designs } = useChooseDesign(compName);

  const containerWidth = useSelector((state) => state.mainWidth.width);

  return (
    <>
      <div className="">
        <ActionNavBar />
        {editSections && compName && !addSection && (
          <SelectDesign
            comps={comps}
            designs={designs}
            nextIndex={nextIndex}
            setComps={setComps}
          />
        )}
        {addSection && (
          <div className="bg-[#26313f] flex px-5">
            <ActionBarDesc
              selectSection={selectSection}
              dispatch={dispatch}
              compName={compName}
            />
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
        )}
      </div>
      {/* <StyledFrame
        style={{
          width: containerWidth,
          height: "85vh",
          minHeight:"85vh",
          transition: "width 0.2s ease 0s",
          margin: "0px auto",
          
        }}
      >
        <MainContainer
          containerWidth={containerWidth}
          comps={comps}
          setComps={setComps}
        />
      </StyledFrame> */}
      <MainContainer
        comps={comps}
        setComps={setComps}
        containerWidth={containerWidth}
      />
     
    </>
  );
};

export default MainEditor;
