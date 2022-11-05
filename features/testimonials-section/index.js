import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  design: "design1",
};

export const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    selectTestimonialsDesign: (state, action) => {
      state.design = `design${action.payload}`;
    },
  },
});

export const { selectTestimonialsDesign } = testimonialsSlice.actions;

export default testimonialsSlice.reducer;
