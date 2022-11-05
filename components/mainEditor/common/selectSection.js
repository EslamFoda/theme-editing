import { selectSectionOn } from "../../../features/add-section";
import { selectCompName } from "../../../features/comp-name";
import Image from "next/image";
const SelectSection = ({ sectionsImgs, setSelectedSection, dispatch }) => {
  return (
    <div className="h-40 flex items-center gap-4  overflow-auto   w-full">
      {sectionsImgs.map(({ src, id, title }, i) => (
        <div
          className={`h-32 relative rounded-md  cursor-pointer min-w-[208px] `}
          key={id}
          onClick={() => {
            dispatch(selectCompName(title));
            setSelectedSection(id);
            dispatch(selectSectionOn());
          }}
        >
          <div className="text-center h-full">
            <div className="w-full h-4/5 relative">
              <Image
                src={src}
                alt="section img"
                className="absolute"
                layout="fill"
              />
            </div>
            <h5 className="text-white">{title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectSection;
