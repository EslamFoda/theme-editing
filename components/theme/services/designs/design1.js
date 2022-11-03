import Container from "../../../ui/Container/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import ServiceTitle from "../common/serviceTitle";
import ServiceSubTilte from "../common/serviceSubTitle";
import {servicesData} from '../../../../constant/'
import cn from "clsx";
const Design1 = ({ device, choose }) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      {choose  ? (
        <Container className="py-0 pt-2">
          <div className="text-center space-y-1  mb-2">
            <Title choose={choose}/>
            <SubTitle choose={choose}/>
          </div>
          <div className={"grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full"}>
            {servicesData.map((service) => (
              <div key={service.id} className="text-center space-y-1">
                <div
                  style={{ backgroundImage: `url(${service.imgUrl})` }}
                  className="bg-no-repeat bg-center bg-cover overflow-hidden m-auto h-5 w-5 rounded-full"
                ></div>
                <ServiceTitle choose={choose} title={service.title} />
                <ServiceSubTilte choose={choose} subTitle={service.subTitle} />
                <button className="text-red-600 text-small">READ MORE</button>
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <Container className="py-16 ">
          <div className="text-center space-y-4 mb-16">
            <Title />
            <SubTitle />
          </div>
          <div className={gridClassName}>
            {servicesData?.map((service) => (
              <div key={service.id} className="text-center space-y-5">
                <div
                  style={{ backgroundImage: `url(${service.imgUrl})` }}
                  className="bg-no-repeat bg-center bg-cover overflow-hidden m-auto h-40 w-40 rounded-full"
                ></div>
                <ServiceTitle title={service.title} />
                <ServiceSubTilte subTitle={service.subTitle} />
                <button className="text-red-600">READ MORE</button>
              </div>
            ))}
          </div>
        </Container>
      )}
    </>
  );
};

export default Design1;
