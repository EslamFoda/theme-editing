import { useEffect, useState } from "react";
import AboutDesign1 from "../components/theme/about/designs/design1";
import AboutDesign2 from "../components/theme/about/designs/design2";
import AboutDesign3 from "../components/theme/about/designs/design3";
import AboutDesign4 from "../components/theme/about/designs/design4";
import AboutDesign5 from "../components/theme/about/designs/design5";
import HeroDesign1 from "../components/theme/hero/designs/design1";
import HeroDesign2 from "../components/theme/hero/designs/design2";
import HeroDesign3 from "../components/theme/hero/designs/design3";
import FeaturedDesign1 from "../components/theme/featured/designs/design1";
import FeaturedDesign2 from "../components/theme/featured/designs/design2";
import FeaturedDesign3 from "../components/theme/featured/designs/design3";
import FeaturedDesign4 from "../components/theme/featured/designs/design4";
import FeaturedDesign5 from "../components/theme/featured/designs/design5";
const useChooseDesign = (compName) => {
  const aboutDesigns = [
    AboutDesign1,
    AboutDesign2,
    AboutDesign3,
    AboutDesign4,
    AboutDesign5,
  ];
  const heroDesigns = [HeroDesign1, HeroDesign2, HeroDesign3];
  const featuredDesigns = [
    FeaturedDesign1,
    FeaturedDesign2,
    FeaturedDesign3,
    FeaturedDesign4,
    FeaturedDesign5,
  ];
  const [designs, setDesigns] = useState(heroDesigns);

  const selectedDesigns = () => {
    if (compName === "hero") {
      setDesigns(heroDesigns);
    } else if (compName === "about") {
      setDesigns(aboutDesigns);
    } else if (compName === "featured") {
      setDesigns(featuredDesigns);
    }
  };

  useEffect(() => {
    selectedDesigns();
  }, [compName]);

  return { designs };
};

export default useChooseDesign;
