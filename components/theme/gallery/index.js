import React from "react";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
import Design4 from "./designs/design4";
import Design5 from "./designs/design5";
import useBgColor from "../../../hooks/useBgColor";
import EditBackground from "../../mainContainer/common/editBackground";

const MainGallery = ({
  comps,
  index,
  setComps,
  comp,
  device,
  editSections,
}) => {
  const { compName, designNum, compData, backgroundColor } = comp;
  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
  };

  const ServicesComp = designs[`design${designNum}`];
  const { handleReset, setColor } = useBgColor(index);
  const handleEdit = (value, keys) => {
    const objectIndex = comps.findIndex((obj) => obj.id === comp.id);
    if (objectIndex === index) {
      comp.compData[keys] = value;
    }
    setComps([...comps]);
  };

  return (
    <div
      className={`relative group  ${
        editSections ? "hover:shadow-[#23cba5] hover:shadow-inside" : ""
      }  w-full `}
    >
      <EditBackground setColor={setColor} handleReset={handleReset} />
      <ServicesComp
        device={device}
        handleEdit={handleEdit}
        galleryData={compData}
        backgroundColor={backgroundColor}
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
