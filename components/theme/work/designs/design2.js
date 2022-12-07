import Container from "../../../ui/container";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
const Design2 = ({ workData, handleEdit }) => {
  return (
    <Container>
      <div className="py-28 gap-4 justify-center items-center flex flex-col">
        <EditorComp
          keys="title"
          handleEdit={handleEdit}
          initialValue={workData.title}
        />
        <EditorComp
          keys="subTitle"
          handleEdit={handleEdit}
          initialValue={workData.subTitle}
        />
        <div className="flex items-center gap-8">
          <Button variant="outline" className="!bg-white hover:bg-none hover:!text-primary shadow-custom">
            <EditorComp
              initialValue={workData.primaryBtn}
              handleEdit={handleEdit}
              keys="primaryBtn"
            />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Design2;
