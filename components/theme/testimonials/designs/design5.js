import Container from "../../../ui/Container/container";
import Title from "../../clients/common/title";
import SubTitle from "../../clients/common/subTitle";
import { testimonialsData } from "../../../../constant";
import { TbQuote } from "react-icons/tb";
import cn from "clsx";
const Design5 = ({ device, choose }) => {
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
        <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-14">
          {testimonialsData.map((client) => (
            <div
              key={client.id}
              className="w-full flex odd:bg-purple-500 odd:text-white rounded-md flex-col gap-4 self-start  p-8   shadow-big "
            >
              {/* <div
                style={{ backgroundImage: `url(${client.pic})` }}
                className="w-20 h-20 bg-no-reapeat bg-cover bg-center bg-white shadow-md  rounded-full  border-4 border-[#dfe0e1]"
              ></div> */}
              <TbQuote size={40}/>
               <p className="text-sm">{client.review}</p>
              <h3 className="text-2xl font-semibold">{client.name}</h3>
              <span className="block text-sm font-semibold">
                {client.position}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Design5;
