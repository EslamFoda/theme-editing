import Container from "../../../ui/Container/container";
import Title from "../common/title";
import { clientsData } from "../../../../constant/";
import cn from "clsx";
import Image from "next/image";
import SubTitle from "../common/subTitle";
import EditorComp from "../../../editor";
const Design4 = ({
  device,
  choose,
  editClientTitle,
  editClientSubTitle,
  headers,
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
        <Container className="py-16 ">
          <div className={gridClassName}>
            <div className="self-center">
              <div className="  space-y-4 ">
              <EditorComp
              initialValue={headers.title}
              handleEdit={editClientTitle}
            />
            <EditorComp
              initialValue={headers.subTitle}
              handleEdit={editClientSubTitle}
            />
              </div>
            </div>
            <div className="col-span-2">
              <div className={"flex  flex-wrap items-center"}>
                {clientsData.map((client) => (
                  <div key={client.id} className="p-2 items-center col-span-3 ">
                    <div className="relative h-20 w-40">
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
      )}
    </>
  );
};

export default Design4;
