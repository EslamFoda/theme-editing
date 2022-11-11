import Container from "../../../ui/Container/container";
import Title from "../../services/common/title";
import SubTitle from "../../services/common/subTitle";

import { galleryDatas } from "../../../../constant/";
import cn from "clsx";
import Image from "next/image";
import EditorComp from "../../../editor";
const Design1 = ({
  device,
  choose,
  handleEdit,
  galleryData,
  backgroundColor
}) => {
  const gridClassName = cn(
    "grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
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
          </div>
          <div
            className={
              "grid gap-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1"
            }
          >
            {galleryDatas.map((gallery) => (
              <div
                key={gallery.id}
                className="relative hover:shadow-custom transition-all h-10 w-full"
              >
                <Image
                  src={gallery.img}
                  className="absolute"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <div  style={{
          backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
          transition: "all .5s ease-in-out",
        }}>

        <Container className="py-16 ">
          <div className="text-center space-y-4 mb-16">
            <EditorComp
              initialValue={galleryData.title}
              handleEdit={handleEdit}
              keys="title"
            />
            <EditorComp
              initialValue={galleryData.subTitle}
              handleEdit={handleEdit}
              keys="subTitle"
            />
          </div>
          <div className={gridClassName}>
            {galleryDatas.map((gallery) => (
              <div
                key={gallery.id}
                className="relative hover:shadow-custom transition-all h-80 w-full"
              >
                <Image
                  src={gallery.img}
                  className="absolute"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            ))}
          </div>
        </Container>
        </div>
      )}
    </>
  );
};

export default Design1;
