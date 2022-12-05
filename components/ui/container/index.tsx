import cn from "clsx";
import React from "react";
interface Props {
  children?: any;
  className?: any;
  style?: any;
  clean?: boolean;
}
const Container = ({
  children,
  className,
  style = {},
  clean = false, // Full Width Screen
}: Props) => {
  const rootClassName = cn(className, {
    "mx-auto max-w-6xl  px-6 w-full": !clean,
  });

  return (
    <div style={style} className={rootClassName}>
      {children}
    </div>
  );
};

export default Container;
