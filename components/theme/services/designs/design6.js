import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";

import { EditPopover } from "../../../ui/popover/EditPopover";
const Design6 = ({
  device,
  serviceData,
  handleEdit,
  handleMultiEdit,
  serviceHeaders,
  comp,
  themeData,
  comps,
}) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-3 md:grid-cols-2 justify-center sm:grid-cols-2 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      <div className="bg-gradient-to-bl text-white from-primary to-secondary">
        <Container className="py-16">
          <div className="text-center  space-y-4 mb-16">
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
          <div className={'flex items-start gap-8 justify-center flex-wrap'}>
            {serviceData?.map((service, index) => (
              <div key={service.id}>
                <EditPopover
                  comps={comps}
                  themeData={themeData}
                  comp={comp}
                  index={index}
                >
                  <div
                    key={service.id}
                    className="space-y-5 lg:w-[344px] md:w-[344px] w-full min-h-[389px]   hover:border-b-8 hover:border-white border-b-8 border-transparent transition-all bg-secondary rounded-md px-8 py-16"
                  >
                    <div>
                      <span className="text-4xl">
                        {index < 9 ? `0${index + 1}` : `${index + 1}`}
                      </span>
                    </div>
                    <EditorComp
                      id={service.id}
                      initialValue={service.title}
                      handleMultiEdit={handleMultiEdit}
                      keys="title"
                    />
                    <div className="w-16 h-[1px] bg-white"></div>
                    <EditorComp
                      id={service.id}
                      initialValue={service.desc}
                      handleMultiEdit={handleMultiEdit}
                      keys="desc"
                    />
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

export default Design6;
