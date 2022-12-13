import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
import ImageComp from "../common/imageComp";
const Design3 = ({
  handleEdit,
  galleryData,
  comp,
  compIndex,
  themeData,
  comps,
}) => {
  const gridClassName = cn(
    "grid gap-6 lg:grid-cols-2 md:grid-cols-2  grid-cols-2",
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
              keys="subtitle"
            />
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
                  <div className="relative hover:shadow-custom transition-all lg:h-72 md:h-52 h-32 w-full">
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

export default Design3;
