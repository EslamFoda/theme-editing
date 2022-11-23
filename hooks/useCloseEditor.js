import { useDispatch } from "react-redux";
import { closeColors } from "../features/colors";
import {
  editEffectsOff,
  fontEditOff,
  stylesEditorOff,
} from "../features/stylesEditing";
import { addSectionTurnOff } from "../features/edit-sections";
import { editImgOff } from "../features/edit-image";
import { filesOff } from "../features/my-files";
import { selectCompName } from "../features/comp-name";
const useCloseEditor = () => {
  const dispatch = useDispatch();

  const handleCloseEditor = () => {
    dispatch(closeColors());
    dispatch(fontEditOff());
    dispatch(selectCompName(""));
    dispatch(addSectionTurnOff());
    dispatch(editImgOff());
    dispatch(filesOff());
    dispatch(editEffectsOff());
    dispatch(stylesEditorOff());
  };

  return { handleCloseEditor };
};

export default useCloseEditor;
