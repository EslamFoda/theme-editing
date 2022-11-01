import React from "react";
import Container from "../../../ui/Container/container";
const Design3 = ({ choose = false }) => {
  return (
    <>
      {choose ? (
        <div className="bg-red-600 ">
          <Container className="flex h-20 space-y-2 flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-small">
              clothes is a leading business in the clothes industry
            </h1>
            <span className="text-very-small">
              Learn about our services and join our community today
            </span>
            <div className="flex items-center gap-6">
              <button className="bg-white p-1 text-small">Shop Now</button>
              <button className="p-1 text-small border border-solid border-white">
                Learn More
              </button>
            </div>
          </Container>
        </div>
      ) : (
        <div className="bg-red-600 ">
          <Container className="flex h-[80vh] space-y-10 flex-col justify-center text-center items-center">
            <h1 className="text-4xl">
              clothes is a leading business in the clothes industry
            </h1>
            <span>Learn about our services and join our community today</span>
            <div className="flex items-center gap-6">
              <button className="bg-white p-2">Shop Now</button>
              <button className="p-2 border border-solid border-white">
                Learn More
              </button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design3;
