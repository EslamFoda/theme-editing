import Container from "../../../ui/Container/container";
import Title from "../../clients/common/title";
import SubTitle from "../../clients/common/subTitle";
import { testimonialsData } from "../../../../constant";
import { TbQuote } from "react-icons/tb";
import cn from "clsx";
import EditorComp from "../../../editor";
const Design5 = ({
  device,
  choose,
  testiData,
  handleMultiEdit,
  handleEdit,
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
    <div
      style={{
        backgroundColor: `rgba(${backgroundColor?.r}, ${backgroundColor?.g}, ${backgroundColor?.b}, ${backgroundColor?.a})`,
        transition: "all .5s ease-in-out",
      }}
    >
      <Container className="py-16">
        <div className="text-center space-y-4 mb-16">
          <EditorComp
            initialValue={headers?.title}
            handleEdit={handleEdit}
            keys="title"
          />
          <EditorComp
            initialValue={headers?.subTitle}
            handleEdit={handleEdit}
            keys="subTitle"
          />
        </div>
        <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-14">
          {testiData?.map((client) => (
            <div
              key={client.id}
              className="w-full testi5 flex odd:bg-primary even:bg-white odd:text-white rounded-md flex-col gap-4 self-start  p-8   shadow-big "
            >
              <TbQuote size={40}/>
              <EditorComp
                id={client.id}
                initialValue={client.review}
                handleMultiEdit={handleMultiEdit}
                keys="review"
              />
              <EditorComp
                id={client.id}
                initialValue={client.userName}
                handleMultiEdit={handleMultiEdit}
                keys="userName"
              />

              <EditorComp
                id={client.id}
                initialValue={client.position}
                handleMultiEdit={handleMultiEdit}
                keys="position"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Design5;
