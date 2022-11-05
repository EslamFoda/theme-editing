import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "../features/hero/index";
import aboutReducer from "../features/about-section/index";
import featuredReducer from "../features/featured-section";
import servicesReducer from "../features/servies-section";
import teamReducer from "../features/team-section";
import clientsReducer from "../features/clients-section";
import editSectionsReducer from "../features/edit-sections";
import compNameReducer from "../features/comp-name";
import addSectionReducer from "../features/add-section";
import widthReducer from "../features/main-width";
import galleryReducer from "../features/gallery-section";
import testimonialsReducer from "../features/testimonials-section";
export const store = configureStore({
  reducer: {
    hero: heroReducer,
    aboutComp: aboutReducer,
    featured: featuredReducer,
    services: servicesReducer,
    team: teamReducer,
    editSections: editSectionsReducer,
    compName: compNameReducer,
    addSections: addSectionReducer,
    mainWidth: widthReducer,
    clients: clientsReducer,
    gallery: galleryReducer,
    testimonials: testimonialsReducer,
  },
});
