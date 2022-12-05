import React from "react";
import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
const Design2 = ({ device, handleEdit, aboutData }) => {
  const gridClassName = cn(
    "grid lg:grid-cols-2 gap-4 grid-cols-1 sm:grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      <div className="py-40">
        <Container>
          <div className={gridClassName}>
            <div>
              <EditorComp
                initialValue={aboutData.title}
                handleEdit={handleEdit}
                keys="title"
              />
            </div>
            <div>
              <EditorComp
                initialValue={aboutData.subTitle}
                handleEdit={handleEdit}
                keys="subTitle"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design2;
