import React from "react";
import Container from "../../../../ui/Container";
import { FaUsers } from "react-icons/fa";
const Design2 = () => {
  return (
    <div
      className="h-[80vh] py-16 "
      style={{
        backgroundImage:
          "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
        backgroundSize: "cover",
        MozBackgroundSize: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="max-w-sm bg-white space-y-10 p-8">
          <h1 className="text-4xl">
            clothes is a leading business in the clothes industry
          </h1>
          <span className="block">
            Learn about our services and join our community today
          </span>
          <button className="w-full p-3 bg-blue-500">shop now</button>
        </div>
      </Container>
    </div>
  );
};

export default Design2;
