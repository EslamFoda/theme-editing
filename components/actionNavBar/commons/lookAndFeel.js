import { closeColors, openColors } from "../../../features/colors";
import { selectCompName } from "../../../features/comp-name";
import { editImgOff } from "../../../features/edit-image";
import { addSectionTurnOff } from "../../../features/edit-sections";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdOutlineInvertColors } from "react-icons/md";
import { BsFonts } from "react-icons/bs";
import MyTooltip from "../../ui/tooltip";
import { useState, useEffect } from "react";
import { filesOff } from "../../../features/my-files";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import {
  stylesEditorOff,
  stylesEditorOn,
  fontEditOn,
  fontEditOff,
  editEffectsOff,
  editEffectsOn,
} from "../../../features/stylesEditing";
import { useSelector } from "react-redux";
const LookAndFeel = ({ editSections, dispatch }) => {
  const fontEdit = useSelector((state) => state.stylesEdit.fontEdit);
  const editEffects = useSelector((state) => state.stylesEdit.editEffects);
  const colorsEdit = useSelector((state) => state.colors.enableColors);
  const [value, setValue] = useState(null);
  useEffect(() => {
    if (!fontEdit && !editEffects && !colorsEdit) {
      setValue("");
    }
  }, [fontEdit, editEffects, colorsEdit]);
  const btns = [
    {
      title: "Effects",
      isOpen: editEffects,
      id: 1,
      Icon: HiOutlineSparkles,
      action: () => {
        dispatch(closeColors());
        dispatch(selectCompName(""));
        dispatch(addSectionTurnOff());
        dispatch(editImgOff());
        dispatch(filesOff());
        dispatch(fontEditOff());
        dispatch(stylesEditorOn());
        dispatch(editEffectsOn());
        if (editEffects) {
          dispatch(editEffectsOff());
          dispatch(stylesEditorOff());
        } else {
          dispatch(stylesEditorOn());
        }
      },
    },
    {
      title: "Fonts",
      id: 2,
      isOpen: fontEdit,
      Icon: BsFonts,
      action: () => {
        dispatch(closeColors());
        dispatch(selectCompName(""));
        dispatch(addSectionTurnOff());
        dispatch(editImgOff());
        dispatch(filesOff());
        dispatch(fontEditOn());
        dispatch(editEffectsOff());
        dispatch(stylesEditorOn());
        if (fontEdit) {
          dispatch(fontEditOff());
          dispatch(stylesEditorOff());
        } else {
          dispatch(stylesEditorOn());
        }
      },
    },
    {
      title: "Colors",
      id: 3,
      isOpen: colorsEdit,
      Icon: MdOutlineInvertColors,
      action: () => {
        dispatch(openColors());
        dispatch(fontEditOff());
        dispatch(selectCompName(""));
        dispatch(addSectionTurnOff());
        dispatch(editImgOff());
        dispatch(filesOff());
        dispatch(editEffectsOff());
        dispatch(stylesEditorOn());
        if (colorsEdit) {
          dispatch(stylesEditorOff());
          dispatch(closeColors());
        } else {
          dispatch(stylesEditorOn());
        }
      },
    },
  ];
  return (
    <ToggleGroup.Root
      className="ToggleGroup"
      value={value}
      type="single"
      onValueChange={(val) => {
        setValue(val);
      }}
    >
      {editSections ? (
        <div className="text-[#98A2B3] rounded-sm p-1 gap-1 bg-[#1f2b39] flex">
          {btns.map((btn) => {
            return (
              <ToggleGroup.Item
                className="ToggleGroupLookAndFeel"
                aria-label={btn.title}
                key={btn.id}
                value={btn.title}
              >
                <div>
                  <MyTooltip content={btn.title}>
                    <div
                      onClick={btn.action}
                      className="bg-[#283340] lookAndFeelContainer rounded-sm cursor-pointer hover:bg-[hsla(0,0%,100%,.7)] hover:text-[#0a0a0a] p-2"
                    >
                      <btn.Icon size={25} />
                    </div>
                  </MyTooltip>
                </div>
              </ToggleGroup.Item>
            );
          })}
        </div>
      ) : null}
    </ToggleGroup.Root>
  );
};

export default LookAndFeel;
