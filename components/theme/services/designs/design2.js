import Container from "../../../ui/Container/container";
import Title from "../common/title";
import SubTitle from "../common/subTitle";
import ServiceTitle from "../common/serviceTitle";
import ServiceSubTilte from "../common/serviceSubTitle";
import cn from "clsx";
const Design2 = ({ device, servicesData }) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  const headersClassName = cn(
    "grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-16",
    { "!grid-cols-1": device === "mobile" }
  );
  return (
    <Container className="py-16 ">
      <div className={headersClassName}>
        <Title />
        <SubTitle />
      </div>
      <div className={gridClassName}>
        {servicesData?.map((service) => (
          <div key={service.id} className=" space-y-5">
            <div
              style={{ backgroundImage: `url(${service.imgUrl})` }}
              className="bg-no-repeat bg-center bg-cover   h-72 w-full"
            ></div>
            <ServiceTitle title={service.title} />
            <ServiceSubTilte subTitle={service.subTitle} />
            <button className="text-red-600">READ MORE</button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Design2;
