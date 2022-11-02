import MainAbout from "../components/theme/about";
import MainFeatured from "../components/theme/featured";
import MainServices from "../components/theme/services";

export const sectionsImgs = [
  { src: "/assets/about.png", id: 1, title: "about", Section: MainAbout },
  { src: "/assets/features.png", id: 2, title: "featured", Section: MainFeatured },
  { src: "/assets/services.png", id: 3, title: "services", Section: MainServices },
];


export const servicesData = [
  {
    title: "SEM Marketing",
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1516728043722-b394cb2f689e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c82882f6f384a30402cc75029d9e7b11&auto=format&fit=crop&w=550&q=80",
    subTitle:
      "We develop comprehensive PPC and SEO strategies. We’ll provide your AdWords account with continuous PPC support that is monitored to adapt to the evolving industry.",
  },
  {
    title: "Social Media Marketing",
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1519120126473-8be7aedcd6c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a55332dfc236b13f118ef77a36b4052f&auto=format&fit=crop&w=550&q=80",
    subTitle:
      "Our team works to expand your social media presence by creating compelling content designed for you. boost your social media audience and develop a strong community around your brand.",
  },
  {
    title: "Content Marketing",
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a8623f526569e949b73c4c7360d4532&auto=format&fit=crop&w=550&q=80",
    subTitle:
      "Our writers are wordsmiths trained in creating quality content for all aspects of your brand. We’ll take care of your website copy, SEO articles, blog posts, whitepapers and more.",
  },
];