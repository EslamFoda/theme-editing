import React from "react";
import Container from "../../../../ui/Container";
import { FaAd, FaUsers, FaBriefcase, FaAsterisk } from "react-icons/fa";
const data = [
  {
    icon: <FaAd className="text-red-500" size={40}/>,
    title: "Professional Support",
    subTitle:
      "Our team works diligently to ensure that all your questions are answered and your needs met.",
    id: 1,
    button: "Read More",
  },
  {
    icon: <FaUsers className="text-red-500" size={40}/>,
    title: "Qualified Team",
    subTitle:
      "From designers to developers to writers, our team is equipped with a diverse set of skills.",
    id: 2,
    button: "Read More",
  },
  {
    icon: <FaBriefcase className="text-red-500" size={40}/>,
    title: "High Quality Work",
    subTitle: "All our work is executed with the highest degree of efficiency.",
    id: 3,
    button: "Read More",
  },
  {
    icon: <FaAsterisk className="text-red-500" size={40}/>,
    title: "Detail-oriented approach",
    subTitle:
      "We focus on every aspect of our clients’ needs to leave nothing to chance.",
    id: 4,
    button: "Read More",
  },
];
const Design1 = () => {
  return (
    <div>
      <Container>
        <div className="flex items-center flex-wrap py-16 justify-between gap-4">
          {data.map((card) => {
            return (
              <div className=" p-4 flex flex-col space-y-5 text-center items-center  bg-red-100  w-[450px]">
                <div>{card.icon}</div>
                <h3 className="text-4xl font-semibold">{card.title}</h3>
                <p>{card.subTitle}</p>
                <button className="bg-red-500 p-3">{card.button}</button>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Design1;
