import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "../features/hero/index";
import aboutReducer from "../features/about-section/index";
import featuredReducer from "../features/featured-section";
export const store = configureStore({
  reducer: {
    counter: heroReducer,
    aboutComp: aboutReducer,
    featured: featuredReducer,
  },
});
