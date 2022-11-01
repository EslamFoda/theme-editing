import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "../features/hero/index";
import aboutReducer from "../features/about-section/index";
import featuredReducer from "../features/featured-section";
import editSectionsReducer from "../features/edit-sections";
import compNameReducer from "../features/comp-name";
import addSectionReducer from "../features/add-section";
import widthReducer from "../features/main-width";
export const store = configureStore({
  reducer: {
    hero: heroReducer,
    aboutComp: aboutReducer,
    featured: featuredReducer,
    editSections: editSectionsReducer,
    compName: compNameReducer,
    addSections: addSectionReducer,
    mainWidth: widthReducer,
  },
});
