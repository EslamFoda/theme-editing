import EditItem from "../../editItem";
import EditImg from "../../edit/editImg";
import { useSelector } from "react-redux";
import * as HoverCard from "@radix-ui/react-hover-card";
export function EditPopover({ children, index, comp, editImage = false }) {
  const editSections = useSelector((state: any) => state.editSections.value);

  return (
    <>
      <HoverCard.Root openDelay={0} closeDelay={100}>
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
              className={editImage ? "HoverCardContent_Img" :"HoverCardContent"}
              sideOffset={14}
            >
              {editImage ? <EditImg /> : <EditItem comp={comp} index={index} />}
              <HoverCard.Arrow fill="#444f5b" className="HoverCardArrow" />
            </HoverCard.Content>
          ) : null}
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  );
}
