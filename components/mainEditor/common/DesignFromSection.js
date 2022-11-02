import { selectSectionOff } from "../../../features/add-section";

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
        <div
          className={`h-32 relative rounded-md overflow-hidden cursor-pointer min-w-[288px]`}
          key={i}
          onClick={() => {
            handleCreateSection(i);
            // handleSelectDesign(i);
          }}
        >
          {<Design choose={true} />}
        </div>
      ))}
    </div>
  );
};

export default DesignFromSection;
