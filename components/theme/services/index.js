import React from "react";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
import { servicesData } from "../../../constant";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
const MainServices = ({
  comps,
  index,
  setComps,
  comp,
  device,
  editSections,
}) => {
  const { compName, designNum } = comp;

  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
  };

  const ServicesComp = designs[`design${designNum}`];

  return (
    <div
      className={`relative group  ${
        editSections ? "hover:shadow-[#23cba5] hover:shadow-inner" : ""
      }  w-full `}
    >
      <ServicesComp device={device} servicesData={servicesData}/>
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

export default MainServices;
