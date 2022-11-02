import React from "react";
import Container from "../../../ui/Container/container";
const Design4 = ({ choose = false }) => {
  return (
    <>
      {choose ? (
        <div>
          <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className={
                "flex  justify-center flex-col text-center space-y-2 items-center"
              }
            >
              <h1 className="text-small font-bold">About us</h1>
              <p className="text-very-small max-w-[150px]">
                Write a background about your work, including your history, your
                accomplishments, and any awards you've received. Use this
                section to showcase the features of your brand.
              </p>
              <button className="bg-red-500 p-[1px] text-small rounded-sm text-white">
                more
              </button>
            </div>
          </Container>
        </div>
      ) : (
        <div className="py-14">
          <Container>
            <div
              className={
                "flex  h-[55vh] justify-center flex-col text-center space-y-8 items-center"
              }
            >
              <h1 className="text-4xl font-bold">About us</h1>
              <p className="max-w-2xl">
                Write a background about your work, including your history, your
                accomplishments, and any awards you've received. Use this
                section to showcase the features of your brand.
              </p>
              <button className="bg-red-500 p-2 px-5 rounded-md text-white">
                more
              </button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design4;
