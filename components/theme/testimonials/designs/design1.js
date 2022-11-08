import Container from "../../../ui/Container/container";
import Title from "../../clients/common/title";
import SubTitle from "../../clients/common/subTitle";
import { testimonialsData } from "../../../../constant";
import EditorComp from "../../../editor";
import cn from "clsx";
const Design1 = ({
  device,
  choose,
  testiData,
  editTestiUserName,
  editTestiPosition,
  editTestiReview,
  editTestiTitle,
  editTestiSubTitle,
  headers,
}) => {
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
          {/* <Title title={"What Our Clients Say"} /> */}
          <EditorComp
            initialValue={headers?.title}
            handleEdit={editTestiTitle}
          />
          <EditorComp
            initialValue={headers?.subTitle}
            handleEdit={editTestiSubTitle}
          />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-14">
          {testiData?.map((client) => (
            <div
              key={client.id}
              className="w-full flex flex-col gap-4 self-start  p-10 pt-12  shadow-big relative"
            >
              <div
                style={{ backgroundImage: `url(${client.pic})` }}
                className="w-20 h-20 bg-no-reapeat bg-cover bg-center bg-white shadow-md absolute -top-10 rounded-full left-8 border-4 border-[#dfe0e1]"
              ></div>
              {/* <h3 className="text-2xl font-semibold">{client.userName}</h3> */}
              <EditorComp
                id={client.id}
                handleMultiEdit={editTestiUserName}
                initialValue={client.userName}
              />
              <EditorComp
                id={client.id}
                handleMultiEdit={editTestiPosition}
                initialValue={client.position}
              />
              <EditorComp
                id={client.id}
                handleMultiEdit={editTestiReview}
                initialValue={client.review}
              />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Design1;
