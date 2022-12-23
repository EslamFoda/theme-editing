import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
  const { totalDesigns } = comp;

  const handlePrev = async () => {
    if (designNum > 1) {
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
  };

  const handleNext = async () => {
    if (designNum < totalDesigns) {
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
  };

  return (
    <>
      {editSections && (
        <div
          style={{ zIndex: 100 }}
          className="hidden group-hover:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-40"
        >
          <div
            style={{ boxShadow: "0 1px 6px 1px rgba(2,18,43,.25)" }}
            className={`${
              designNum === 1 ? "opacity-40 cursor-default" : ""
            } cursor-pointer coolBeans flex items-center z-30 duration-300  btn btn-3  transition-all lg:w-32 md:w-32 w-11 justify-between  px-4 py-1 rounded-full`}
            onClick={handlePrev}
          >
            <FaChevronLeft />

            <span className="text-sm hidden lg:block md:block">Previous</span>
          </div>

          <div
            style={{ boxShadow: "0 1px 6px 1px rgba(2,18,43,.25)" }}
            className={`${
              designNum === totalDesigns ? "opacity-40 cursor-default" : ""
            } cursor-pointer coolBeans flex items-center duration-300  btn btn-3  transition-all lg:w-32 md:w-32 w-11 justify-between z-30  px-4 py-1 rounded-full`}
            onClick={handleNext}
          >
            <span className="text-sm hidden lg:block md:block">Next</span>
            <FaChevronRight />
          </div>
        </div>
      )}
    </>
  );
};

export default ChangeSection;
