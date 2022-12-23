import React from "react";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import useBgColor from "../../../hooks/useBgColor";
import EditBackground from "../../editBackground";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
import Design4 from "./designs/design4";
import Design5 from "./designs/design5";
import {
  HiOutlineSupport,
  HiOutlineBriefcase,
  HiOutlineUsers,
} from "react-icons/hi";
import { TbAsteriskSimple } from "react-icons/tb";
import useMainData from "../../../hooks/useMainData";
import useHandleEdit from "../../../hooks/useHandleEdit";

const MainFeatured = ({
  comps,
  index,
  setComps,
  comp,
  editSections,
  animate,
  themeData,
}) => {
  const {
    compName,
    designNum,
    compData,
    backgroundColor,
    backgroundImage,
    selectedBgImg,
    bgImgColor,
    enableBgColor,
  } = comp;
  const { handleReset, setColor } = useBgColor(index, comps, themeData);
  const { nextIndex, addSection } = useMainData();

  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
  };

  const icons = {
    support: HiOutlineSupport,
    users: HiOutlineUsers,
    briefcase: HiOutlineBriefcase,
    asterisk: TbAsteriskSimple,
  };
  const FeaturedComp = designs[`design${designNum}`];

  const { handleEdit, handleMultiEdit } = useHandleEdit(
    comps,
    comp,
    index,
    themeData,
    compData
  );

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(${bgImgColor?.r}, ${bgImgColor?.g}, ${bgImgColor?.b}, ${bgImgColor?.a}), rgba(${bgImgColor?.r}, ${bgImgColor?.g}, ${bgImgColor?.b}, ${bgImgColor?.a})), url(${backgroundImage})`,
        backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
      }}
      className={`relative group transition ease-in-out duration-700 bg-no-repeat bg-cover bg-center  ${
        editSections ? "hover:shadow-[#23cba5] hover:shadow-inside" : ""
      }  w-full ${
        nextIndex === index + 1 && addSection
          ? "shadow-[#23cba5] shadow-inside"
          : ""
      } `}
    >
      <div data-aos={animate}>
        <FeaturedComp
          icons={icons}
          comp={comp}
          handleMultiEdit={handleMultiEdit}
          handleEdit={handleEdit}
          featuredHeader={compData.header}
          featuredData={compData.items}
          comps={comps}
          themeData={themeData}
        />
      </div>
      <ChangeSection
        comp={comp}
        themeData={themeData}
        compName={compName}
        comps={comps}
        index={index}
        designNum={designNum}
        setComps={setComps}
      />
      {editSections && (
        <>
          <EditBackground
            backgroundColor={backgroundColor}
            handleReset={handleReset}
            setColor={setColor}
            themeData={themeData}
            compIndex={index}
            backgroundImage={backgroundImage}
            bgImgColor={bgImgColor}
            selectedBgImg={selectedBgImg}
            enableBgColor={enableBgColor}
          />
          <AddSection index={index} themeData={themeData} />
        </>
      )}
    </div>
  );
};
export default MainFeatured;
