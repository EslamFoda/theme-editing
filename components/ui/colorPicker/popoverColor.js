import React, { useCallback, useRef, useState } from "react";
import { ChromePicker } from "react-color";

import useClickOutside from "../../../hooks/useClickOutside";

export const PopoverColor = ({ color, onChange }) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="picker">
      <div
        className="swatch"
        style={{
          background: `rgba(${color?.rgb?.r}, ${color?.rgb?.g}, ${color?.rgb?.b}, ${color?.rgb?.a})`,
        }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className="popover" ref={popover}>
          <ChromePicker
            color={color.rgb ? color.rgb : color}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
};
