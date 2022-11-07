import React from "react";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import {
  editFeaturedTitle,
  editFeaturedBtn,
  editFeaturedDesc,
  editFeaturedHeader,
} from "../../../features/featured-section";

const Design1 = dynamic(() => import("./designs/design1"));
const Design2 = dynamic(() => import("./designs/design2"));
const Design3 = dynamic(() => import("./designs/design3"));
const Design4 = dynamic(() => import("./designs/design4"));
const Design5 = dynamic(() => import("./designs/design5"));

const MainFeatured = ({
  comps,
  index,
  setComps,
  comp,
  device,
  editSections,
}) => {
  const { compName, designNum } = comp;
  const featuredData = useSelector((state) => state.featured.featuredData);
  const featuredHeader = useSelector((state) => state.featured.header);

  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
  };
  const FeaturedComp = designs[`design${designNum}`];
  return (
    <div
      className={`relative group  ${
        editSections ? "hover:shadow-[#23cba5] hover:shadow-inside" : ""
      }  w-full `}
    >
      <FeaturedComp
        editFeaturedTitle={editFeaturedTitle}
        editFeaturedBtn={editFeaturedBtn}
        editFeaturedDesc={editFeaturedDesc}
        editFeaturedHeader={editFeaturedHeader}
        featuredHeader={featuredHeader}
        featuredData={featuredData}
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
export default MainFeatured;
