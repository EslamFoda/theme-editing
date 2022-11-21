import Bar from "./bar";
import ColorPalettes from "./colorPallates";
import AllFonts from "./allFonts";
const ChangeStyles = ({
  colors,
  setCurrentColor,
  mode,
  currentColor,
  openColors,
  fontEdit,
  fonts,
  currentFont,
  setCurrentFont,
}) => {
  return (
    <div className="bg-[#26313f] flex px-5">
      <Bar openColors={openColors} fontEdit={fontEdit} currentFont={currentFont}/>
      <div className="h-40 flex items-center gap-4 p-4  overflow-auto    w-full">
        {openColors &&
          colors?.map((color: string, i: number) => {
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
        {fontEdit
          ? fonts?.map((font, i) => {
              return (
                <AllFonts
                  fonts={fonts}
                  font={font}
                  currentFont={currentFont}
                  i={i}
                  setCurrentFont={setCurrentFont}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
export default ChangeStyles;
