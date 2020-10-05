import { RootState } from "../rootReducer";

export const selectDarkMode = ({ ui }: RootState) => ui.darkMode;
