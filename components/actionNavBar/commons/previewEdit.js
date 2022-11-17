import { FaEdit, FaEye } from "react-icons/fa";
import { closeColors } from "../../../features/colors";
import { selectCompName } from "../../../features/comp-name";
import { editImgOff } from "../../../features/edit-image";
import { addSectionTurnOff, toggleEdit } from "../../../features/edit-sections";
import { filesOff } from "../../../features/my-files";

const PreviewEdit = ({ editSections, dispatch }) => {
  return (
    <div
      className=" mx-4 justify-self-end cursor-pointer"
      onClick={() => {
        dispatch(toggleEdit());
        dispatch(addSectionTurnOff());
        dispatch(selectCompName(""));
        dispatch(closeColors());
        dispatch(filesOff());
        dispatch(editImgOff());
      }}
    >
      {editSections ? (
        <div className="flex text-[#98A2B3] hover:text-white items-center gap-3">
          <span>preview</span>
          <FaEye size={16} />
        </div>
      ) : (
        <div className="flex text-[#98A2B3] hover:text-white items-center gap-3">
          <span>edit</span>
          <FaEdit size={16} />
        </div>
      )}
    </div>
  );
};

export default PreviewEdit;
