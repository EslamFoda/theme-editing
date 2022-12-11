import { updateDoc } from "firebase/firestore";

const BgImg = ({ themeData, compIndex }) => {
  return (
    <>
      <div className="space-y-2">
        <span>Background Image</span>
        <div className="border border-solid h-32 w-full rounded-md flex items-center justify-center">
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
      </div>
    </>
  );
};

export default BgImg;
