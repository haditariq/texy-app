import { createSlice } from "@reduxjs/toolkit";

export const PickupLinesSlice = createSlice({
  name: "PickupLines",
  initialState: {
    pickupLines: []
  },
  reducers: {
    addPickupLine: (state, action) => {
      state.pickupLines = [...state.pickupLines, action.payload];
    },
    removePickLine: (state, action) => {
      console.warn(state.pickupLines)
      state.pickupLines = state.pickupLines.filter(
        (item, idx) => item.id != action.payload
      )
    }
  }
});

export const { addPickupLine, removePickLine } = PickupLinesSlice.actions;

export default PickupLinesSlice.reducer;
