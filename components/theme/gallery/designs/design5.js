import Container from "../../../ui/Container/container";
import Title from "../../services/common/title";
import SubTitle from "../../services/common/subTitle";

import { galleryData } from "../../../../constant/";
import cn from "clsx";
import Image from "next/image";
const Design5 = ({ device, choose }) => {
  const gridClassName = cn(
    "grid   lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      {choose ? (
        <Container className="py-0 pt-2">
          <div className="text-center space-y-1  mb-2">
            <Title choose={choose} />
            <SubTitle choose={choose} />
            <button className="">Start Now</button>
          </div>
          <div
            className={
              "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full"
            }
          >
            {galleryData.map((gallery) => (
              <div key={gallery.id} className="text-center space-y-1">
                <div
                  style={{ backgroundImage: `url(${gallery.img})` }}
                  className="bg-no-repeat bg-center bg-cover overflow-hidden m-auto h-5 w-5 rounded-full"
                ></div>
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <Container clean className="py-16 ">
          <div className="text-center space-y-4 mb-16">
            <Title />
            <SubTitle />
            <button className="bg-primary p-2 text-white">Start Now</button>
          </div>
          <div className={gridClassName}>
            {galleryData.map((gallery) => (
              <div key={gallery.id} className="relative  lg:h-60 md:h-52 h-52 w-full">
                <Image src={gallery.img} className="absolute" objectFit="cover" layout="fill" />
              </div>
            ))}
          </div>
        </Container>
      )}
    </>
  );
};

export default Design5;
