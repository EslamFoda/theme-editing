import React from "react";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
import Design4 from "./designs/design4";
import Design5 from "./designs/design5";
import { useSelector } from "react-redux";
import {
  editGallerySubTitle,
  editGalleryTitle,
  editGalleryBtn,
} from "../../../features/gallery-section";
const MainGallery = ({
  comps,
  index,
  setComps,
  comp,
  device,
  editSections,
}) => {
  const { compName, designNum } = comp;
  const headers = useSelector((state) => state.gallery.headers);
  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
  };

  const ServicesComp = designs[`design${designNum}`];

  return (
    <div
      className={`relative group  ${
        editSections ? "hover:shadow-[#23cba5] hover:shadow-inside" : ""
      }  w-full `}
    >
      <ServicesComp
        device={device}
        editGallerySubTitle={editGallerySubTitle}
        editGalleryTitle={editGalleryTitle}
        headers={headers}
        editGalleryBtn={editGalleryBtn}
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

export default MainGallery;
