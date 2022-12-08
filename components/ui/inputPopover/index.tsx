import dynamic from "next/dynamic";
import * as HoverCard from "@radix-ui/react-hover-card";
import useMainData from "../../../hooks/useMainData";
import { useState } from "react";
const EditInputItems = dynamic(() => import("../../inputItems/index"));
const InputPopover = ({
  children,
  inputType,
  required,
  index,
  comp,
  themeData = undefined,
  comps = undefined,
}) => {
  const { editSections } = useMainData();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HoverCard.Root
        open={isOpen}
        onOpenChange={(e) => {
          setIsOpen(e);
        }}
        openDelay={0}
        closeDelay={250}
      >
        <HoverCard.Trigger asChild>
          <div
            className={
              editSections
                ? "hover:outline  hover:outline-[3px] outline-[#23cba5]"
                : ""
            }
          >
            {children}
          </div>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          {editSections ? (
            <HoverCard.Content
              side={"top"}
              avoidCollisions={false}
              className={"HoverCardContent"}
              sideOffset={14}
            >
              <EditInputItems
                required={required}
                inputType={inputType}
                setIsOpen={setIsOpen}
                comps={comps}
                themeData={themeData}
                comp={comp}
                index={index}
              />
              <HoverCard.Arrow fill="#444f5b" className="HoverCardArrow" />
            </HoverCard.Content>
          ) : null}
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  );
};

export default InputPopover;
