import Container from "../../../ui/container";
import { EditPopover } from "../../../ui/popover/EditPopover";
import cn from "clsx";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import ImageComp from "../common/imageComp";
const Design4 = ({
  device,
  choose,
  serviceData,
  handleEdit,
  handleMultiEdit,
  serviceHeaders,
  comp,
  compIndex,
  themeData,
  comps,
}) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
      "!gap-2": choose,
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
                  <div className="bg-white shadow-xl">
                    <ImageComp
                      themeData={themeData}
                      comp={comp}
                      compIndex={compIndex}
                      design="design4"
                      image={service.pic}
                      index={index}
                    />
                    <div className="p-8 pt-0 space-y-4">
                      <EditorComp
                        initialValue={service.title}
                        id={service.id}
                        handleMultiEdit={handleMultiEdit}
                        keys="title"
                      />
                      <EditorComp
                        initialValue={service.desc}
                        id={service.id}
                        handleMultiEdit={handleMultiEdit}
                        keys="desc"
                      />
                      <Button variant="link">
                        <EditorComp
                          id={service.id}
                          initialValue={service.btn}
                          handleMultiEdit={handleMultiEdit}
                          keys="btn"
                        />
                      </Button>
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

export default Design4;
