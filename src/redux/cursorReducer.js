import { createSlice } from "@reduxjs/toolkit";

const cursorSlice = createSlice({
  name: "cursor",
  initialState: {
    pointer: false,
    visible: true,
  },
  reducers: {
    togglePointer: (state, action) => {
      return {
        ...state,
        pointer: !state.pointer
      };
    },
    toggleVisible: (state, action) => {
      return {
        ...state,
        visible: !state.visible
      };
    },
  },
});

export const {
  togglePointer,
  toggleVisible,
} = cursorSlice.actions;

export default cursorSlice.reducer;
