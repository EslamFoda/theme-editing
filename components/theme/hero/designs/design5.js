import Container from "../../../ui/Container/container";
import cn from "clsx";
import EditorComp from "../../../editor";
import Button from "../../../ui/Button";
const Design5 = ({ device, choose, heroData, handleEdit }) => {
  const imageClassName = cn("lg:h-[450px] md:h-[400px] h-80  w-full  ", {
    "!h-80": device === "mobile",
  });
  const headerClassName = cn(
    "lg:text-4xl md:text-3xl text-2xl font-semibold max-w-3xl",
    {
      "!text-4xl": device === "mobile",
    }
  );

  const flexClassName = cn(
    "flex pt-20 flex-col justify-center items-center lg:gap-20 md:gap-20 gap-10",
    {
      "!gap-10": device === "mobile",
    }
  );

  const gridClassName = cn(
    "grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:gap-24 md:gap-24 gap-5",
    {
      "!gap-5 !grid-cols-1": device === "mobile",
    }
  );
  const btnFlexClassName = cn(
    "flex flex-col lg:flex-row md:flex-col items-center w-full justify-center gap-4 mt-4",
    {
      "!flex-col": device === "tablet",
      "!flex-col": device === "mobile",
    }
  );

  return (
    <div>
      {choose ? (
        <div className="flex pt-6  flex-col justify-center items-center gap-2">
          <Container>
            <div className="grid pb-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  gap-1">
              <div>
                <h1 className=" text-small font-semibold max-w-3xl">
                  clothes is a leading business in the clothes industry
                </h1>
                <p className="text-very-small">
                  Learn about our services and join our community today
                </p>
              </div>
              <div className="flex flex-col lg:flex-row md:flex-col items-center w-full justify-center gap-1 ">
                <button className="bg-red-500   w-full  text-white p-[1px] text-small">
                  Get in Touch
                </button>
                <button className=" border border-solid   w-full border-red-500 p-[1px] text-small">
                  learn more
                </button>
              </div>
            </div>
          </Container>
          <div
            style={{
              backgroundImage:
                "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
              backgroundSize: "cover",
              MozBackgroundSize: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-20  w-full"
          ></div>
        </div>
      ) : (
        <div className={flexClassName}>
          <Container>
            <div className={gridClassName}>
              <div>
                <div className={headerClassName}>
                  <EditorComp
                    handleEdit={handleEdit}
                    initialValue={heroData.title}
                    keys="title"
                  />
                </div>
                <EditorComp
                  handleEdit={handleEdit}
                  initialValue={heroData.subTitle}
                  keys="subTitle"
                />
              </div>
              <div className={btnFlexClassName}>
                <Button full>
                  <EditorComp
                    handleEdit={handleEdit}
                    initialValue={heroData.primaryBtn}
                    keys="primaryBtn"
                  />
                </Button>
                <Button full variant="outline">
                  <EditorComp
                    handleEdit={handleEdit}
                    initialValue={heroData.secondaryBtn}
                    keys="secondaryBtn"
                  />
                </Button>
              </div>
            </div>
          </Container>
          <div
            style={{
              backgroundImage:
                "url(https://image.shutterstock.com/shutterstock/photos/2025365270/display_1500/stock-photo-beautiful-attractive-asia-lady-choosing-clothes-on-clothes-rack-dressing-looking-herself-in-mirror-2025365270.jpg)",
              backgroundSize: "cover",
              MozBackgroundSize: "center center",
              backgroundRepeat: "no-repeat",
            }}
            className={imageClassName}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Design5;
