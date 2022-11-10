import { createContext, useId, useState } from "react";
import MainHero from "../components/theme/hero";

export const CompsContext = createContext();

const CompsProvider = ({ children }) => {
  const [comps, setComps] = useState([
    {
      Component: MainHero,
      id: useId(),
      compName: "hero",
      designNum: 1,
      compData: {
        title:
          "<p class='text-3xl mb-5'>clothes is a leading business in the clothes industry</p>",
        subTitle:
          "<span class='tinymce-header'>Learn about our services and join our community today </span>",
        primaryBtn: "<span>shop now</span>",
        secondaryBtn: "<span>Learn More</span>",
      },
    },
  ]);
  return (
    <CompsContext.Provider value={{ comps, setComps }}>
      {children}
    </CompsContext.Provider>
  );
};

export default CompsProvider;
