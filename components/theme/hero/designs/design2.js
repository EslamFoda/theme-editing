import React from "react";
import EditorComp from "../../../editor";
import Container from "../../../ui/container";
import Button from "../../../ui/Button";
import ChangeBgImg from "../../../changeBgImg";
const Design2 = ({ choose = false, heroData, handleEdit, compIndex }) => {
  return (
    <>
      {choose ? (
        <>
          <div
            className="h-20 py-16 "
            style={{
              backgroundImage:
                "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
              backgroundSize: "cover",
              MozBackgroundSize: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className=" w-small bg-white space-y-2 p-2">
                <h1 className="text-small">
                  clothes is a leading business in the clothes industry
                </h1>
                <span className="block text-very-small">
                  Learn about our services and join our community today
                </span>
                <button className="w-full p-1 bg-blue-500 text-small">
                  shop now
                </button>
              </div>
            </Container>
          </div>
        </>
      ) : (
        <div
          className="h-[80vh] img-editor-container py-16 "
          style={{
            backgroundImage: `url(${heroData.pic})`,
            backgroundSize: "cover",
            MozBackgroundSize: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <ChangeBgImg compIndex={compIndex} />
          <Container>
            <div className="max-w-sm bg-white space-y-10 p-8">
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
              <Button full>
                <EditorComp
                  handleEdit={handleEdit}
                  initialValue={heroData.primaryBtn}
                  keys="primaryBtn"
                />
              </Button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design2;
