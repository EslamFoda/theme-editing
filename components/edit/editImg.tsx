import { updateDoc } from "firebase/firestore";
const EditImg = ({ index, compIndex, themeData }) => {
  return (
    <div className="bg-[#444f5b] divide-x divide-slate-400/[.24]  rounded-md flex ">
      <span
        onClick={async () => {
          if (index || index === 0) {
            await updateDoc(themeData, {
              itemIndex: index,
              nextIndex: compIndex,
              compName: "",
              editImg: true,
              editFiles: false,
              addSection: false,
              colorsEdit: false,
            });
          } else {
            await updateDoc(themeData, {
              itemIndex: "",
              nextIndex: compIndex,
              compName: "",
              editImg: true,
              editFiles: false,
              addSection: false,
              colorsEdit: false,
              editEffects: false,
              fontEdit: false,
              stylesEditing: false,
            });
          }
        }}
        className="inline-block p-2 text-white cursor-pointer"
      >
        change image
      </span>
    </div>
  );
};

export default EditImg;
