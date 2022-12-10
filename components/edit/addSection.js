import { FaPlus } from "react-icons/fa";
import { updateDoc } from "firebase/firestore";
const AddSection = ({ index, themeData }) => {

  return (
    <div className="absolute transition-all hidden group-hover:flex  z-10 duration-300 -bottom-21 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
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
            selectSection:false,
          });
        }}
        class="add-section fb "
      >
        <div className="h-full flex justify-center items-center">
          <FaPlus
            className="add-icon"
            style={{ transition: "all .3s ease-in-out" }}
          />
        </div>
        <span> add section</span>
      </div>
    </div>
  );
};

export default AddSection;
