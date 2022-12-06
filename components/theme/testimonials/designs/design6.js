import Container from "../../../ui/container";
import { EditPopover } from "../../../ui/popover/EditPopover";
import EditorComp from "../../../editor";
import UserPic from "./common/userPic";
import { TbQuote } from "react-icons/tb";

const Design6 = ({
  testiData,
  handleMultiEdit,
  handleEdit,
  headers,
  comp,
  compIndex,
  themeData,
  comps,
}) => {
  return (
    <>
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
          <div className="grid lg:grid-cols-2 md:grid-cols-2  grid-cols-1 gap-16">
            {testiData?.map((client, index) => (
              <div key={client.id}>
                <EditPopover
                  comps={comps}
                  themeData={themeData}
                  comp={comp}
                  index={index}
                >
                  <div className="flex relative">
                    <div className="w-full h-full z-10 relative space-y-4 justify-between flex flex-col gap-4   p-6  rounded-md  bg-white shadow">
                      <TbQuote size={40} color="#2c925a" className="" />
                      <EditorComp
                        id={client.id}
                        initialValue={client.review}
                        handleMultiEdit={handleMultiEdit}
                        keys="review"
                      />
                      <div className="space-y-2">
                        <UserPic
                          themeData={themeData}
                          testi={client}
                          comp={comp}
                          compIndex={compIndex}
                          design="design4"
                          index={index}
                        />
                        <div className="flex  items-center gap-4">
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
                    </div>
                <div className="w-full rounded-md z-0 h-full absolute bg-gradient-to-r from-primary to-secondary -bottom-3 -right-3"></div>
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

export default Design6;
