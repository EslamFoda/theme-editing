import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { IoDuplicateOutline } from "react-icons/io5";
import { TfiTrash } from "react-icons/tfi";
import { updateDoc } from "firebase/firestore";
import { SlSettings } from "react-icons/sl";
import InputTypesPopup from "../ui/inputTypesPopup";
const EditInputItems = ({
  index,
  comp,
  themeData,
  comps,
  setIsOpen,
  inputType,
  required,
}) => {
  const lastItem = comp.compData.items.lastIndexOf(
    comp.compData.items[comp.compData.items.length - 1]
  );
  const moveInArray = function (arr: [], from: number, to: number) {
    // Make sure a valid array is provided
    if (Object.prototype.toString.call(arr) !== "[object Array]") {
      throw new Error("Please provide a valid array");
    }

    // Delete the item from it's current position
    const item = arr.splice(from, 1);

    // Make sure there's an item to move
    if (!item.length) {
      throw new Error("There is no item in the array at index " + from);
    }

    // Move the item to its new position
    arr.splice(to, 0, item[0]);
  };

  const icons = [
    {
      icon: <BsArrowDownShort size={25} />,
      id: 1,
      action: async () => {
        moveInArray(comp.compData.items, index, index + 1);
        await updateDoc(themeData, {
          allSections: [...comps],
          itemIndex: index + 1,
        });
        setIsOpen(false);
      },
    },
    {
      icon: index === 0 ? null : <BsArrowUpShort size={25} />,
      id: 4,
      action: async () => {
        moveInArray(comp.compData.items, index, index - 1);
        await updateDoc(themeData, {
          allSections: [...comps],
          itemIndex: index - 1,
        });
        setIsOpen(false);
      },
    },
    {
      icon: <TfiTrash size={25} />,
      id: 2,
      action: async () => {
        const removedItem = comp.compData.items.filter(
          (_: any, i: number) => i !== index
        );
        comp.compData.items = removedItem;
        await updateDoc(themeData, {
          allSections: [...comps],
        });
        setIsOpen(false);
      },
    },
    {
      icon: <IoDuplicateOutline size={25} />,
      id: 3,
      action: async () => {
        comp.compData.items.splice(index + 1, 0, {
          ...comp.compData.items[index],
          id: Math.floor(Math.random() * Date.now()).toString(),
        });
        await updateDoc(themeData, {
          allSections: [...comps],
        });
        setIsOpen(false);
      },
    },
    {
      icon: (
        <InputTypesPopup
          index={index}
          comp={comp}
          themeData={themeData}
          comps={comps}
          inputType={inputType}
          required={required}
        >
          <SlSettings size={25} />
        </InputTypesPopup>
      ),
      id: 5,
      action: () => {},
    },
  ];

  return (
    <div className="bg-[#444f5b] divide-x divide-slate-400/[.24]  rounded-md flex ">
      {icons.map((icon) => {
        return (
          <div
            onClick={icon.action}
            key={icon.id}
            className={`${
              (index === 0 && icon.id === 4) ||
              (lastItem === index && icon.id === 1) ||
              (comp.compData.items.length === 1 && icon.id === 2)
                ? "hidden"
                : "block"
            }  justify-self-center cursor-pointer self-center p-2 text-white`}
          >
            {icon.icon}
          </div>
        );
      })}
    </div>
  );
};

export default EditInputItems;
