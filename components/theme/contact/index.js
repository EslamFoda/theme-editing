import React from "react";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import useBgColor from "../../../hooks/useBgColor";
import EditBackground from "../../editBackground";
import { updateDoc } from "firebase/firestore";
import Design1 from "../contact/designs/design1";
import Design2 from "../contact/designs/design2";
import useMainData from "../../../hooks/useMainData";
import useHandleEdit from "../../../hooks/useHandleEdit";

const MainContact = ({
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
  const { handleEdit } = useHandleEdit(comps, comp, index, themeData);

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
export default MainContact;
