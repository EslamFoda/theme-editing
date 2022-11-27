import { useSelector, useDispatch } from "react-redux";
import { selectCompName } from "../../features/comp-name";
import { addSectionTurnOff } from "../../features/edit-sections";
import { getNextIndex } from "../../features/add-section";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { closeColors } from "../../features/colors";
import { editImgOff } from "../../features/edit-image";
import { filesOff } from "../../features/my-files";
import {
  editEffectsOff,
  fontEditOff,
  stylesEditorOff,
} from "../../features/stylesEditing";
import { updateDoc } from "firebase/firestore";
import useMainData from "../../hooks/useMainData";
const ChangeSection = ({
  compName,
  designNum,
  comps,
  index,
  setComps,
  comp,
  themeData,
}) => {
  const { editSections } = useMainData();
  const device = useSelector((state) => state.mainWidth.device);
  const dispatch = useDispatch();

  const handlePrev = async () => {
    // dispatch(selectCompName(compName));
    // dispatch(getNextIndex(index));

    if (designNum >= 2) {
      const objectIndex = comps.findIndex((obj) => obj.id === comp.id);
      comps[objectIndex].designNum -= 1;
      await updateDoc(themeData, {
        allSections: [...comps],
        nextIndex: index,
        compName: compName,
        editFiles: false,
        editImg: false,
        addSection: false,
        colorsEdit: false,
        editEffects: false,
        fontEdit: false,
        stylesEditing: false,
      });
    }
    // dispatch(addSectionTurnOff());
    // dispatch(closeColors());
    // dispatch(editImgOff());
    // dispatch(editEffectsOff());
    // dispatch(fontEditOff());
    // dispatch(stylesEditorOff());
    // dispatch(filesOff());
  };

  const handleNext = async () => {
    // dispatch(selectCompName(compName));
    // dispatch(getNextIndex(index));
    if (designNum <= 4) {
      const objectIndex = comps.findIndex((obj) => obj.id === comp.id);
      comps[objectIndex].designNum += 1;
      await updateDoc(themeData, {
        allSections: [...comps],
        nextIndex: index,
        compName: compName,
        editFiles: false,
        editImg: false,
        addSection: false,
        colorsEdit: false,
        editEffects: false,
        fontEdit: false,
        stylesEditing: false,
      });
    }

    // dispatch(addSectionTurnOff());
    // dispatch(closeColors());
    // dispatch(editImgOff());
    // dispatch(editEffectsOff());
    // dispatch(fontEditOff());
    // dispatch(filesOff());
    // dispatch(stylesEditorOff());
  };

  return (
    <>
      {editSections && (
        <div className="hidden group-hover:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-40">
          <div
            style={{ boxShadow: "0 1px 6px 1px rgba(2,18,43,.25)" }}
            className={`cursor-pointer coolBeans flex items-center duration-300  btn btn-3  transition-all ${
              device === "mobile" ? "w-11" : "lg:w-48 md:w-48 w-11"
            } justify-between  px-4 py-1 rounded-full`}
            onClick={handlePrev}
          >
            <FaChevronLeft />
            {device === "mobile" ? null : (
              <span className="text-sm hidden lg:block md:block">
                Previous Design
              </span>
            )}
          </div>
          <div
            style={{ boxShadow: "0 1px 6px 1px rgba(2,18,43,.25)" }}
            className={`cursor-pointer coolBeans flex items-center duration-300  btn btn-3  transition-all ${
              device === "mobile" ? "w-11" : "lg:w-48 md:w-48 w-11"
            } justify-between  px-4 py-1 rounded-full`}
            onClick={handleNext}
          >
            {device === "mobile" ? null : (
              <span className="text-sm hidden lg:block md:block">
                Next Design
              </span>
            )}
            <FaChevronRight />
          </div>
        </div>
      )}
    </>
  );
};

export default ChangeSection;
