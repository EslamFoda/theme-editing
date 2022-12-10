import React from "react";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import EditBackground from "../../editBackground";
import useBgColor from "../../../hooks/useBgColor";
import { updateDoc } from "firebase/firestore";
const MainPrices = ({
  index,
  comps,
  setComps,
  comp,
  editSections,
  animate,
  themeData,
}) => {
  const { compName, designNum, compData, backgroundColor } = comp;
  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
  };
  const PricesComp = designs[`design${designNum}`];
  const { setColor, handleReset } = useBgColor(index, comps, themeData);

  const handleMultiEdit = async (value, id, keys) => {
    const update = compData.items.map((item) =>
      item.id === id ? { ...item, [keys]: value } : item
    );
    comp.compData.items = update;
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };

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
      className={`relative group transition ease-in-out duration-700  ${
        editSections ? "hover:shadow-[#23cba5] hover:shadow-inside" : ""
      }  w-full `}
    >
      <div data-aos={animate}>
        <PricesComp
          editSections={editSections}
          comps={comps}
          comp={comp}
          compIndex={index}
          backgroundColor={backgroundColor}
          pricesData={compData}
          handleEdit={handleEdit}
          handleMultiEdit={handleMultiEdit}
          themeData={themeData}
        />
      </div>
      <ChangeSection
        themeData={themeData}
        comp={comp}
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
          />
          <AddSection index={index} themeData={themeData} />
        </>
      )}
    </div>
  );
};

export default MainPrices;
