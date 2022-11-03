import Container from "../../../ui/Container/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import { teamData } from "../../../../constant/";
import Name from "../common/name";
import About from "../common/about";
import Position from "../common/position";
import cn from "clsx";
const Design3 = ({ device, choose }) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      {choose ? (
        <Container className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className={
              "grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full"
            }
          >
            {teamData.map((team) => (
              <div key={team.id} className=" space-y-1">
                <div
                  style={{ backgroundImage: `url(${team.img})` }}
                  className="bg-no-repeat bg-center bg-cover overflow-hidden  h-5 w-5 rounded-full"
                ></div>
                <Name name={team.name} choose={choose}/>
                <Position position={team.position} choose={choose}/>
                <About about={team.about} choose={choose}/>
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <Container className="py-16 ">
          <div className={gridClassName}>
            {teamData?.map((team) => (
              <div key={team.id} className=" space-y-5">
                <div
                  style={{ backgroundImage: `url(${team.img})` }}
                  className="bg-no-repeat bg-center bg-cover overflow-hidden  h-24 w-24 rounded-full"
                ></div>
                <Name name={team.name} choose={choose}/>
                <Position position={team.position} choose={choose}/>
                <About about={team.about} choose={choose}/>
              </div>
            ))}
          </div>
        </Container>
      )}
    </>
  );
};

export default Design3;
