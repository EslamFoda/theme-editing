import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
import ClientPic from "../common/clientPic";
const Design2 = ({
  device,
  handleEdit,
  clientData,
  comp,
  compIndex,
  themeData,
  comps,
}) => {
  const gridClassName = cn(
    "grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      <div>
        <Container className="py-16 ">
          <div className="text-center space-y-4 mb-16">
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
          <div className={gridClassName}>
            {clientData.items.map((client, index) => (
              <div key={client.id}>
                <EditPopover
                  themeData={themeData}
                  comps={comps}
                  comp={comp}
                  index={index}
                >
                  <div
                    key={client.id}
                    className="border p-2 items-center border-gray-border flex justify-center"
                  >
                    <ClientPic
                      themeData={themeData}
                      design="design1"
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
        </Container>
      </div>
    </>
  );
};

export default Design2;
