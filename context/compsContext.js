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
    },
  ]);
  return (
    <CompsContext.Provider value={{ comps, setComps }}>
      {children}
    </CompsContext.Provider>
  );
};

export default CompsProvider;
