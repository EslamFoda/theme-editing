import React from "react";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
import Design4 from "./designs/design4";
import Design5 from "./designs/design5";
import Design6 from "./designs/design6";
import Design7 from "./designs/design7";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import { updateDoc } from "firebase/firestore";

const MainHero = ({
  comps,
  index,
  setComps,
  comp,
  device,
  editSections,
  themeData,
}) => {
  const { compName, designNum, compData, backgroundColor } = comp;
  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
    design6: Design6,
    design7: Design7,
  };

  const HeroComp = designs[`design${7}`];

  const handleEdit = async (value, keys) => {
    const objectIndex = comps.findIndex((obj) => obj.id === comp.id);
    if (objectIndex === index) {
      comp.compData[keys] = value;
    }
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };
  return (
    <div
      style={{
        backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
      }}
      className={`relative group transition ease-in-out duration-700   ${
        editSections ? "hover:shadow-[#23cba5] hover:shadow-inside " : ""
      }  w-full `}
    >
      <HeroComp
        compIndex={index}
        heroData={compData}
        handleEdit={handleEdit}
        device={device}
        comp={comp}
        themeData={themeData}
        editSections={editSections}
      />
      <ChangeSection
        themeData={themeData}
        comp={comp}
        compName={compName}
        comps={comps}
        index={index}
        designNum={designNum}
        setComps={setComps}
      />
      {editSections && <AddSection index={index} themeData={themeData} />}
    </div>
  );
};

export default MainHero;
