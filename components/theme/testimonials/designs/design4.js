import Container from "../../../ui/container";
import { EditPopover } from "../../../ui/popover/EditPopover";
import EditorComp from "../../../editor";
import UserPic from "./common/userPic";

const Design4 = ({
  testiData,
  handleMultiEdit,
  handleEdit,
  headers,
  comp,
  compIndex,
  themeData,comps
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
              {testiData?.map((client, index) => (
                <div key={client.id}>
                  <EditPopover comps={comps} themeData={themeData} comp={comp} index={index}>
                    <div className="flex">
                      <div className="w-full h-full justify-between flex flex-col gap-4   p-6  rounded-md   border-gray-border border">
                        <EditorComp
                          id={client.id}
                          initialValue={client.review}
                          handleMultiEdit={handleMultiEdit}
                          keys="review"
                        />
                        <div className="flex items-center gap-4">
                          <UserPic
                            themeData={themeData}
                            testi={client}
                            comp={comp}
                            compIndex={compIndex}
                            design="design4"
                            index={index}
                          />
                          <div className="space-y-4 flex-1">
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

export default Design4;
