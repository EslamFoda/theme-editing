import React from "react";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import Container from "../../../ui/container";
import ImageComp from "../../gallery/common/imageComp";
const Design5 = ({
  handleEdit,
  aboutData,
  compIndex,
  comp,
  themeData,
  comps,
}) => {
  return (
    <>
      <div className="py-16">
        <Container>
          <div
            className={
              "flex justify-center flex-col text-center space-y-8 items-center"
            }
          >
            <div className="max-w-2xl  space-y-8">
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
              <Button variant="outline">
                <EditorComp
                  initialValue={aboutData.btn}
                  handleEdit={handleEdit}
                  keys="btn"
                />
              </Button>
              <div className="h-96 lg:w-full">
                <ImageComp
                  themeData={themeData}
                  comps={comps}
                  comp={comp}
                  compIndex={compIndex}
                  image={aboutData.pic}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design5;
