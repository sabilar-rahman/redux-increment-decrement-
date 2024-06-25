import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };
const createSlice = counterSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
  },
});
