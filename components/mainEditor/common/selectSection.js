import { selectSectionOn } from "../../../features/add-section";
import { selectCompName } from "../../../features/comp-name";
import Image from "next/image";
const SelectSection = ({ sectionsImgs, setSelectedSection, dispatch }) => {
  return (
    <div className="h-40 flex items-center  overflow-auto gap-8  w-full">
      {sectionsImgs.map(({ src, id, title }, i) => (
        <div
          className={`h-32 relative rounded-md  cursor-pointer min-w-[288px] `}
          key={id}
          onClick={() => {
            dispatch(selectCompName(title));
            // dispatch(addSectionTurnOff());
            setSelectedSection(id);
            dispatch(selectSectionOn());
          }}
        >
          <div className="text-center">
            <Image src={src} alt="section img" width={"200px"} height="100px" />
            <h5 className="text-white">{title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectSection;
