import { useDispatch } from "react-redux";
import { selectAboutDesign } from "../features/about-section";
import { selectHeroDesign } from "../features/hero";
import { selectFeaturedDesign } from "../features/featured-section";

const useSelectDesign = (compName) => {
  const dispatch = useDispatch();

  const handleSelectDesign = (i) => {
    if (compName === "hero") {
      dispatch(selectHeroDesign(i + 1));
    } else if (compName === "about") {
      dispatch(selectAboutDesign(i + 1));
    } else if (compName === "featured") {
      dispatch(selectFeaturedDesign(i + 1));
    }
  };

  return { handleSelectDesign };
};

export default useSelectDesign;
