import Container from "../../../ui/Container/container";
import Title from "../common/title";
import { clientsData } from "../../../../constant/";
import cn from "clsx";
import Image from "next/image";
import SubTitle from "../common/subTitle";
const Design5 = ({ device, choose }) => {
    const gridClassName = cn(
        "grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1",
        {
          "!grid-cols-1": device === "mobile",
        }
      );
  return (
    <>
      {choose ? (
        <div className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-1">
          <div className="p-2  bg-purple-700  h-full">
              <div className="h-28 flex justify-center  flex-col space-y-4 ">
                <Title choose={choose} title={"Our Clients"} />
                <SubTitle
                choose={choose}
                  subTitle={
                    "Some of the world’s biggest brands trust us with their services"
                  }
                />
              </div>
            </div>
          <div className="self-center">
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
      ) : (
        <Container clean >
          <div className={gridClassName}>
            <div className="p-5   bg-purple-700  h-full">
              <div className="h-full flex justify-center  flex-col space-y-4 ">
                <Title title={"Our Clients"} />
                <SubTitle
                  subTitle={
                    "Some of the world’s biggest brands trust us with their services"
                  }
                />
              </div>
            </div>
            <div className="p-5">
              <div className={"flex  flex-wrap items-center"}>
                {clientsData.map((client) => (
                  <div key={client.id} className="p-2 items-center  ">
                    <div className="relative h-16 w-24">
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

export default Design5;