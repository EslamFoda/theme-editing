import Container from "../../../ui/container";
import { EditPopover } from "../../../ui/popover/EditPopover";
import cn from "clsx";
import EditorComp from "../../../editor";
import ChangeBgImg from "../../../changeBgImg";
const Design3 = ({
  serviceData,
  handleEdit,
  handleMultiEdit,
  serviceHeaders,
  comp,
  compIndex,
  themeData,
  comps,
  editSections,
}) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1",
    {
    }
  );

  return (
    <>
      <div>
        <Container className="py-16 ">
          <div className="text-center space-y-4 mb-16">
            <EditorComp
              initialValue={serviceHeaders.title}
              handleEdit={handleEdit}
              keys="title"
            />
            <EditorComp
              initialValue={serviceHeaders.subTitle}
              handleEdit={handleEdit}
              keys="subTitle"
            />
          </div>
          <div className={gridClassName}>
            {serviceData?.map((service, index) => (
              <div key={service.id}>
                <EditPopover
                  comps={comps}
                  themeData={themeData}
                  comp={comp}
                  index={index}
                >
                  <div className=" space-y-5 img-editor-container  relative">
                    <ChangeBgImg
                      editSections={editSections}
                      themeData={themeData}
                      compIndex={compIndex}
                      index={index}
                    />
                    <div
                      style={{ backgroundImage: `url(${service.pic})` }}
                      className="bg-no-repeat bg-center bg-cover p-5  flex items-end   h-96 w-full"
                    >
                      {" "}
                      <div className="space-y-4 bg-white shadow-custom  p-6">
                        <EditorComp
                          id={service.id}
                          initialValue={service.title}
                          handleMultiEdit={handleMultiEdit}
                          keys="title"
                        />
                        <EditorComp
                          id={service.id}
                          initialValue={service.desc}
                          handleMultiEdit={handleMultiEdit}
                          keys="desc"
                        />
                      </div>
                    </div>
                  </div>
                </EditPopover>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design3;
