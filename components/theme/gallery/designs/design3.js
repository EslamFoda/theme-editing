import Container from "../../../ui/Container/container";
import Title from "../../services/common/title";
import SubTitle from "../../services/common/subTitle";

import { galleryData } from "../../../../constant/";
import cn from "clsx";
import Image from "next/image";
import EditorComp from "../../../editor";
const Design3 = ({
  device,
  choose,
  editGallerySubTitle,
  editGalleryTitle,
  headers,
}) => {
  const gridClassName = cn(
    "grid gap-6 lg:grid-cols-2 md:grid-cols-2  grid-cols-2",
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
            className={"grid gap-1 lg:grid-cols-2 md:grid-cols-2  grid-cols-2"}
          >
            {galleryData.map((gallery) => (
              <div
                key={gallery.id}
                className="relative hover:shadow-custom transition-all h-12 w-full"
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
        <Container className="py-16 ">
          <div className="text-center space-y-4 mb-16">
            <EditorComp
              initialValue={headers.title}
              handleEdit={editGalleryTitle}
            />
            <EditorComp
              initialValue={headers.subTitle}
              handleEdit={editGallerySubTitle}
            />
          </div>
          <div className={gridClassName}>
            {galleryData.map((gallery) => (
              <div
                key={gallery.id}
                className="relative hover:shadow-custom transition-all lg:h-72 md:h-52 h-32 w-full"
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
      )}
    </>
  );
};

export default Design3;
