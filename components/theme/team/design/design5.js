import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
import TeamPic from "../common/teamPic";
const Design5 = ({
  device,
  handleMultiEdit,
  handleEdit,
  teamData,
  headers,
  comp,
  compIndex,
  themeData,
  comps,
}) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
     
        <div>
          <Container className="py-16 ">
            <div className="text-center space-y-4 mb-16">
              <EditorComp
                initialValue={headers.title}
                handleEdit={handleEdit}
                keys="title"
              />
              <EditorComp
                initialValue={headers.subTitle}
                handleEdit={handleEdit}
                keys="subTitle"
              />
            </div>
            <div className={gridClassName}>
              {teamData?.map((team, index) => (
                <div key={team.id}>
                  <EditPopover
                    comps={comps}
                    themeData={themeData}
                    comp={comp}
                    index={index}
                  >
                    <div className="text-center hover:shadow-custom rounded-md transition-all p-6 space-y-5">
                      <TeamPic
                        themeData={themeData}
                        comp={comp}
                        comps={comps}
                        compIndex={compIndex}
                        design="design5"
                        index={index}
                        pic={team.pic}
                      />
                      <EditorComp
                        initialValue={team.userName}
                        id={team.id}
                        handleMultiEdit={handleMultiEdit}
                        keys="userName"
                      />
                      <EditorComp
                        initialValue={team.position}
                        id={team.id}
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
