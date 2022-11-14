import { Arrow, useHover, useLayer } from "react-laag";
import EditItem from "../../editItem";
import { useSelector } from "react-redux";
import * as HoverCard from "@radix-ui/react-hover-card";
export function EditPopover({ children, index, comp }) {
  const editSections = useSelector((state: any) => state.editSections.value);
  const [isOver, hoverProps] = useHover({
    delayLeave: 100,
    delayEnter: 100,
    hideOnScroll: false,
  });

  const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
    isOpen: isOver,
    triggerOffset: 20,
    placement: "top-center",
  });

  return (
    <>
      {/* {isOver && editSections
        ? renderLayer(
            <div {...layerProps} {...hoverProps}>
              <EditItem comp={comp} index={index} />
              <Arrow
                {...arrowProps}
                backgroundColor={"#444f5b"}
                borderColor={"#444f5b"}
                borderWidth={2}
                size={6}
              />
            </div>
          )
        : null}
      {editSections ? (
        <div
          className={`hover:outline outline-offset-8 hover:outline-2 outline-[#23cba5]`}
          {...triggerProps}
          {...hoverProps}
        >
          {children}
        </div>
      ) : (
        <div>{children}</div>
      )} */}

      <HoverCard.Root openDelay={0} closeDelay={100}>
        <HoverCard.Trigger
          className={`${
            editSections
              ? "hover:outline outline-offset-8 hover:outline-2 outline-[#23cba5]"
              : ""
          } `}
          asChild
        >
          <div>{children}</div>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          {editSections ? (
            <HoverCard.Content
              side="top"
              className="HoverCardContent"
              sideOffset={14}
            >
              <EditItem comp={comp} index={index} />
              <HoverCard.Arrow fill="#444f5b" className="HoverCardArrow" />
            </HoverCard.Content>
          ) : null}
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  );
}
