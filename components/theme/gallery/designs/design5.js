import Container from "../../../ui/container/container";
import Title from "../../services/common/title";
import SubTitle from "../../services/common/subTitle";

import { galleryDatas } from "../../../../constant/";
import cn from "clsx";
import Image from "next/image";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import { EditPopover } from "../../../ui/popover/EditPopover";
const Design5 = ({ device, choose, handleEdit, galleryData, comp }) => {
  const gridClassName = cn(
    "grid   lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      {choose ? (
        <Container clean className="py-0 pt-2">
          <div className="text-center space-y-1  mb-2">
            <Title choose={choose} />
            <SubTitle choose={choose} />
            <button className="text-very-small bg-primary text-white p-[2px]">
              Start Now
            </button>
          </div>
          <div
            className={
              "grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2"
            }
          >
            {galleryDatas.map((gallery) => (
              <div key={gallery.id} className="relative  h-12 w-full">
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
        <div>
          <Container clean className="py-16 ">
            <div className="text-center max-w-5xl space-y-4 mx-auto mb-16">
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
              <Button>
                <EditorComp
                  initialValue={galleryData.btn}
                  handleEdit={handleEdit}
                  keys="btn"
                />
              </Button>
            </div>
            <div className={gridClassName}>
              {galleryData.items.map((gallery, index) => (
                <div key={gallery.id}>
                  <EditPopover comp={comp} index={index}>
                    <div
                      key={gallery.id}
                      className="relative lg:h-60 md:h-52 h-52 w-full"
                    >
                      <Image
                        src={gallery.img}
                        className="absolute"
                        objectFit="cover"
                        layout="fill"
                        alt="gallery img"
                      />
                    </div>
                  </EditPopover>
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design5;
