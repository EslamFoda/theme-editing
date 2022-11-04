import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  value: 1,
  design: "design1",
}

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    next: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.value <= 2) {
        state.value += 1;
        state.design = `design${state.value}`;
      }
    },
    prev: (state) => {
      if (state.value >= 2) {
        state.value -= 1;
        state.design = `design${state.value}`;
      }
    },
    selectClientsDesign: (state, action) => {
      state.design = `design${action.payload}`;
    },
  },
})

// Action creators are generated for each case reducer function
export const { next, prev, selectClientsDesign } = clientsSlice.actions

export default clientsSlice.reducer