import React from "react";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import Container from "../../../ui/container";
const Design4 = ({ handleEdit, aboutData }) => {
  return (
    <>
      <div className="py-14">
        <Container>
          <div
            className={
              "flex  h-[55vh] justify-center  flex-col text-center items-center"
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
              <Button className="self-start">
                <EditorComp
                  initialValue={aboutData.btn}
                  handleEdit={handleEdit}
                  keys="btn"
                />
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design4;
