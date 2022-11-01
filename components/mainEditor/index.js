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
import { FaArrowUp } from "react-icons/fa";
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
          <div className="w-80  py-4 border-r mr-4 border-solid border-[#353f4b] h-[164px]">
            <h2 className="text-2xl  font-bold text-white">
              Choose your section
            </h2>
            <h5 className="text-white">choose on of them</h5>
          </div>
          {!selectSection ? (
            <SelectSection
              dispatch={dispatch}
              sectionsImgs={sectionsImgs}
              setSelectedSection={setSelectedSection}
            />
          ) : (
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
          )}
        </div>
      )}
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
        containerWidth={containerWidth}
        comps={comps}
        setComps={setComps}
      />
    </>
  );
};

export default MainEditor;
