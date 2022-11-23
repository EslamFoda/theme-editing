import CloseEditor from "./closeEditor";
import Designs from "./designs";
const SelectDesign = ({ designs, comps, nextIndex, setComps }) => {
  const handleSelectDesign = (i) => {
    comps[nextIndex].designNum = i + 1;
    setComps([...comps]);
  };

  return (
    <div className="bg-[#26313f] relative px-5">
      <div className="h-40 flex items-center  overflow-auto gap-8  w-full">
        {designs.map((Design, i) => (
          <div key={i}>
            <Designs
              Design={Design}
              comps={comps}
              i={i}
              select
              nextIndex={nextIndex}
              handle={handleSelectDesign}
            />
          </div>
        ))}
      </div>
      <CloseEditor/>
    </div>
  );
};

export default SelectDesign;
