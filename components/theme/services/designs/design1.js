import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";

import { EditPopover } from "../../../ui/popover/EditPopover";
const Design1 = ({
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
    }
  );
  return (
    <>
      <div>
        <Container className="py-16  ">
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
                  <div key={service.id} className="text-center space-y-5">
                    <EditPopover
                      themeData={themeData}
                      comp={comp}
                      compIndex={compIndex}
                      editImage
                      index={index}
                    >
                      <div
                        style={{ backgroundImage: `url(${service.pic})` }}
                        className="bg-no-repeat bg-center bg-cover overflow-hidden m-auto h-40 w-40 rounded-full"
                      ></div>
                    </EditPopover>
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
                    <Button variant="link">
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

export default Design1;
