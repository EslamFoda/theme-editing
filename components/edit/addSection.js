import { FaPlus } from "react-icons/fa";
import { updateDoc } from "firebase/firestore";
import useMainData from "../../hooks/useMainData";
const AddSection = ({ index, themeData }) => {
  const { nextIndex, addSection } = useMainData();
  return (
    <div
      className={`absolute transition-all  ${
        nextIndex === index + 1 && addSection ? "!flex" : "hidden"
      } group-hover:flex  z-10 duration-300 -bottom-21 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
    >
      <div
        onClick={async () => {
          const nextIndex = index + 1;
          await updateDoc(themeData, {
            nextIndex: nextIndex,
            compName: "",
            editFiles: false,
            editImg: false,
            addSection: true,
            editEffects: false,
            fontEdit: false,
            stylesEditing: false,
            colorsEdit: false,
            selectSection: false,
          });
        }}
        className={`add-section  fb ${
          nextIndex === index + 1 && addSection
            ? "!w-[140px] flex items-center justify-evenly text-white cursor-pointer"
            : ""
        }`}
      >
        <div className="h-full flex justify-center items-center">
          <FaPlus
            className={`${
              nextIndex === index + 1 && addSection ? "" : "add-icon"
            }`}
            style={{ transition: "all .3s ease-in-out" }}
          />
        </div>
        <span> add section</span>
      </div>
    </div>
  );
};

export default AddSection;
