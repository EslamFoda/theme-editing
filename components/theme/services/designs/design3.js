import Container from "../../../ui/Container/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import ServiceTitle from "../common/serviceTitle";
import ServiceSubTilte from "../common/serviceSubTitle";
import cn from "clsx";
const Design3 = ({ device, servicesData }) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );

  return (
    <Container className="py-16 ">
      <div className="text-center space-y-4 mb-16">
        <Title />
        <SubTitle />
      </div>
      <div className={gridClassName}>
        {servicesData?.map((service) => (
          <div key={service.id} className=" space-y-5">
            <div
              style={{ backgroundImage: `url(${service.imgUrl})` }}
              className="bg-no-repeat bg-center bg-cover p-5  flex items-end   h-96 w-full"
            >
              {" "}
              <div className="space-y-4 bg-white shadow-lg  p-6">
                <ServiceTitle title={service.title} />
                <ServiceSubTilte subTitle={service.subTitle} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Design3;
