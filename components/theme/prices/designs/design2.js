import Container from "../../../ui/container";
import { EditPopover } from "../../../ui/popover/EditPopover";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";

const Design2 = ({
  pricesData,
  handleMultiEdit,
  handleEdit,
  comp,
  comps,
  themeData,
}) => {
  return (
    <>
      <div>
        <Container className="py-16">
          <div className="text-center space-y-4 mb-16">
            <EditorComp
              initialValue={pricesData?.title}
              handleEdit={handleEdit}
              keys="title"
            />
            <EditorComp
              initialValue={pricesData?.subTitle}
              handleEdit={handleEdit}
              keys="subTitle"
            />
          </div>
          <div className="grid lg:grid-cols-2  md:grid-cols-2  grid-cols-1 gap-10">
            {pricesData?.items?.map((price, index) => (
              <div key={price.id}>
                <EditPopover
                  comps={comps}
                  themeData={themeData}
                  comp={comp}
                  index={index}
                >
                  <div className={`w-full p-6 space-y-6 text-center`}>
                    <EditorComp
                      id={price.id}
                      initialValue={price.title}
                      handleMultiEdit={handleMultiEdit}
                      keys="title"
                    />

                    <EditorComp
                      id={price.id}
                      initialValue={price.price}
                      handleMultiEdit={handleMultiEdit}
                      keys="price"
                    />

                    <EditorComp
                      id={price.id}
                      initialValue={price.subTitle}
                      handleMultiEdit={handleMultiEdit}
                      keys="subTitle"
                    />

                    <Button className="!px-6">
                      <EditorComp
                        id={price.id}
                        initialValue={price.btn}
                        handleMultiEdit={handleMultiEdit}
                        keys="btn"
                      />
                    </Button>
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
