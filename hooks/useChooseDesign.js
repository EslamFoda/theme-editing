import { useEffect, useState } from "react";
import AboutDesign1 from "../components/theme/about/designs/design1";
import AboutDesign2 from "../components/theme/about/designs/design2";
import AboutDesign3 from "../components/theme/about/designs/design3";
import AboutDesign4 from "../components/theme/about/designs/design4";
import AboutDesign5 from "../components/theme/about/designs/design5";
import HeroDesign1 from "../components/theme/hero/designs/design1";
import HeroDesign2 from "../components/theme/hero/designs/design2";
import HeroDesign3 from "../components/theme/hero/designs/design3";
import HeroDesign4 from "../components/theme/hero/designs/design4";
import HeroDesign5 from "../components/theme/hero/designs/design5";
import FeaturedDesign1 from "../components/theme/featured/designs/design1";
import FeaturedDesign2 from "../components/theme/featured/designs/design2";
import FeaturedDesign3 from "../components/theme/featured/designs/design3";
import FeaturedDesign4 from "../components/theme/featured/designs/design4";
import FeaturedDesign5 from "../components/theme/featured/designs/design5";
import ServiceDesign1 from "../components/theme/services/designs/design1";
import ServiceDesign2 from "../components/theme/services/designs/design2";
import ServiceDesign3 from "../components/theme/services/designs/design3";
import ServiceDesign4 from "../components/theme/services/designs/design4";
import ServiceDesign5 from "../components/theme/services/designs/design5";
import TeamDesign1 from "../components/theme/team/design/design1";
import TeamDesign2 from "../components/theme/team/design/design2";
import TeamDesign3 from "../components/theme/team/design/design3";
import TeamDesign4 from "../components/theme/team/design/design4";
import TeamDesign5 from "../components/theme/team/design/design5";
import ClientsDesign1 from "../components/theme/clients/designs/design1";
import ClientsDesign2 from "../components/theme/clients/designs/design2";
import ClientsDesign3 from "../components/theme/clients/designs/design3";
import ClientsDesign4 from "../components/theme/clients/designs/design4";
import ClientsDesign5 from "../components/theme/clients/designs/design5";
import GalleryDesing1 from "../components/theme/gallery/designs/design1";

const useChooseDesign = (compName) => {
  const aboutDesigns = [
    AboutDesign1,
    AboutDesign2,
    AboutDesign3,
    AboutDesign4,
    AboutDesign5,
  ];
  const heroDesigns = [
    HeroDesign1,
    HeroDesign2,
    HeroDesign3,
    HeroDesign4,
    HeroDesign5,
  ];
  const featuredDesigns = [
    FeaturedDesign1,
    FeaturedDesign2,
    FeaturedDesign3,
    FeaturedDesign4,
    FeaturedDesign5,
  ];

  const servicesDesigns = [
    ServiceDesign1,
    ServiceDesign2,
    ServiceDesign3,
    ServiceDesign4,
    ServiceDesign5,
  ];

  const TeamDesigns = [
    TeamDesign1,
    TeamDesign2,
    TeamDesign3,
    TeamDesign4,
    TeamDesign5,
  ];
  const clientsDesigns = [
    ClientsDesign1,
    ClientsDesign2,
    ClientsDesign3,
    ClientsDesign4,
    ClientsDesign5,
  ];
  const GalleryDesigns = [GalleryDesing1];

  const [designs, setDesigns] = useState(heroDesigns);

  const selectedDesigns = () => {
    if (compName === "hero") {
      setDesigns(heroDesigns);
    } else if (compName === "about") {
      setDesigns(aboutDesigns);
    } else if (compName === "featured") {
      setDesigns(featuredDesigns);
    } else if (compName === "services") {
      setDesigns(servicesDesigns);
    } else if (compName === "team") {
      setDesigns(TeamDesigns);
    } else if (compName === "clients") {
      setDesigns(clientsDesigns);
    } else if (compName === "gallery") {
      setDesigns(GalleryDesigns);
    }
  };

  useEffect(() => {
    selectedDesigns();
  }, [compName]);

  return { designs };
};

export default useChooseDesign;
