import Container from "../../../ui/Container/container";
import Title from "../../services/common/title";
import SubTitle from "../../services/common/subTitle";

import { galleryData } from "../../../../constant/";
import cn from "clsx";
import Image from "next/image";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
const Design2 = ({
  device,
  choose,
  editGallerySubTitle,
  editGalleryTitle,
  headers,
  editGalleryBtn,
}) => {
  const gridClassName = cn(
    "grid lg:gap-8 md:gap-6 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      {choose ? (
        <Container className="py-0 pt-2">
          <div className="text-center">
            <Title choose={choose} />
            <SubTitle choose={choose} />
            <button className="text-very-small bg-primary p-[2px] text-white">
              Start Now
            </button>
          </div>
          <div
            className={
              "grid gap-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2"
            }
          >
            {galleryData.map((gallery) => (
              <div
                key={gallery.id}
                className="relative hover:shadow-custom transition-all lg:h-10 md:h-12 h-12 w-full"
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
            <Button>
              <EditorComp
                initialValue={headers.btn}
                handleEdit={editGalleryBtn}
              />
            </Button>
          </div>
          <div className={gridClassName}>
            {galleryData.map((gallery) => (
              <div
                key={gallery.id}
                className="relative hover:shadow-custom transition-all lg:h-60 md:h-52 h-32 w-full"
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

export default Design2;
