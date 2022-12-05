import React from "react";
import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import { EditPopover } from "../../../ui/popover/EditPopover";

const Design1 = ({
  device,
  featuredData,
  handleMultiEdit,
  comp,
  icons,
  comps,
  themeData,
}) => {
  const gridClassName = cn(
    "py-16 grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-10",
    {
      "!grid-cols-1": device === "mobile",
    }
  );

  return (
    <>
      <div>
        <Container>
          <div className={gridClassName}>
            {featuredData.map((card, index) => {
              const IconComp = icons[card.icon];
              return (
                <div key={card.id}>
                  <EditPopover
                    themeData={themeData}
                    comps={comps}
                    comp={comp}
                    index={index}
                  >
                    <div className="p-4 flex flex-col space-y-5 text-center items-center">
                      <div className="feat1-icon">
                        <IconComp />
                      </div>
                      <div className="text-4xl">
                        <EditorComp
                          initialValue={card.title}
                          id={card.id}
                          handleMultiEdit={handleMultiEdit}
                          keys="title"
                        />
                      </div>
                      <EditorComp
                        initialValue={card.desc}
                        id={card.id}
                        handleMultiEdit={handleMultiEdit}
                        keys="desc"
                      />
                      <Button rounded={false}>
                        <EditorComp
                          initialValue={card.btn}
                          id={card.id}
                          handleMultiEdit={handleMultiEdit}
                          keys="btn"
                        />
                      </Button>
                    </div>
                  </EditPopover>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design1;
