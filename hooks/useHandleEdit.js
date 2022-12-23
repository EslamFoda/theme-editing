import { updateDoc } from "firebase/firestore";

const useHandleEdit = (comps, comp, index, themeData, compData = undefined) => {
  const handleEdit = async (value, keys) => {
    const objectIndex = comps.findIndex((obj) => obj.id === comp.id);
    if (objectIndex === index) {
      comp.compData[keys] = value;
    }
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };

  const handleMultiEdit = async (value, id, keys) => {
    const update = compData.items.map((item) =>
      item.id === id ? { ...item, [keys]: value } : item
    );
    comp.compData.items = update;
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };

  return { handleEdit, handleMultiEdit };
};

export default useHandleEdit;
