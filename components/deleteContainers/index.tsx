import { TfiTrash } from "react-icons/tfi";
import { useContext, useState } from "react";
import { CompsContext } from "../../context/compsContext";
const DeleteContainers = ({ index }) => {
  const { comps, setComps } = useContext(CompsContext);
  const [overlay, setOverlay] = useState(false);
  const handleDeleteSection = () => {
    const removedSection = comps.filter((_: any, i: number) => i !== index);
    setComps([...removedSection]);
  };
  const openOverlay = () => {
    setOverlay(true);
  };
  return (
    <>
      <div
        onClick={openOverlay}
        className="absolute z-50  top-5 left-5 transform -translate-x-1/2 -translate-y-1/2 "
      >
        <div className="expand-container">
          <div className="icon-container hover:!text-[red]">
            <span className="expand-icon">
              <TfiTrash size={23} />
            </span>
            <span className="text !text-[red]">Remove Section</span>
          </div>
        </div>
      </div>
      {overlay && (
        <div className="absolute top-0 z-50 right-0 bg-[#202b39f7] flex justify-center items-center gap-4 flex-col w-full h-full">
          <div>
            <h1 className="text-white text-2xl">
              do you want to delete this section ?
            </h1>
            <span className="text-white text-lg">
              (You can't go back from this act)
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <button
              className="bg-red-600 rounded-full  text-white py-1 font-semibold px-4 hover:opacity-80 transition-all"
              onClick={handleDeleteSection}
            >
              Yes , Delete
            </button>
            <button
              className="border-white text-white  rounded-full py-1  px-4 font-semibold border-2 border-solid hover:bg-white hover:text-[#202b39f7] transition-all"
              onClick={() => {
                setOverlay(false);
              }}
            >
              cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteContainers;
