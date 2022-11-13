import ColorsBar from "./colorsBar";
import ColorPalettes from "./colorPallates";
const ChangeColors = ({ colors, setCurrentColor, mode, currentColor }) => {
  return (
    <div className="bg-[#26313f] flex px-5">
      <ColorsBar />
      <div className="h-40 flex items-center gap-4 p-4  overflow-auto    w-full">
        {colors.map((color: string, i: number) => {
          return (
            <ColorPalettes
              key={i}
              allPaltes
              color={color}
              colors={colors}
              currentColor={currentColor}
              i={i}
              mode={mode}
              setCurrentColor={setCurrentColor}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ChangeColors;
