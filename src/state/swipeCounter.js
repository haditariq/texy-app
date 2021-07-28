import { createSlice } from "@reduxjs/toolkit";

export const SwipeCounterSlice = createSlice({
  name: "SwipeCounter",
  initialState: {
    count: 0,
    isSubscribed: false
  },
  reducers: {
    initializeSwiperCount: (state) => {
      console.warn("INITIALIZED");
      state.count = 0;
    },
    incrementSwipeCount: (state) => {
      state.count += 1;
      console.log(state, "incrementSwipeCount");
    },
    subscribe: (state) => {
      state.isSubscribed = true;
      console.log(state, "subscribe");
    },
    unSubscribe: (state) => {
      console.log(state, "pre-unSubscribe");

      state.isSubscribed = false;
      console.log(state, "unSubscribe");
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
