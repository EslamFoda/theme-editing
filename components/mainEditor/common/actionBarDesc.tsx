import React from "react";
import { selectSectionOff } from "../../../features/add-section";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  selectSection: boolean;
  compName: string;
  dispatch: () => void;
}
const ActionBarDesc: React.FC<Props> = ({
  selectSection,
  compName,
  dispatch,
}) => {
  const handleBack = () => {
    // @ts-ignore
    dispatch(selectSectionOff());
  };
  return (
    <div className="w-80 space-y-2  py-4 border-r mr-4 border-solid border-[#353f4b] h-[164px]">
      {selectSection ? (
        <>
          <h2
            className="border border-white py-1 px-5 rounded-full cursor-pointer hover:bg-white  hover:text-[#353f4b] text-white text-xl inline-flex gap-2 font-semibold items-center"
            onClick={handleBack}
          >
            <FaArrowLeft size={15} />
            back
          </h2>
          <h2 className="text-3xl  font-bold text-white">{compName}</h2>
        </>
      ) : (
        <>
          <h2 className="text-2xl  font-bold text-white">
            Choose your section
          </h2>
          <h5 className="text-white">choose on of them</h5>
        </>
      )}
    </div>
  );
};

export default ActionBarDesc;
