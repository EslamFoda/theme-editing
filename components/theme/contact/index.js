import React from "react";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import dynamic from "next/dynamic";
import useBgColor from "../../../hooks/useBgColor";
import EditBackground from "../../mainContainer/common/editBackground";
import {
  HiOutlineSupport,
  HiOutlineBriefcase,
  HiOutlineUsers,
} from "react-icons/hi";
import { TbAsteriskSimple } from "react-icons/tb";
import { updateDoc } from "firebase/firestore";
const Design1 = dynamic(() => import("./designs/design1"));

const MainContact = ({
  comps,
  index,
  setComps,
  comp,
  device,
  editSections,
  animate,
  themeData,
}) => {
  const { compName, designNum, compData, backgroundColor } = comp;
  const { handleReset, setColor } = useBgColor(index, comps, themeData);

  const designs = {
    design1: Design1,
  };

  const icons = {
    support: HiOutlineSupport,
    users: HiOutlineUsers,
    briefcase: HiOutlineBriefcase,
    asterisk: TbAsteriskSimple,
  };
  const ContactComp = designs[`design${designNum}`];

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
        <ContactComp
          icons={icons}
          comp={comp}
          handleMultiEdit={handleMultiEdit}
          handleEdit={handleEdit}
          featuredHeader={compData.header}
          featuredData={compData.items}
          device={device}
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
          />
          <AddSection index={index} themeData={themeData} />
        </>
      )}
    </div>
  );
};
export default MainContact;
