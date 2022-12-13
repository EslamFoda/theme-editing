import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
import ClientPic from "../common/clientPic";
const Design5 = ({
  handleEdit,
  clientData,
  comp,
  compIndex,
  themeData,
  comps,
}) => {
  const gridClassName = cn("grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1", {
  });
  return (
    <>
      <div>
        <Container clean>
          <div className={gridClassName}>
            <div className="p-20 px-5   bg-gradient-to-b from-primary to-secondary  text-white  h-full">
              <div className="h-full flex justify-center  flex-col space-y-4 ">
                <EditorComp
                  initialValue={clientData.title}
                  handleEdit={handleEdit}
                  keys="title"
                />
                <EditorComp
                  initialValue={clientData.subTitle}
                  handleEdit={handleEdit}
                  keys="subTitle"
                />
              </div>
            </div>
            <div className="py-20 px-5">
              <div className={"flex  flex-wrap items-center"}>
                {clientData.items.map((client, index) => (
                  <div key={client.id}>
                    <EditPopover
                      themeData={themeData}
                      comps={comps}
                      comp={comp}
                      index={index}
                    >
                      <div className="p-2 items-center ">
                        <ClientPic
                          themeData={themeData}
                          design="design5"
                          client={client}
                          comp={comp}
                          compIndex={compIndex}
                          index={index}
                        />
                      </div>
                    </EditPopover>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design5;
