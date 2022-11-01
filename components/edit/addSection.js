import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addSectionTurnOn } from "../../features/edit-sections";
import { selectCompName } from "../../features/comp-name";
import { getNextIndex } from "../../features/add-section";
const AddSection = ({ index }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={() => {
          const nextIndex = index + 1;
          dispatch(getNextIndex(nextIndex));
          dispatch(addSectionTurnOn());
          dispatch(selectCompName(""));
        }}
        style={{ boxShadow: "0 1px 6px 1px rgba(2,18,43,.25)" }}
        className="hidden z-10 overflow-hidden  group-hover:flex cursor-pointer hover:w-28  h-10 w-10 rounded-full  absolute transition-all duration-300 -bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-full w-full test-container  group bg-[#23cba5] flex gap-2 justify-center items-center">
          <span className="text-sm font-semibold text-white text transition-all">
            add section
          </span>
          <FaPlus color="white" size={12} />
        </div>
      </div>
    </>
  );
};

export default AddSection;
