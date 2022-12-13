import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
import { EditPopover } from "../../../ui/popover/EditPopover";
import ImageComp from "../common/imageComp";
const Design2 = ({
  handleEdit,
  galleryData,
  comp,
  compIndex,
  themeData,
  comps,
}) => {
  const gridClassName = cn(
    "grid lg:gap-8 md:gap-6 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2",
    {
    }
  );
  return (
    <>
     
        <div>
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
                  <EditPopover
                    comps={comps}
                    themeData={themeData}
                    comp={comp}
                    index={index}
                  >
                    <div
                      key={gallery.id}
                      className="relative hover:shadow-custom transition-all lg:h-60 md:h-52 h-32 w-full"
                    >
                      <ImageComp
                        compIndex={compIndex}
                        themeData={themeData}
                        image={gallery.pic}
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
