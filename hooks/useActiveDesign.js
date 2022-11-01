import { useSelector } from "react-redux";
const useActiveDesign = (compName) => {
  const aboutDesign = useSelector((state) => state.aboutComp.design);
  const heroDesign = useSelector((state) => state.hero.design);
  const featuredDesign = useSelector((state) => state.featured.design);
  
  const handleActive = () => {
    if (compName === "hero") {
      return Number(heroDesign[heroDesign.length - 1]);
    } else if (compName === "about") {
      return Number(aboutDesign[aboutDesign.length - 1]);
    } else if (compName === "featured") {
      return Number(featuredDesign[featuredDesign.length - 1]);
    }
  };
  return { handleActive };
};

export default useActiveDesign;
