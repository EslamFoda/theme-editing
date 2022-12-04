import { useRef, useState } from "react";
import { Popover, ArrowContainer } from "react-tiny-popover";
import EditItem from "../../editItem";

const Test2popver = ({
  children,
  index,
  comp,
  editImage = false,
  compIndex,
  themeData = undefined,
  comps = undefined,
}) => {
  const clickMeButtonRef = useRef<HTMLButtonElement | undefined>();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["top", "right", "left", "bottom"]}
      padding={10}
      onClickOutside={() => setIsPopoverOpen(false)}
      ref={clickMeButtonRef} // if you'd like a ref to your popover's child, you can grab one here
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={"blue"}
          arrowSize={10}
          arrowStyle={{ opacity: 0.7 }}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <div
            style={{ backgroundColor: "blue", opacity: 0.7 }}
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            <EditItem
              comps={comps}
              themeData={themeData}
              comp={comp}
              index={index}
            />
          </div>
        </ArrowContainer>
      )}
    >
      <button
        style={{ textAlign: "match-parent" }}
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      >
        {children}
      </button>
    </Popover>
  );
};

export default Test2popver;
