import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    }
  }
});

export const { incrementByAmount } = counter.actions;

export default counter.reducer;
