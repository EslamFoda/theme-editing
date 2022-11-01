import React from "react";
import Container from "../../../ui/Container/container";
import { GrGroup } from "react-icons/gr";
import {
  HiOutlineSupport,
  HiOutlineBriefcase,
  HiOutlineUsers,
} from "react-icons/hi";
import { TbAsteriskSimple } from "react-icons/tb";
import cn from "clsx";
const Design3 = ({ choose = false, device }) => {
  const data = [
    {
      icon: (
        <HiOutlineSupport className="text-red-500" size={choose ? 5 : 15} />
      ),
      title: "Professional Support",
      subTitle:
        "Our team works diligently to ensure that all your questions are answered and your needs met.",
      id: 1,
      button: "Read More",
    },
    {
      icon: <HiOutlineUsers className="text-red-500" size={choose ? 5 : 15} />,
      title: "Qualified Team",
      subTitle:
        "From designers to developers to writers, our team is equipped with a diverse set of skills.",
      id: 2,
      button: "Read More",
    },
    {
      icon: (
        <HiOutlineBriefcase className="text-red-500" size={choose ? 5 : 15} />
      ),
      title: "High Quality Work",
      subTitle:
        "All our work is executed with the highest degree of efficiency.",
      id: 3,
      button: "Read More",
    },
    {
      icon: (
        <TbAsteriskSimple className="text-red-500" size={choose ? 5 : 15} />
      ),
      title: "Detail-oriented approach",
      subTitle:
        "We focus on every aspect of our clients’ needs to leave nothing to chance.",
      id: 4,
      button: "Read More",
    },
  ];
  const gridClassName = cn(
    "py-16 grid lg:grid-cols-3  sm:grid-cols-2   grid-cols-1 md-grid-cols-2 gap-4",
    {
      "!grid-cols-1": device === "mobile",
      "!grid-cols-2": device === "tablet",
    }
  );

  return (
    <>
      {choose ? (
        <div>
          <Container className="absolute top-1/2 overflow-hidden left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="grid lg:grid-cols-3  sm:grid-cols-2   grid-cols-1 md-grid-cols-2 py-1  gap-1">
              {data.map((card) => {
                return (
                  <div className="p-1 flex  flex-col space-y-1 items-start  ">
                    <div className="flex flex-col gap-1">
                      <div className="w-2 h-2 bg-red-200 rounded-full flex justify-center items-center">
                        <div>{card.icon}</div>
                      </div>
                      <h3 className="text-very-small font-semibold">{card.title}</h3>
                    </div>
                    <p className="text-very-small">{card.subTitle}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      ) : (
        <div>
          <Container>
            <div className={gridClassName}>
              {data.map((card) => {
                return (
                  <div className="p-4 flex  flex-col space-y-5 items-start  ">
                    <div className="flex flex-col gap-5">
                      <div className="w-8 h-8 bg-red-200 rounded-full flex justify-center items-center">
                        <div>{card.icon}</div>
                      </div>
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                    </div>
                    <p>{card.subTitle}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Design3;
