import { createSlice } from "@reduxjs/toolkit";

export const SwipeCounterSlice = createSlice({
  name: "SwipeCounter",
  initialState: {
    count: 0,
    isSubscribed: false
  },
  reducers: {
    initializeSwiperCount: (state) => {
      console.warn("INITIALIZED")
      state.count = 0;
    },
    incrementSwipeCount: (state) => {
      state.count += 1;
      console.log(state, "after");

    },
    subscribe: (state) => {
      console.log(state);
      state = {
        isSubscribed : true,
        count: state.count
      };
      
      console.log(state, "after");
    },
    unSubscribe: (state) => {
       state = {
        isSubscribed : false,
        count: state.count
      };
    }
  }
});

export const { incrementSwipeCount, initializeSwiperCount, subscribe, unSubscribe } =
  SwipeCounterSlice.actions;

export default SwipeCounterSlice.reducer;
