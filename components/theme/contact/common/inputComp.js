import { updateDoc } from "firebase/firestore";
import { useState } from "react";
import useMainData from "../../../../hooks/useMainData";

const InputComp = ({
  placeHolder,
  required,
  inputType,
  comp,
  comps,
  index,
  themeData,
}) => {
  const { editSections } = useMainData();
  const [placeHolderVal, setPlaceHolderVal] = useState(placeHolder);
  const [val, setVal] = useState("");
  const handleChangePlaceHolder = async () => {
    if (editSections) {
      comp.compData.items[index].placeHolder = placeHolderVal;
      await updateDoc(themeData, {
        allSections: [...comps],
      });
    }
  };
  return (
    <>
      {inputType === "textarea" ? (
        <textarea
          onBlur={handleChangePlaceHolder}
          onChange={(e) => {
            editSections
              ? setPlaceHolderVal(e.target.value)
              : setVal(e.target.value);
          }}
          className={`appearance-none h-36 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
          value={editSections ? placeHolderVal : val}
          placeholder={editSections ? "" : placeHolder}
          required={required}
        />
      ) : (
        <input
          onBlur={handleChangePlaceHolder}
          onChange={(e) => {
            editSections
              ? setPlaceHolderVal(e.target.value)
              : setVal(e.target.value);
          }}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            editSections
              ? "hover:outline  hover:outline-[3px] outline-[#23cba5]"
              : ""
          }`}
          type={inputType}
          value={editSections ? placeHolderVal : val}
          placeholder={editSections ? "" : placeHolder}
          required={required}
        />
      )}
    </>
  );
};

export default InputComp;
