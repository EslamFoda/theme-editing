import Container from "../../../ui/Container/container";
import Title from "../../clients/common/title";
import SubTitle from "../../clients/common/subTitle";
import { testimonialsData } from "../../../../constant";
import cn from "clsx";
const Design4 = ({ device, choose }) => {
  const gridClassName = cn(
    "grid gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1",
    {
      "!grid-cols-1": device === "mobile",
    }
  );
  return (
    <>
      <Container className="py-16">
        <div className="text-center space-y-4 mb-16">
          <Title title={"What Our Clients Say"} />
          <SubTitle
            subTitle={
              "Hundreds of customers rely on our services. See what they have to say."
            }
          />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
          {testimonialsData.map((client) => (
            <div className="flex" key={client.id}>
              <div className="w-full h-full justify-between flex flex-col gap-4   p-6  rounded-md   border-gray-border border">
                <p className="text-sm">{client.review}</p>
                <div className="flex items-center gap-4">
                  <div
                    style={{ backgroundImage: `url(${client.pic})` }}
                    className="w-14 h-14 bg-no-reapeat bg-cover bg-center   rounded-full   "
                  ></div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{client.name}</h3>
                    <span className="block text-sm font-semibold">
                      {client.position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Design4;
