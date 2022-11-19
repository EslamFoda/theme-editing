import Container from "../../../ui/container";
import { EditPopover } from "../../../ui/popover/EditPopover";
import cn from "clsx";
import EditorComp from "../../../editor";
import UserPic from "./common/userPic";
const Design2 = ({
  device,
  choose,
  testiData,
  handleMultiEdit,
  handleEdit,
  headers,
  comp,
  compIndex,
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
                <div>
                  <div className="w-full bg-white flex flex-col gap-4 self-start  p-8 pb-12 rounded-md  shadow-big relative">
                    <UserPic
                      client={client}
                      comp={comp}
                      compIndex={compIndex}
                      design="design2"
                      index={index}
                    />
                    <EditorComp
                      id={client.id}
                      initialValue={client.review}
                      handleMultiEdit={handleMultiEdit}
                      keys="review"
                    />
                  </div>
                  <div className="p-8 pt-12">
                    <EditorComp
                      id={client.id}
                      initialValue={client.userName}
                      handleMultiEdit={handleMultiEdit}
                      keys="userName"
                    />

                    <EditorComp
                      id={client.id}
                      initialValue={client.position}
                      handleMultiEdit={handleMultiEdit}
                      keys="position"
                    />
                  </div>
                </div>
              </EditPopover>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Design2;
