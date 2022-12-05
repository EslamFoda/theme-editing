import React from "react";
import Container from "../../../ui/container";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import ImageComp from "../../gallery/common/imageComp";
const Design1 = ({
  handleEdit,
  aboutData,
  compIndex,
  comp,
  comps,
  themeData,
}) => {
  return (
    <div>
   
        <div>
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
              <div className="h-96 lg:w-[450px] shadow-big md:w-[400px] w-[450px]   bg-blue-100">
                {" "}
                <ImageComp
                  themeData={themeData}
                  comps={comps}
                  comp={comp}
                  compIndex={compIndex}
                  image={aboutData.pic}
                />
              </div>
            </div>
          </Container>
        </div>
    </div>
  );
};

export default Design1;
