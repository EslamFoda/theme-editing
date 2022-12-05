import React from "react";
import Container from "../../../ui/container";

import cn from "clsx";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
const Design3 = ({
  device,
  featuredData,
  handleMultiEdit,
  comp,
  icons,
  comps,
  themeData,
}) => {
  const gridClassName = cn(
    "py-16 grid lg:grid-cols-3  sm:grid-cols-2   grid-cols-1 md-grid-cols-2 gap-4",
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
                    <div className="p-4 flex  flex-col space-y-5 items-start  ">
                      <div className="flex flex-col gap-5">
                        <div className="w-8 h-8 bg-primaryBg rounded-full flex justify-center items-center">
                          <div className="feat2-icon">
                            <IconComp />
                          </div>
                        </div>
                        <div className="text-xl">
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

export default Design3;
