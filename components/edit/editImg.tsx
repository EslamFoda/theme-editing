import {
  editImgOn,
  getItemIndex,
  getCompIndex,
} from "../../features/edit-image";
import { useDispatch } from "react-redux";
import { addSectionTurnOff } from "../../features/edit-sections";
import { selectCompName } from "../../features/comp-name";
import { closeColors } from "../../features/colors";
import { filesOff } from "../../features/my-files";
const EditImg = ({ comp, index, compIndex }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#444f5b] divide-x divide-slate-400/[.24]  rounded-md flex ">
      <span
        onClick={() => {
          dispatch(editImgOn());
          dispatch(getCompIndex(compIndex));
          dispatch(getItemIndex(index));
          dispatch(addSectionTurnOff());
          dispatch(selectCompName(""));
          dispatch(closeColors());
          dispatch(filesOff());
        }}
        className="inline-block p-2 text-white cursor-pointer"
      >
        change image
      </span>
    </div>
  );
};

export default EditImg;
