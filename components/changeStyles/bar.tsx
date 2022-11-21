import ColorPalettes from "./colorPallates";
import FontStyle from "./fontStyle";
import TextBar from "./textBar";
interface Props {
  openColors: boolean;
  fontEdit: boolean;
  currentFont?:string
}
const Bar = ({ openColors, fontEdit,currentFont }: Props) => {
  return (
    <div className="flex ">
      <TextBar
        title={openColors ? "Choose Color palettes" : "Choose Your Font"}
        subTitle="Your choice will affect all fonts of the site"
      />
      <div className="w-72 space-y-2  p-4 border-r  border-solid border-[#353f4b] h-full">
        {openColors ? (
          <ColorPalettes allPaltes={false} label={"Current Color"} />
        ) : (
          <FontStyle currentFont={currentFont}/>
        )}
      </div>
    </div>
  );
};

export default Bar;
