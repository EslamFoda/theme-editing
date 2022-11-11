import Container from "../../../ui/Container/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import { teamsData } from "../../../../constant/";
import Name from "../common/name";
import Position from "../common/position";
import cn from "clsx";
import EditorComp from "../../../editor";
const Design5 = ({
  device,
  choose,
  handleMultiEdit,
  handleEdit,
  teamData,
  headers,
  backgroundColor,
}) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      {choose ? (
        <Container className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-center space-y-1  mb-2">
            <Title choose={choose} />
            <SubTitle choose={choose} />
          </div>
          <div
            className={
              "grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full"
            }
          >
            {teamsData.map((team) => (
              <div key={team.id} className="text-center p-1 space-y-1">
                <div
                  style={{ backgroundImage: `url(${team.img})` }}
                  className="bg-no-repeat bg-center bg-cover overflow-hidden  h-10 w-full "
                ></div>
                <Name name={team.name} choose={choose} />
                <Position position={team.position} choose={choose} />
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <div
          style={{
            backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
            transition: "all .5s ease-in-out",
          }}
        >
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
              {teamData?.map((team) => (
                <div
                  key={team.id}
                  className="text-center hover:shadow-custom rounded-md transition-all p-6 space-y-5"
                >
                  <div
                    style={{ backgroundImage: `url(${team.pic})` }}
                    className="bg-no-repeat bg-center bg-cover overflow-hidden m-auto h-44 w-full "
                  ></div>
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
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design5;
