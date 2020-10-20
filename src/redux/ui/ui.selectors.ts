import { RootState } from "../rootReducer";

export const selectDarkMode = ({ ui }: RootState) => ui.darkMode;
export const selectLogViewerOpen = ({ ui }: RootState) => ui.logViewerOpen;
export const selectCodeViewerOpen = ({ ui }: RootState) => ui.codeViewerOpen;
export const selectDemoMode = ({ ui }: RootState) => ui.demoMode;
