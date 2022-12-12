import { updateDoc } from "firebase/firestore";
import { GrPowerReset } from "react-icons/gr";

const BgImg = ({ themeData, compIndex, selectedBgImg, comps }) => {
  const handleReset = async () => {
    comps[compIndex].selectedBgImg = "";
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };
  const handleApplyBgImg = async () => {
    comps[compIndex].backgroundImage = selectedBgImg;
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };
  return (
    <>
      <div className="space-y-2">
        <span>Background Image</span>
        <div
          style={{ backgroundImage: `url(${selectedBgImg})` }}
          className="border bg-no-repeat bg-cover bg-center border-solid h-36 w-full rounded-md flex items-center justify-center"
        >
          <button
            onClick={async () => {
              await updateDoc(themeData, {
                editImg: true,
                nextIndex: compIndex,
                bgImg: true,
              });
            }}
            className="text-sm hover:text-black/75 bg-white border border-gray-400 text-gray-500 py-1 border-solid px-2 rounded-md"
          >
            choose image
          </button>
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
            onClick={handleApplyBgImg}
            className="bg-[#0e9384] px-6 py-1 cursor-pointer rounded-full text-white"
          >
            Apply
          </span>
        </div>
      </div>
    </>
  );
};

export default BgImg;
