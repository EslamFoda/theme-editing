import { updateDoc } from "firebase/firestore";
import { GrPowerReset } from "react-icons/gr";
import { PopoverColor } from "../ui/colorPicker/popoverColor";

const BgColor = ({
  currentColor,
  setCurretColor,
  setColor,
  comps,
  themeData,
  compIndex,
}) => {
  const handleApplyColor = async () => {
    setColor(currentColor);
    comps[compIndex].backgroundImage = "";
    comps[compIndex].selectedBgImg = "";
    comps[compIndex].bgImgColor = {
      r: 255,
      g: 255,
      b: 255,
      a: 0,
    };
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };

  const handleReset = () => {
    setCurretColor({
      rgb: {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      },
    });
  };

  return (
    <>
      <div>
        <span>Background Color</span>
        <div className="flex mt-2 items-center gap-4 w-full border border-gray rounded-md p-1 px-2">
          <PopoverColor color={currentColor} onChange={setCurretColor} />
          <span>{currentColor.hex ? currentColor.hex : "#FFFFFF"}</span>
        </div>
      </div>
      <div
        onClick={handleReset}
        className="inline-flex items-center cursor-pointer font-bold gap-2"
      >
        <GrPowerReset scale={10} size={20} />
        <span>Reset Background</span>
      </div>
      <div className="flex justify-between items-center">
        <span onClick={close} className="cursor-pointer font-semibold">
          Cancel
        </span>
        <span
          onClick={handleApplyColor}
          className="bg-[#0e9384] px-6 py-1 cursor-pointer rounded-full text-white"
        >
          Apply
        </span>
      </div>
    </>
  );
};

export default BgColor;
