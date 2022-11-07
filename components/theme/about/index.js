import React from "react";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
import Design4 from "./designs/design4";
import Design5 from "./designs/design5";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import { useSelector } from "react-redux";
import {
  editAboutBtn,
  editAboutTitle,
  editAboutSubtitle,
} from "../../../features/about-section";
const MainAbout = ({ index, comps, setComps, comp, device, editSections }) => {
  const { compName, designNum } = comp;
  const aboutData = useSelector((state) => state.aboutComp.aboutData);
  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
  };
  const AboutComp = designs[`design${designNum}`];
  return (
    <div
      className={`relative group  ${
        editSections ? "hover:shadow-[#23cba5] hover:shadow-inside" : ""
      }  w-full `}
    >
      <AboutComp
        aboutData={aboutData}
        editAboutBtn={editAboutBtn}
        editAboutTitle={editAboutTitle}
        editAboutSubtitle={editAboutSubtitle}
        choose={false}
        device={device}
      />
      <ChangeSection
        comp={comp}
        compName={compName}
        comps={comps}
        index={index}
        designNum={designNum}
        setComps={setComps}
      />
      {editSections && <AddSection index={index} />}
    </div>
  );
};

export default MainAbout;
