// import EditItem from "../../editItem";
// import EditImg from "../../edit/editImg";
import dynamic from "next/dynamic";
import * as HoverCard from "@radix-ui/react-hover-card";
import useMainData from "../../../hooks/useMainData";
import { useState } from "react";
const EditItem = dynamic(() => import("../../editItem"));
const EditImg = dynamic(() => import("../../edit/editImg"));
export function EditPopover({
  children,
  index,
  comp,
  editImage = false,
  compIndex = undefined,
  themeData = undefined,
  comps = undefined,
}) {
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
        <HoverCard.Trigger
          className={`${
            editSections
              ? `${
                  editImage
                    ? "hover:outline outline-offset-0 hover:outline-[3px] outline-[#23cba5]"
                    : "hover:outline outline-offset-8 hover:outline-[3px] outline-[#23cba5]"
                }`
              : ""
          } `}
          asChild
        >
          {children}
        </HoverCard.Trigger>
        <HoverCard.Portal>
          {editSections ? (
            <HoverCard.Content
              side={editImage ? "left" : "top"}
              avoidCollisions={editImage ? true : false}
              className={
                editImage ? "HoverCardContent_Img" : "HoverCardContent"
              }
              sideOffset={14}
            >
              {editImage ? (
                <EditImg
                  themeData={themeData}
                  index={index}
                  compIndex={compIndex}
                />
              ) : (
                <EditItem
                  setIsOpen={setIsOpen}
                  comps={comps}
                  themeData={themeData}
                  comp={comp}
                  index={index}
                />
              )}
              <HoverCard.Arrow fill="#444f5b" className="HoverCardArrow" />
            </HoverCard.Content>
          ) : null}
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  );
}
