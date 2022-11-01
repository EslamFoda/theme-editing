import React from "react";
import Design1 from "./designs/design1";
import Design2 from "./designs/design2";
import Design3 from "./designs/design3";
import ChangeSection from "../../edit/changeSection";
import AddSection from "../../edit/addSection";
const MainHero = ({ comps, index, setComps, comp, device }) => {
  const { compName, designNum } = comp;

  const designs = {
    design1: Design1,
    design2: Design2,
    design3: Design3,
  };

  const HeroComp = designs[`design${designNum}`];

  return (
    <div className="relative group hover:shadow-inner hover:shadow-green-600 w-full ">
      <HeroComp device={device}/>
      <ChangeSection
        comp={comp}
        compName={compName}
        comps={comps}
        index={index}
        designNum={designNum}
        setComps={setComps}
      />
      <AddSection index={index} />
    </div>
  );
};

export default MainHero;
