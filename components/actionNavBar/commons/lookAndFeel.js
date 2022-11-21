import { closeColors, openColors } from "../../../features/colors";
import { selectCompName } from "../../../features/comp-name";
import { editImgOff } from "../../../features/edit-image";
import { addSectionTurnOff } from "../../../features/edit-sections";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdOutlineInvertColors } from "react-icons/md";
import { BsFonts } from "react-icons/bs";
import MyTooltip from "../../ui/tooltip";
import { filesOff } from "../../../features/my-files";
import {
  toggleStylesEditor,
  stylesEditorOff,
  stylesEditorOn,
  fontEditOn,
  fontEditOff,
} from "../../../features/stylesEditing";
import { useSelector } from "react-redux";
const LookAndFeel = ({ editSections, dispatch }) => {
  const fontEdit = useSelector((state) => state.stylesEdit.fontEdit);
  const colorsEdit = useSelector((state) => state.colors.enableColors);
  const btns = [
    { title: "Effects", id: 1, Icon: HiOutlineSparkles, action: () => {} },
    {
      title: "Fonts",
      id: 2,
      Icon: BsFonts,
      action: () => {
        dispatch(closeColors());
        dispatch(selectCompName(""));
        dispatch(addSectionTurnOff());
        dispatch(editImgOff());
        dispatch(filesOff());
        dispatch(fontEditOn());
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
      Icon: MdOutlineInvertColors,
      action: () => {
        dispatch(openColors());
        dispatch(fontEditOff());
        dispatch(selectCompName(""));
        dispatch(addSectionTurnOff());
        dispatch(editImgOff());
        dispatch(filesOff());
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
    <>
      {" "}
      {editSections ? (
        <div className="text-[#98A2B3] rounded-sm p-1 gap-1 bg-[#1f2b39] flex">
          {btns.map((btn) => {
            return (
              <div key={btn.id}>
                <MyTooltip content={btn.title}>
                  <div
                    onClick={btn.action}
                    className="bg-[#283340] rounded-sm cursor-pointer hover:bg-[hsla(0,0%,100%,.7)] hover:text-[#0a0a0a] p-2"
                  >
                    <btn.Icon size={25} />
                  </div>
                </MyTooltip>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default LookAndFeel;
