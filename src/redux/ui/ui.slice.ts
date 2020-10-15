import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  darkMode: boolean;
  logViewerOpen: boolean;
  codeViewerOpen: boolean;
}

const INITIAL_STATE: State = {
  darkMode: false,
  logViewerOpen: false,
  codeViewerOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: INITIAL_STATE,
  reducers: {
    toggleDarkMode: (state, { payload }: PayloadAction<boolean>) => {
      state.darkMode = payload;
    },
    toggleLogViewerOpen: (state) => {
      state.logViewerOpen = !state.logViewerOpen;
    },
    toggleCodeViewerOpen: (state) => {
      state.codeViewerOpen = !state.codeViewerOpen;
    },
  },
});

export default uiSlice;

const actions = uiSlice.actions;
const { toggleDarkMode, toggleLogViewerOpen, toggleCodeViewerOpen } = actions;

export { toggleDarkMode, toggleLogViewerOpen, toggleCodeViewerOpen };
