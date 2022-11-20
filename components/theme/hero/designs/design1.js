import React from "react";
import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import ImageComp from "../../gallery/common/imageComp";
const Design1 = ({
  device,
  choose = false,
  heroData,
  handleEdit,
  compIndex,
  comp,
}) => {
  const rootClassName = cn("", {
    "bg-black": device === "mobile",
    "bg-blue-500": device === "tablet",
    "bg-white": device === "desktop",
  });
  console.log(heroData);
  return (
    <>
      {choose ? (
        <div className="">
          <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-between gap-2 items-center">
              <div className="flex  flex-col h-20 w-small">
                <p className="text-small">
                  clothes is a leading business in the clothes industry
                </p>
                <span className="mt-1 text-very-small">
                  Learn about our services and join our community today
                </span>
                <div className="flex items-center w-full justify-between gap-2 mt-4">
                  <button className="bg-red-500 text-small flex-1 text-white">
                    shop now
                  </button>
                  <button className="flex-1 text-small border border-solid  border-red-500 ">
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
                className="h-20  w-small   bg-blue-100"
              ></div>
            </div>
          </Container>
        </div>
      ) : (
        <div className="bg-gradient-to-b from-primary to-secondary ">
          <Container>
            <div className="flex   mx-auto  lg:justify-between md:justify-center  justify-center items-center py-16 gap-3 flex-wrap ">
              <div className="flex text-white  flex-col lg:w-[450px] md:w-[400px] w-[450px]">
                <EditorComp
                  handleEdit={handleEdit}
                  initialValue={heroData.title}
                  keys="title"
                />
                <EditorComp
                  handleEdit={handleEdit}
                  initialValue={heroData.subTitle}
                  keys="subTitle"
                />
                <div className="flex items-center w-full justify-between gap-4 mt-4">
                  <Button className="flex-1 !bg-white font-semibold !text-md !text-primary !rounded-none">
                    <EditorComp
                      handleEdit={handleEdit}
                      initialValue={heroData.primaryBtn}
                      keys="primaryBtn"
                    />
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 !border-white !rounded-none !text-white hover:!bg-transparent !bg-transparent"
                  >
                    <EditorComp
                      handleEdit={handleEdit}
                      initialValue={heroData.secondaryBtn}
                      keys="secondaryBtn"
                    />
                  </Button>
                </div>
              </div>
              <div className="h-96 lg:w-[450px] md:w-[400px] w-[450px]">
                <ImageComp
                  comp={comp}
                  compIndex={compIndex}
                  image={heroData.pic}
                />
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design1;
