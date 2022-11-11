import React from "react";
import Container from "../../../ui/Container/container";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
const Design1 = ({
  choose = false,
  handleEdit,
  aboutData,
  backgroundColor,
}) => {
  return (
    <div>
      {choose ? (
        <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-between gap-2 items-center ">
            <div className="flex text-[6px]  flex-col w-[100px]">
              <h2 className=" font-semibold">
                A section for you to write about just anything{" "}
              </h2>
              <span className="mt-2 text-[4px]">
                Need a place to add in your awards? This is it. Want to include
                more information about your products, history, or features? This
                is the spot for that. Use this content section for anything and
                everything.{" "}
              </span>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
                backgroundSize: "cover",
                MozBackgroundSize: "center center",
                backgroundRepeat: "no-repeat",
              }}
              className="h-20 w-[100px]   bg-blue-100"
            ></div>
          </div>
        </Container>
      ) : (
        <div
          style={{
            backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
            transition: "all .5s ease-in-out",
          }}
        >
          <Container>
            <div className="flex gap-6  mx-auto  lg:justify-between md:justify-center  justify-center items-center py-16 flex-wrap ">
              <div className="flex  flex-col space-y-8 lg:w-[450px] md:w-[400px] w-[450px]">
                <EditorComp
                  initialValue={aboutData.title}
                  handleEdit={handleEdit}
                  keys="title"
                />
                <EditorComp
                  initialValue={aboutData.subTitle}
                  handleEdit={handleEdit}
                  keys="subTitle"
                />
                <Button variant="link" className="self-start">
                  <EditorComp
                    initialValue={aboutData.btn}
                    handleEdit={handleEdit}
                    keys="btn"
                  />
                </Button>
              </div>
              <div
                style={{
                  backgroundImage:
                    "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
                  backgroundSize: "cover",
                  MozBackgroundSize: "center center",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-96 lg:w-[450px] shadow-big md:w-[400px] w-[450px]   bg-blue-100"
              ></div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Design1;
