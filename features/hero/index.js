import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  value:1,
}

export const heroSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    next: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if(state.value <= 2 ){
          state.value += 1
      }
    },
    prev: (state) => {
        if(state.value >= 2){
            state.value -= 1
        }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { next, prev, incrementByAmount } = heroSlice.actions

export default heroSlice.reducer