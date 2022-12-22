import { useState, FC } from "react";
import ImageEditor from "../../../imageEditor";
import EditImgPopover from "../../../ui/editImgPopover";
import cn from "clsx";
import useMainData from "../../../../hooks/useMainData";

interface Props {
  image: string;
  index?: number;
  design?: "design5" | "design6";
  iconPosition?: "right" | "left";
  themeData: any;
  compIndex: any;
}

const ImageComp: FC<Props> = ({
  image,
  index,
  design,
  iconPosition = "left",
  themeData,
  compIndex,
}) => {
  const [open, setOpen] = useState(false);
  const { editSections } = useMainData();
  const rootClassName = cn("h-full w-full relative", {
    "hover:outline hover:outline-solid outline-[#23cba5]": editSections,
    "hover:outline-none": design === "design5",
    // "z-10":design === 'design6'
  });
  const { itemIndex, comps } = useMainData();

  return (
    <div
      style={{ zIndex: design === "design6" ? 1 : "" }}
      className={rootClassName}
    >
      {open ? (
        <ImageEditor
          itemIndex={index}
          compIndex={compIndex}
          themeData={themeData}
          comps={comps}
          image={image}
          setOpen={setOpen}
        />
      ) : (
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="bg-no-repeat  relative service-img bg-center h-full w-full bg-cover "
        >
          {editSections ? (
            <EditImgPopover
              themeData={themeData}
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
