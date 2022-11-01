import React, { useContext } from "react";
import Frame, { FrameContext } from "react-frame-component";
import { StyleSheetManager } from "styled-components";

export const StyledFrame = (props) => {
  const { style, children, ...otherProps } = props;

  return (
    <Frame
      className="example"
      initialContent={
        '<!DOCTYPE html><html><head></head><body><div class="frame-root"></div><div id="modal-root"></div></body></html>'
      }
      style={{ display: "block", border: 0, ...style }}
      {...otherProps}
    >
      <InjectFrameStyles>{props.children}</InjectFrameStyles>
    </Frame>
  );
};

const InjectFrameStyles = (props) => {
  const { document } = useContext(FrameContext);
  return (
    <StyleSheetManager target={document.head}>
      {props.children}
    </StyleSheetManager>
  );
};
