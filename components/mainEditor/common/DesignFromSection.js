import { selectSectionOff } from "../../../features/add-section";
import Designs from "./designs";
const DesignFromSection = ({
  designs,
  setComps,
  dispatch,
  selectedSection,
  sectionsImgs,
  compName,
  nextIndex,
  comps,
}) => {
  const handleCreateSection = (i) => {
    dispatch(selectSectionOff());
    const findSection = sectionsImgs.find(
      (section) => section.id === selectedSection
    );
    comps.splice(nextIndex, 0, {
      Component: findSection.Section,
      id: Math.floor(Math.random() * Date.now()).toString(),
      compName: compName,
      designNum: i + 1,
    });
    setComps([...comps]);
  };
  return (
    <div className="h-40 flex items-center  overflow-auto gap-8  w-full">
      {designs.map((Design, i) => (
        <div key={i}>
          <Designs
            Design={Design}
            comps={comps}
            i={i}
            nextIndex={nextIndex}
            handle={handleCreateSection}
          />
        </div>
      ))}
    </div>
  );
};

export default DesignFromSection;
