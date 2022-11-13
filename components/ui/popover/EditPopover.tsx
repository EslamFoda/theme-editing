import { Arrow, useHover, useLayer } from "react-laag";
import EditItem from "../../editItem";
import { useSelector } from "react-redux";
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
      {isOver &&
        editSections &&
        renderLayer(
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
        )}
      <div
        className={`${
          editSections
            ? "hover:outline outline-offset-8 hover:outline-2 outline-[#23cba5] "
            : ""
        }`}
        {...triggerProps}
        {...hoverProps}
      >
        {children}
      </div>
    </>
  );
}
