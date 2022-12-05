import React from "react";
import Container from "../../../ui/container";
import EditorComp from "../../../editor";

const Design4 = ({ footerData, handleEdit, compIndex, comp }) => {
  return (
    <>
      <div>
        <Container className="py-10 text-center">
          <div className="py-8">
            <EditorComp
              handleEdit={handleEdit}
              initialValue={footerData.copyRight}
              keys="copyRight"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design4;
