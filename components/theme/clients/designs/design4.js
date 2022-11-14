import Container from "../../../ui/container/container";
import Title from "../common/title";
import { clientsData } from "../../../../constant/";
import cn from "clsx";
import Image from "next/image";
import SubTitle from "../common/subTitle";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
const Design4 = ({
  device,
  choose,
  handleEdit,
  clientData,
  backgroundColor,
  comp,
}) => {
  const gridClassName = cn(
    "grid lg:grid-cols-3 md:grid-cols-3  grid-cols-1 gap-4",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      {choose ? (
        <Container className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="grid lg:grid-cols-3 md:grid-cols-3  grid-cols-1 gap-1">
            <div className="self-center">
              <div className="  space-y-4 ">
                <Title choose={choose} title={"Our Clients"} />
                <SubTitle
                  choose={choose}
                  subTitle={
                    "Some of the world’s biggest brands trust us with their services"
                  }
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className={"flex  flex-wrap items-center"}>
                {clientsData.map((client) => (
                  <div key={client.id} className="p-1 items-center  ">
                    <div className="relative h-4 w-6">
                      <Image
                        src={client.img}
                        layout="fill"
                        objectFit="contain"
                        className="absolute"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <div
          style={{
            backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
            transition: "all .5s ease-in-out",
          }}
        >
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
                  {clientData.items.map((client,index) => (
                    <div key={client.id}>
                      <EditPopover comp={comp} index={index}>
                        <div className="p-2 items-center col-span-3 ">
                          <div className="relative h-20 w-40">
                            <Image
                              src={client.img}
                              layout="fill"
                              objectFit="contain"
                              className="absolute"
                            />
                          </div>
                        </div>
                      </EditPopover>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design4;
