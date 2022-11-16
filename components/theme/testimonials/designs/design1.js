import Container from "../../../ui/container/container";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
import cn from "clsx";
const Design1 = ({
  device,
  choose,
  testiData,
  handleMultiEdit,
  handleEdit,
  headers,
  comp,
  compIndex
}) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <div>
      <Container className="py-16">
        <div className="text-center space-y-4 mb-16">
          {/* <Title title={"What Our Clients Say"} /> */}
          <EditorComp
            initialValue={headers?.title}
            handleEdit={handleEdit}
            keys="title"
          />
          <EditorComp
            initialValue={headers?.subTitle}
            handleEdit={handleEdit}
            keys="subTitle"
          />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-14">
          {testiData?.map((client, index) => (
            <div key={client.id}>
              <EditPopover comp={comp} index={index}>
                <div className="w-full bg-white flex flex-col gap-4 self-start  p-10 pt-12  shadow-big relative">
                  <EditPopover compIndex={compIndex} comp={comp} index={index} editImage>
                    <div
                      style={{ backgroundImage: `url(${client.pic})` }}
                      className="w-20 h-20 bg-no-reapeat bg-cover bg-center bg-white shadow-md absolute -top-10 rounded-full left-8 border-4 border-[#dfe0e1]"
                    ></div>
                  </EditPopover>
                  <EditorComp
                    id={client.id}
                    handleMultiEdit={handleMultiEdit}
                    initialValue={client.userName}
                    keys="userName"
                  />
                  <EditorComp
                    id={client.id}
                    handleMultiEdit={handleMultiEdit}
                    initialValue={client.position}
                    keys="position"
                  />
                  <EditorComp
                    id={client.id}
                    handleMultiEdit={handleMultiEdit}
                    initialValue={client.review}
                    keys="review"
                  />
                </div>
              </EditPopover>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Design1;
