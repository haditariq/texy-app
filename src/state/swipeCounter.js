import { createSlice } from "@reduxjs/toolkit";

export const SwipeCounterSlice = createSlice({
  name: "SwipeCounter",
  initialState: {
    count: null
  },
  reducers: {
    initializeSwiperCount: (state)=>{
      state.count = 0;
    },
    incrementSwipeCount: (state) => {
      state.count += 1;
    }
  },
});

export const { incrementSwipeCount, initializeSwiperCount } = SwipeCounterSlice.actions;

export default SwipeCounterSlice.reducer;
