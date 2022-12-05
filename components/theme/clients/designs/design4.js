import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
import ClientPic from "../common/clientPic";
const Design4 = ({
  device,
  handleEdit,
  clientData,
  comp,
  compIndex,
  themeData,
  comps,
}) => {
  const gridClassName = cn(
    "grid lg:grid-cols-3 md:grid-cols-3  grid-cols-1 gap-4",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      <div>
        <Container className="py-16 ">
          <div className={gridClassName}>
            <div className="self-center">
              <div className="  space-y-4 ">
                <EditorComp
                  initialValue={clientData.title}
                  handleEdit={handleEdit}
                  keys="title"
                />
                <EditorComp
                  initialValue={clientData.subTitle}
                  handleEdit={handleEdit}
                  keys="subtitle"
                />
              </div>
            </div>
            <div className="col-span-2">
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
                          design="design4"
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

export default Design4;
