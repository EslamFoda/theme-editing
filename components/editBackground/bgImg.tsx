import { updateDoc } from "firebase/firestore";
import { GrPowerReset } from "react-icons/gr";
import * as Switch from "@radix-ui/react-switch";
import { PopoverColor } from "../ui/colorPicker/popoverColor";
import { useEffect, useState } from "react";

const BgImg = ({
  themeData,
  compIndex,
  selectedBgImg,
  comps,
  enableBgColor,
  bgImgColor,
  setColor,
}) => {
  const [currentColor, setCurretColor] = useState<any>({
    rgb: {
      r: 255,
      g: 255,
      b: 255,
      a: 0,
    },
  });
  const handleReset = async () => {
    setCurretColor({
      rgb: {
        r: 255,
        g: 255,
        b: 255,
        a: 0,
      },
    });
    comps[compIndex].selectedBgImg = "";
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };
  const handleApplyBgImg = async () => {
    comps[compIndex].backgroundColor = {
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    };
    if (enableBgColor) {
      comps[compIndex].backgroundImage = selectedBgImg;
      comps[compIndex].bgImgColor = currentColor.rgb;
    } else {
      setCurretColor({
        rgb: {
          r: 255,
          g: 255,
          b: 255,
          a: 0,
        },
      });
      comps[compIndex].backgroundImage = selectedBgImg;
      comps[compIndex].bgImgColor = {
        r: 255,
        g: 255,
        b: 255,
        a: 0,
      };
    }
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };
  const handleChangeRequired = async (value: boolean) => {
    comps[compIndex].enableBgColor = value;
    await updateDoc(themeData, {
      allSections: [...comps],
    });
  };
  useEffect(() => {
    setCurretColor({
      rgb: bgImgColor
        ? bgImgColor
        : {
            r: 255,
            g: 255,
            b: 255,
            a: 0,
          },
    });
  }, [bgImgColor]);
  return (
    <>
      <div className="space-y-2">
        <span>Background Image</span>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(${currentColor.rgb.r}, ${currentColor.rgb.g}, ${currentColor.rgb.b}, ${currentColor.rgb.a}), rgba(${currentColor.rgb.r}, ${currentColor.rgb.g}, ${currentColor.rgb.b}, ${currentColor.rgb.a})),url(${selectedBgImg})`,
          }}
          className="border bg-no-repeat bg-cover bg-center border-solid h-36 w-full rounded-md flex items-center justify-center"
        >
          <button
            onClick={async () => {
              await updateDoc(themeData, {
                editImg: true,
                nextIndex: compIndex,
                bgImg: true,
              });
            }}
            className="text-sm hover:text-black/75 bg-white border border-gray-400 text-gray-500 py-1 border-solid px-2 rounded-md"
          >
            choose image
          </button>
        </div>
        <div className="cursor-pointer py-4  flex items-center">
          <Switch.Root
            defaultChecked={enableBgColor}
            onCheckedChange={handleChangeRequired}
            className="SwitchRoot"
            id="required-mode"
          >
            <Switch.Thumb className="SwitchThumb" />
          </Switch.Root>
          <label
            className="Label"
            htmlFor="required-mode"
            style={{ paddingRight: 15 }}
          >
            Add Color On The Image
          </label>
        </div>
        {enableBgColor && (
          <div>
            <span className="text-sm">Add Color On The Image</span>
            <div className="flex mt-2 items-center gap-4 w-full border border-gray rounded-md p-1 px-2">
              <PopoverColor color={currentColor} onChange={setCurretColor} />
              <span>{`rgba(${currentColor.rgb.r}, ${currentColor.rgb.g}, ${currentColor.rgb.b}, ${currentColor.rgb.a})`}</span>
            </div>
          </div>
        )}
        <div
          onClick={handleReset}
          className="inline-flex items-center cursor-pointer font-bold gap-2"
        >
          <GrPowerReset scale={10} size={20} />
          <span>Reset Background</span>
        </div>
        <div className="flex justify-between items-center">
          <span onClick={close} className="cursor-pointer font-semibold">
            Cancel
          </span>
          <span
            onClick={handleApplyBgImg}
            className="bg-[#0e9384] px-6 py-1 cursor-pointer rounded-full text-white"
          >
            Apply
          </span>
        </div>
      </div>
    </>
  );
};

export default BgImg;
