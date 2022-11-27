import Container from "../../../ui/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import { teamsData } from "../../../../constant/";
import Name from "../common/name";
import Position from "../common/position";
import cn from "clsx";
import EditorComp from "../../../editor";
import { EditPopover } from "../../../ui/popover/EditPopover";
import TeamPic from "../common/teamPic";
const Design4 = ({
  device,
  choose,
  handleMultiEdit,
  handleEdit,
  teamData,
  headers,
  comp,
  compIndex,themeData,comps
}) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      {choose ? (
        <Container className="py-0 pt-2">
          <div className="text-center space-y-1  mb-2">
            <Title choose={choose} />
            <SubTitle choose={choose} />
          </div>
          <div
            className={
              "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-y-2 w-full"
            }
          >
            {teamsData.map((team) => (
              <div key={team.id} className="text-center space-y-1">
                <div
                  style={{ backgroundImage: `url(${team.img})` }}
                  className="bg-no-repeat bg-center bg-cover overflow-hidden m-auto h-5 w-5 rounded-full"
                ></div>
                <Name name={team.name} choose={choose} />
                <Position position={team.position} choose={choose} />
              </div>
            ))}
          </div>
        </Container>
      ) : (
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
                  <EditPopover comps={comps} themeData={themeData} comp={comp} index={index}>
                    <div className="text-center hover:shadow-custom rounded-md transition-all py-4 space-y-5">
                    <TeamPic
                        themeData={themeData}
                        comp={comp}
                        comps={comps}
                        compIndex={compIndex}
                        design="design4"
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
      )}
    </>
  );
};

export default Design4;
