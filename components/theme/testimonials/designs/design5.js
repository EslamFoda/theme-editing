import Container from "../../../ui/container";
import { EditPopover } from "../../../ui/popover/EditPopover";
import { TbQuote } from "react-icons/tb";
import EditorComp from "../../../editor";

const Design5 = ({
  testiData,
  handleMultiEdit,
  handleEdit,
  headers,
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
          <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-14">
            {testiData?.map((client, index) => (
              <div
                className="odd:bg-primary   testi5  flex  rounded-md flex-col self-start   even:bg-white odd:text-white"
                key={client.id}
              >
                <EditPopover
                  comps={comps}
                  themeData={themeData}
                  comp={comp}
                  index={index}
                >
                  <div className="w-full space-y-4  p-8  shadow-big ">
                    <TbQuote size={40} className="quote-icon" />
                    <EditorComp
                      id={client.id}
                      initialValue={client.review}
                      handleMultiEdit={handleMultiEdit}
                      keys="review"
                    />
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
                </EditPopover>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Design5;
