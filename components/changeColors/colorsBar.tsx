import React from "react";
import ColorPalettes from "./colorPallates";
interface Props {}
const ColorsBar: React.FC<Props> = ({}) => {
  return (
    <div className="flex ">
      <div className="w-72 space-y-2  py-4 border-r border-solid border-[#353f4b] h-full">
        <h2 className="text-2xl  font-bold text-white">
          Choose Color palettes
        </h2>
        <h5 className="text-white">
          Your choice will affect all fonts of the site
        </h5>
      </div>
      <div className="w-72 space-y-2  p-4 border-r  border-solid border-[#353f4b] h-full">
        <ColorPalettes allPaltes={false} label={"Current Color"} />
      </div>
    </div>
  );
};

export default ColorsBar;
