import React from "react";
import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
const Design5 = ({
  featuredData,
  handleMultiEdit,
  handleEdit,
  featuredHeader,
  comp,
  icons,
  comps,
  themeData,
}) => {
  const gridClassName = cn(
    "py-16 grid lg:grid-cols-3  sm:grid-cols-2   grid-cols-1 md:grid-cols-2 gap-10",
    {}
  );

  return (
    <>
      <div>
        <Container className="py-10">
          <EditorComp
            initialValue={featuredHeader}
            handleEdit={handleEdit}
            keys="header"
          />
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
                    <div className="flex flex-col space-y-5 items-start  ">
                      <div className="flex gap-4">
                        <div>
                          <div className="w-12 h-12  bg-primaryBg rounded-full flex justify-center items-center">
                            <div className="feat5-icon">
                              <IconComp />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="text-xl">
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
                        </div>
                      </div>
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

export default Design5;
