import React from "react";
import Container from "../../../ui/Container/container";
import cn from "clsx";
const Design2 = ({ choose = false, device }) => {
  const gridClassName = cn(
    "grid lg:grid-cols-2 gap-4 grid-cols-1 sm:grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      {choose ? (
        <div className="">
          <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="grid lg:grid-cols-2 gap-2 grid-cols-1 sm:grid-cols-1">
              <div>
                <h1 className="text-small font-bold">About us</h1>
              </div>
              <div>
                <p className="text-very-small">
                  Write a background about your work, including your history,
                  your accomplishments, and any awards you've received. Use this
                  section to showcase the features of your brand.
                </p>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <div className="py-14">
          <Container>
            <div className={gridClassName}>
              <div>
                <h1 className="text-4xl font-bold">About us</h1>
              </div>
              <div>
                <p>
                  Write a background about your work, including your history,
                  your accomplishments, and any awards you've received. Use this
                  section to showcase the features of your brand.
                </p>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design2;
