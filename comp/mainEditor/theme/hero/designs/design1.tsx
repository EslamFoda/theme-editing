import React from "react";
import Container from "../../../../ui/Container";
const Design1 = () => {
  return (
    <div className="bg-red-600">
    <Container>
      <div className="flex   mx-auto  lg:justify-between md:justify-center  justify-center items-center py-16 gap-3 flex-wrap ">
        <div className="flex  flex-col lg:w-[450px] md:w-[400px] w-[450px]">
          <p className="text-3xl">
            clothes is a leading business in the clothes industry
          </p>
          <span className="mt-5">
            Learn about our services and join our community today
          </span>
          <div className="flex items-center w-full justify-between gap-4 mt-4">
            <button className="bg-red-500 flex-1 text-white p-3">
              shop now
            </button>
            <button className="flex-1 border border-solid border-red-500 p-3">
              learn more
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
            backgroundSize: "cover",
            MozBackgroundSize: "center center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-96 lg:w-[450px] md:w-[400px] w-[450px]   bg-blue-100"
        ></div>
      </div>
    </Container>
    </div>
  );
};

export default Design1;
