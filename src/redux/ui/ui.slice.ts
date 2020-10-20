import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  darkMode: boolean;
  logViewerOpen: boolean;
  codeViewerOpen: boolean;
  demoMode: boolean;
}

const INITIAL_STATE: State = {
  darkMode: false,
  logViewerOpen: false,
  codeViewerOpen: false,
  demoMode: false,
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
    toggleDemoMode: (state) => {
      state.demoMode = !state.demoMode;
    },
    leaveDemoMode: (state) => {
      state.demoMode = false;
    },
  },
});

export default uiSlice;

const actions = uiSlice.actions;
const {
  toggleDarkMode,
  toggleLogViewerOpen,
  toggleCodeViewerOpen,
  toggleDemoMode,
  leaveDemoMode,
} = actions;

export {
  toggleDarkMode,
  toggleLogViewerOpen,
  toggleCodeViewerOpen,
  toggleDemoMode,
  leaveDemoMode,
};
