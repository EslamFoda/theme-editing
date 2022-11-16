import {
  editImgOn,
  getItemIndex,
  getCompIndex,
} from "../../features/edit-image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const EditImg = ({ comp, index, compIndex }) => {
  // const imgData = useSelector((state: any) => state.editImg.imgData);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if(imgData){
  //     console.log(imgData)
  //   }
  // }, [imgData]);
  return (
    <div className="bg-[#444f5b] divide-x divide-slate-400/[.24]  rounded-md flex ">
      <span
        onClick={() => {
          dispatch(editImgOn());
          dispatch(getCompIndex(compIndex));
          dispatch(getItemIndex(index));
        }}
        className="inline-block p-2 text-white cursor-pointer"
      >
        change image
      </span>
    </div>
  );
};

export default EditImg;
