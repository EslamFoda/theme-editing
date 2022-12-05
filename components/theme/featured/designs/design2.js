import React from "react";
import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import { EditPopover } from "../../../ui/popover/EditPopover";
const Design2 = ({
  device,
  featuredData,
  handleMultiEdit,
  comp,
  icons,
  comps,
  themeData,
}) => {
  const gridClassName = cn(
    "py-16 grid lg:grid-cols-3  sm:grid-cols-2   grid-cols-1 md:grid-cols-2 gap-4",
    {
      "!grid-cols-1": device === "mobile",
      "!grid-cols-2": device === "tablet",
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
                    <div className="p-4 flex border border-solid border-gray-border rounded-lg flex-col space-y-5 items-start  ">
                      <div className="flex gap-2">
                        <div className="w-8 h-8 min-w-max bg-primaryBg rounded-full flex justify-center items-center">
                          <div className="feat2-icon">
                            <IconComp />
                          </div>
                        </div>
                        <div className="flex-1 text-xl">
                          <EditorComp
                            initialValue={card.title}
                            id={card.id}
                            handleMultiEdit={handleMultiEdit}
                            keys="title"
                          />
                        </div>
                      </div>
                      <EditorComp
                        initialValue={card.desc}
                        id={card.id}
                        handleMultiEdit={handleMultiEdit}
                        keys="desc"
                      />
                      <Button variant="link">
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

export default Design2;
