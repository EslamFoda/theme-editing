import { createContext, useId, useState } from "react";

export const CompsContext = createContext();

const CompsProvider = ({ children }) => {
  const [animate, setAnimate] = useState("");
  const [comps, setComps] = useState([
    {
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
        pic: "https://images.unsplash.com/photo-1580197370215-38fdb17dfe8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1590&q=80",
      },
      backgroundColor: {
        r: "255",
        g: "255",
        b: "255",
        a: "1",
      },
    },
  ]);
  return (
    <CompsContext.Provider value={{ comps, setComps, animate, setAnimate }}>
      {children}
    </CompsContext.Provider>
  );
};

export default CompsProvider;
