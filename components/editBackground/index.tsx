import React, { useState, useEffect } from "react";
import { IoImagesOutline } from "react-icons/io5";
import { MdOutlineInvertColors } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { PopoverColor } from "../ui/colorPicker/popoverColor";
import { GrPowerReset } from "react-icons/gr";
import * as Popover from "@radix-ui/react-popover";
import useCloseEditor from "../../hooks/useCloseEditor";
import BgImg from "./bgImg";
import BgColor from "./bgColor";
import useMainData from "../../hooks/useMainData";
import { updateDoc } from "firebase/firestore";
const EditBackground = ({
  setColor,
  backgroundColor,
  themeData,
  compIndex,
  selectedBgImg,
  backgroundImage,
}) => {
  const { comps } = useMainData();
  const { handleCloseEditor } = useCloseEditor();
  const [openBgColor, setOpenBgColor] = useState(true);
  const [openBgImg, setOpenBgImg] = useState(false);

  const [currentColor, setCurretColor] = useState<any>({
    rgb: {
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    },
  });

  const valueToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  const rgbaToHex = (r, g, b) => {
    return "#" + valueToHex(r) + valueToHex(g) + valueToHex(b);
  };

  useEffect(() => {
    backgroundColor
      ? setCurretColor({
          rgb: backgroundColor,
          hex: rgbaToHex(
            backgroundColor.r,
            backgroundColor.g,
            backgroundColor.b
          ),
        })
      : null;
  }, []);

  return (
    <>
      <Popover.Root>
        <Popover.Trigger onClick={handleCloseEditor} asChild>
          <div className="absolute z-40  top-20 left-5 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="expand-container">
              <div className="icon-container">
                <span className="expand-icon">
                  <IoImagesOutline size={20} />
                </span>
                <span className="text">Edit Background</span>
              </div>
            </div>
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="PopoverContent z-50"
            collisionPadding={{ left: 20 }}
            avoidCollisions={false}
            align="start"
            sideOffset={60}
            onInteractOutside={async () => {
              comps[compIndex].selectedBgImg = backgroundImage;
              await updateDoc(themeData, {
                allSections: [...comps],
              });
            }}
          >
            <div className="bg-white shadow-custom w-80 rounded-xl ">
              <div className="bg-[#202b39] flex justify-between rounded-t-xl items-center p-4 text-white ">
                <h3 className="font-bold text-lg">Background settings</h3>
                <Popover.Close className="PopoverClose" aria-label="Close">
                  <div className="cursor-pointer">
                    <IoClose />
                  </div>
                </Popover.Close>
              </div>
              <div className="flex p-2 items-center gap-2">
                <div
                  onClick={() => {
                    setOpenBgColor(true);
                    setOpenBgImg(false);
                  }}
                  className={`flex items-center justify-center p-2 cursor-pointer rounded-full border border-gray  gap-2 ${
                    openBgColor
                      ? "bg-[#0e9384] text-white"
                      : "border border-gray text-[#667085] bg-white"
                  }  w-full`}
                >
                  <MdOutlineInvertColors size={23} />
                  <span className="font-bold">Color</span>
                </div>
                <div
                  onClick={() => {
                    setOpenBgImg(true);
                    setOpenBgColor(false);
                  }}
                  className={`${
                    openBgImg
                      ? "bg-[#0e9384] text-white"
                      : "text-[#667085] border border-gray bg-white "
                  } flex  items-center gap-2 p-2 cursor-pointer rounded-full justify-center   w-full `}
                >
                  <IoImagesOutline size={20} />
                  <span className="font-bold">Images</span>
                </div>
              </div>
              <div className="space-y-8 p-4">
                {openBgColor && (
                  <BgColor
                    backgroundColor={backgroundColor}
                    currentColor={currentColor}
                    setColor={setColor}
                    setCurretColor={setCurretColor}
                  />
                )}
                {openBgImg && (
                  <BgImg
                    comps={comps}
                    themeData={themeData}
                    compIndex={compIndex}
                    selectedBgImg={selectedBgImg}
                  />
                )}
              </div>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
};

export default EditBackground;
