import React from "react";
import EditorComp from "../../../editor";
import Container from "../../../ui/Container/container";
import Button from "../../../ui/Button";
const Design3 = ({
  choose = false,
  editHeroTitle,
  editHeroSubtitle,
  heroData,
  editPrimaryBtn,
  editSecondaryBtn,
}) => {
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
            <EditorComp
              handleEdit={editHeroTitle}
              initialValue={heroData.title}
            />
            <EditorComp
              handleEdit={editHeroSubtitle}
              initialValue={heroData.subTitle}
            />
            <div className="flex items-center gap-6">
             
              <Button >
                <EditorComp
                  handleEdit={editPrimaryBtn}
                  initialValue={heroData.primaryBtn}
                />
              </Button>
              <Button variant="outline" >
                <EditorComp
                  handleEdit={editSecondaryBtn}
                  initialValue={heroData.secondaryBtn}
                />
              </Button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design3;
