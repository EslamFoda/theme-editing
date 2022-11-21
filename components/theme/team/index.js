import React from "react";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import Design1 from "./design/design1";
import Design2 from "./design/design2";
import Design3 from "./design/design3";
import Design4 from "./design/design4";
import Design5 from "./design/design5";
import useBgColor from "../../../hooks/useBgColor";
import EditBackground from "../../mainContainer/common/editBackground";
import useAnimation from "../../../hooks/useAnimation";
const MainTeam = ({ comps, index, setComps, comp, device, editSections }) => {
  const { compName, designNum, compData, backgroundColor } = comp;
  const { handleReset, setColor } = useBgColor(index);

  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
    design4: Design4,
    design5: Design5,
  };

  const ServicesComp = designs[`design${designNum}`];
  const {} = useAnimation();

  const handleMultiEdit = (value, id, keys) => {
    const update = compData.items.map((item) =>
      item.id === id ? { ...item, [keys]: value } : item
    );
    comp.compData.items = update;
    setComps([...comps]);
  };
  const handleEdit = (value, keys) => {
    const objectIndex = comps.findIndex((obj) => obj.id === comp.id);
    if (objectIndex === index) {
      comp.compData.headers[keys] = value;
    }
    setComps([...comps]);
  };

  return (
    <div
      // data-aos="fade-left"
      style={{
        backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
      }}
      className={`relative group ${
        editSections ? "hover:shadow-[#23cba5] hover:shadow-inside" : ""
      }  w-full `}
    >
      <ServicesComp
        comp={comp}
        compIndex={index}
        backgroundColor={backgroundColor}
        device={device}
        teamData={compData.items}
        headers={compData.headers}
        handleMultiEdit={handleMultiEdit}
        handleEdit={handleEdit}
      />
      <ChangeSection
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
          <AddSection index={index} />
        </>
      )}
    </div>
  );
};

export default MainTeam;
