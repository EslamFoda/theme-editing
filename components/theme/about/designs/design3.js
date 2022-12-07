import React from "react";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import { EditPopover } from "../../../ui/popover/EditPopover";
const Design3 = ({ handleEdit, aboutData, compIndex, comp, themeData }) => {
  return (
    <>
      <div className="grid  lg:grid-cols-2 grid-cols-1 md:grid-cols-2 sm:grid-cols-1">
        <EditPopover
          themeData={themeData}
          comp={comp}
          compIndex={compIndex}
          editImage
        >
          <div
            className="h-[400px] order-2 lg:order-1 md:order-1"
            style={{
              backgroundImage: `url(${aboutData.pic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              MozBackgroundSize: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </EditPopover>
        <div className="space-y-4  order-1 lg:order-2 md:order-2 self-center max-w-xl px-16 p-5">
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
          <Button variant="link">
            <EditorComp
              initialValue={aboutData.btn}
              handleEdit={handleEdit}
              keys="btn"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Design3;
