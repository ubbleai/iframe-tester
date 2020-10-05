import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  darkMode: boolean;
}

const INITIAL_STATE: State = {
  darkMode: false
};

const uiSlice = createSlice({
  name: "ui",
  initialState: INITIAL_STATE,
  reducers: {
    toggleDarkMode: (state, { payload }: PayloadAction<boolean>) => {
      state.darkMode = payload;
    }
  }
});

export default uiSlice;

const actions = uiSlice.actions;
const { toggleDarkMode } = actions;

export { toggleDarkMode };
