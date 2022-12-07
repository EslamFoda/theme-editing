import Container from "../../../ui/container";
import { EditPopover } from "../../../ui/popover/EditPopover";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";

const Design1 = ({
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
          <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
            {pricesData?.items?.map((price, index) => (
              <div
                className=" flex  rounded-md flex-col self-start"
                key={price.id}
              >
                <EditPopover
                  comps={comps}
                  themeData={themeData}
                  comp={comp}
                  index={index}
                >
                  <div className="w-full flex flex-col gap-7 p-6  border border-solid border-black ">
                    <EditorComp
                      id={price.id}
                      initialValue={price.title}
                      handleMultiEdit={handleMultiEdit}
                      keys="title"
                    />
                    <EditorComp
                      id={price.id}
                      initialValue={price.subTitle}
                      handleMultiEdit={handleMultiEdit}
                      keys="subTitle"
                    />
                    <hr className="bg-black h-[2px] block" />
                    <div className="text-4xl ">
                      <EditorComp
                        id={price.id}
                        initialValue={price.price}
                        handleMultiEdit={handleMultiEdit}
                        keys="price"
                      />
                    </div>

                    <Button full className="!rounded-none">
                      <EditorComp
                        id={price.id}
                        initialValue={price.btn}
                        handleMultiEdit={handleMultiEdit}
                        keys="btn"
                      />
                    </Button>

                    <hr className="bg-black h-[3px] block" />

                    <EditorComp
                      id={price.id}
                      initialValue={price.features}
                      handleMultiEdit={handleMultiEdit}
                      keys="features"
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

export default Design1;
