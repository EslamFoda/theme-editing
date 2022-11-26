import { useState, FC } from "react";
import ImageEditor from "../../../imageEditor";
import EditImgPopover from "../../../ui/editImgPopover";
import cn from "clsx";
import { useSelector } from "react-redux";

interface Props {
  image: string;
  index?: number;
  comp: {};
  compIndex: number;
  design?: "design5";
  iconPosition?: "right" | "left";
  comps: any;
  themeData:any
}

const ImageComp: FC<Props> = ({
  image,
  index,
  comp,
  compIndex,
  design,
  comps,
  iconPosition = "left",
  themeData
}) => {
  const [open, setOpen] = useState(false);
  const editSections = useSelector((state: any) => state.editSections.value);
  const rootClassName = cn("h-full w-full relative", {
    "hover:outline hover:outline-solid outline-[#23cba5]": editSections,
    "hover:outline-none": design === "design5",
  });

  return (
    <div className={rootClassName}>
      {open ? (
        <ImageEditor
          comp={comp}
          index={index}
          image={image}
          setOpen={setOpen}
        />
      ) : (
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="bg-no-repeat relative service-img bg-center h-full w-full bg-cover "
        >
          {editSections ? (
            <EditImgPopover
            themeData={themeData}
            comps={comps}
              compIndex={compIndex}
              index={index}
              setOpen={setOpen}
              iconPosition={iconPosition}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ImageComp;
