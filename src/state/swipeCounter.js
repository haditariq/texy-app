import { createSlice } from "@reduxjs/toolkit";

export const SwipeCounterSlice = createSlice({
  name: "SwipeCounter",
  initialState: {
    count: 0,
    isSubscribed: false
  },
  reducers: {
    initializeSwiperCount: (state) => {
      state.count = 0;
    },
    incrementSwipeCount: (state) => {
      state.count += 1;
    },
    subscribe: (state) => {
      state.isSubscribed = true;
    },
    unSubscribe: (state) => {
      state.isSubscribed = false;
    }
  }
});

export const {
  incrementSwipeCount,
  initializeSwiperCount,
  subscribe,
  unSubscribe
} = SwipeCounterSlice.actions;

export default SwipeCounterSlice.reducer;
