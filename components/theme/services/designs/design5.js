import Container from "../../../ui/container";
import Button from "../../../ui/Button";
import { EditPopover } from "../../../ui/popover/EditPopover";
import cn from "clsx";
import EditorComp from "../../../editor";
import ImageComp from "../common/imageComp";
const Design5 = ({
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
    "grid gap-10 lg:grid-cols-2 text-center md:grid-cols-2 sm:grid-cols-1 grid-cols-1"
  );
  const headersClassName = cn(
    "grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-16"
  );
  return (
    <>
      <div>
        <Container className="py-16 ">
          <div className={headersClassName}>
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
                  <div className="  space-y-5">
                    <ImageComp
                      themeData={themeData}
                      comp={comp}
                      compIndex={compIndex}
                      design="design5"
                      image={service.pic}
                      index={index}
                    />
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
                    <Button variant="primary">
                      <EditorComp
                        id={service.id}
                        initialValue={service.btn}
                        handleMultiEdit={handleMultiEdit}
                        keys="btn"
                      />
                    </Button>
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

export default Design5;
