import { useState, useContext, useEffect } from "react";
import { CompsContext } from "../context/compsContext";

const useBgColor = (index) => {
  const { comps, setComps } = useContext(CompsContext);
  const [color, setColor] = useState(null);

  const handleChangeColor = () => {
    color ? (comps[index].backgroundColor = color.rgb) : null;
    setComps([...comps]);
  };

  const handleReset = () => {
    setColor({
      rgb: {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      },
    });
    comps[index].backgroundColor = color.rgb;
    setComps([...comps]);
  };

  useEffect(() => {
    handleChangeColor();
  }, [color]);

  return { color, setColor, handleReset };
};

export default useBgColor;
