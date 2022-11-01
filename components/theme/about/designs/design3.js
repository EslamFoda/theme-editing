import React from "react";
import Container from "../../../ui/Container/container";
import cn from "clsx";
const Design3 = ({ choose = false, device }) => {
  const gridClassName = cn(
    "grid gap-8 lg:grid-cols-2 grid-cols-1 md:grid-cols-2 sm:grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  const order1ClassName = cn("h-[400px] order-2 lg:order-1 md:order-1", {
    "!order-2": device === "mobile",
  });
  const order2ClassName = cn(
    "space-y-4  order-1 lg:order-2 md:order-2 self-center p-5",
    {
      "!order-1": device === "mobile",
    }
  );
  return (
    <>
      {choose ? (
        <div className="grid absolute lg:grid-cols-2 grid-cols-1 md:grid-cols-2 sm:grid-cols-1">
          <div
            className={"h-32 order-2 lg:order-1 md:order-1"}
            style={{
              backgroundImage:
                "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
              backgroundSize: "cover",
              MozBackgroundSize: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className={
              "space-y-1  order-1 lg:order-2 md:order-2 self-center p-2"
            }
          >
            <h1 className="text-small font-bold">About us</h1>
            <p className="text-very-small">
              {" "}
              Write a background about your work, including your history, your
              accomplishments, and any awards you've received. Use this section
              to showcase the features of your brand.
            </p>
            <button className="text-small">more</button>
          </div>
        </div>
      ) : (
        <div className={gridClassName}>
          <div
            className={order1ClassName}
            style={{
              backgroundImage:
                "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
              backgroundSize: "cover",
              MozBackgroundSize: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className={order2ClassName}>
            <h1 className="text-4xl font-bold">About us</h1>
            <p className="max-w-lg">
              {" "}
              Write a background about your work, including your history, your
              accomplishments, and any awards you've received. Use this section
              to showcase the features of your brand.
            </p>
            <button>more</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Design3;
