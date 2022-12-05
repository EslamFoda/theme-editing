import Container from "../../../ui/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
import TeamPic from "../common/teamPic";
const Design3 = ({
  device,
  handleMultiEdit,
  teamData,
  comp,
  compIndex,themeData,comps
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
            <div className={gridClassName}>
              {teamData?.map((team, index) => (
                <div key={team.id}>
                  <EditPopover comps={comps} themeData={themeData} comp={comp} index={index}>
                    <div className=" space-y-5">
                      <TeamPic
                        themeData={themeData}
                        comp={comp}
                        comps={comps}
                        compIndex={compIndex}
                        design="design3"
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
                      <EditorComp
                        initialValue={team.about}
                        id={team.id}
                        handleMultiEdit={handleMultiEdit}
                        keys="about"
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

export default Design3;
