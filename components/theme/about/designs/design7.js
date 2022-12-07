import ChangeBgImg from "../../../changeBgImg";
import EditorComp from "../../../editor";
import Container from "../../../ui/container";

const Design7 = ({
  handleEdit,
  aboutData,
  compIndex,
  themeData,
  editSections,
}) => {
  return (
    <Container>
      <div className="min-h-[600px] py-16 grid lg:grid-cols-8 md:grid-cols-8 grid-cols-1 w-full gap-x-5 gap-y-5">
        <div
          style={{ zIndex: 1 }}
          className="mb-16 hidden lg:block md:block space-y-4 p-10 mt-48 col-end-9 col-start-4 row-start-1 row-end-2  drop-shadow-lg bg-white"
        >
          <EditorComp
            initialValue={aboutData.title}
            handleEdit={handleEdit}
            keys="title"
          />
          <EditorComp
            initialValue={aboutData.subTitle}
            handleEdit={handleEdit}
            keys="subTitle"
          />
        </div>
        <div className="space-y-4 block lg:hidden md:hidden   drop-shadow-lg">
          <EditorComp
            initialValue={aboutData.title}
            handleEdit={handleEdit}
            keys="title"
          />
          <EditorComp
            initialValue={aboutData.subTitle}
            handleEdit={handleEdit}
            keys="subTitle"
          />
        </div>

        <div className="lg:self-stretch lg:col-end-6 lg:col-start-1 lg:row-end-2 lg:row-start-1  md:self-stretch md:col-end-6 md:col-start-1 md:row-end-2 md:row-start-1">
          <div
            className="h-[400px] relative img-editor-container"
            style={{
              backgroundImage: `url(${aboutData.pic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              MozBackgroundSize: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <ChangeBgImg
              editSections={editSections}
              compIndex={compIndex}
              themeData={themeData}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Design7;
