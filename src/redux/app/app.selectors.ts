import { RootState } from "../rootReducer";

export const selectUrl = ({ app }: RootState) => app.url;
export const selectRefreshTS = ({ app }: RootState) => app.refreshTs;
export const selectHeight = ({ app }: RootState) => app.height;
export const selectWidth = ({ app }: RootState) => app.width;
export const selectAllowCamera = ({app}: RootState) => app.allowCamera;
export const selectLogs = ({app}: RootState) => app.logs;
