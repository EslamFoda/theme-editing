import React from "react";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import dynamic from "next/dynamic";
import useBgColor from "../../../hooks/useBgColor";
import EditBackground from "../../editBackground";

import { updateDoc } from "firebase/firestore";
const Design1 = dynamic(() => import("./designs/design1"));
const Design2 = dynamic(() => import("./designs/design2"));

const MainContact = ({
  comps,
  index,
  setComps,
  comp,
  editSections,
  animate,
  themeData,
}) => {
  const { compName, designNum, compData, backgroundColor } = comp;
  const { handleReset, setColor } = useBgColor(index, comps, themeData);

  const designs = {
    design1: Design1,
    design2: Design2,
  };

  const ContactComp = designs[`design${designNum}`];

  const handleContactsEdit = async (value, id, keys) => {
    const update = compData.contacts.map((contact) =>
      contact.id === id ? { ...contact, [keys]: value } : contact
    );
    comp.compData.contacts = update;
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
          handleContactsEdit={handleContactsEdit}
          comp={comp}
          handleEdit={handleEdit}
          contactData={compData}
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
