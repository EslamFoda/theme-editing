import { IoImagesOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { closeColors } from "../../features/colors";
import { FC } from "react";
import { selectCompName } from "../../features/comp-name";
import {
  editImgOn,
  getCompIndex,
  getItemIndex,
} from "../../features/edit-image";
import { addSectionTurnOff } from "../../features/edit-sections";
import { filesOff } from "../../features/my-files";
import { updateDoc } from "firebase/firestore";

interface Props {
  compIndex: number;
  index: number;
  themeData: any;
  editSections: boolean;
}

const ChangeBgImg: FC<Props> = ({
  compIndex,
  index = undefined,
  themeData,
  editSections,
}) => {
  // const editSections = useSelector((state: any) => state.editSections.value);
  const dispatch = useDispatch();
  const handleChangeImg = async () => {
    if (index) {
      await updateDoc(themeData, {
        nextIndex: compIndex,
        itemIndex: index,
        compName: "",
        editImg: true,
        editFiles: false,
        addSection: false,
        colorsEdit: false,
      });
      // dispatch(editImgOn());
      // dispatch(getCompIndex(compIndex));
      // dispatch(getItemIndex(index));
      // dispatch(addSectionTurnOff());
      // dispatch(selectCompName(""));
      // dispatch(closeColors());
      // dispatch(filesOff());
    } else {
      await updateDoc(themeData, {
        nextIndex: compIndex,
        compName: "",
        editImg: true,
        editFiles: false,
        addSection: false,
        colorsEdit: false,
      });
      // dispatch(editImgOn());
      // dispatch(getCompIndex(compIndex));
      // dispatch(getItemIndex(index));
      // dispatch(addSectionTurnOff());
      // dispatch(selectCompName(""));
      // dispatch(closeColors());
      // dispatch(filesOff());
    }
  };

  return (
    <>
      {editSections ? (
        <div
          onClick={handleChangeImg}
          className="absolute z-40 floating-img-editor top-5 left-5 transform -translate-x-1/2 -translate-y-1/2 "
        >
          <div className="expand-container">
            <div className="icon-container">
              <span className="expand-icon">
                <IoImagesOutline size={20} />
              </span>
              <span className="text">Edit Image</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ChangeBgImg;
