import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Log {
  date: number;
  content: string;
}

interface State {
  url: string | undefined;
  refreshTs: number;
  width: number;
  height: number;
  allowCamera: boolean;
  logs: Log[];
}

const INITIAL_STATE: State = {
  url: undefined,
  refreshTs: Date.now(),
  width: 600,
  height: 500,
  allowCamera: true,
  logs: [],
};

const appSlice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    setUrl: (state, { payload }: PayloadAction<string>) => {
      state.url = payload;
    },
    setHeight: (state, { payload }: PayloadAction<number>) => {
      state.height = payload;
    },
    setWidth: (state, { payload }: PayloadAction<number>) => {
      state.width = payload;
    },
    updateIFrame: (state) => {
      state.refreshTs = Date.now();
    },
    setAllowCamera: (state, { payload }: PayloadAction<boolean>) => {
      state.allowCamera = payload;
    },
    addLog: (state, { payload }: PayloadAction<Log>) => {
      const { logs } = state;
      state.logs = [...logs, payload];
    },
    resetLogs: (state) => {
      state.logs = [];
    },
  },
});

export default appSlice;

const actions = appSlice.actions;
const {
  updateIFrame,
  setHeight,
  setWidth,
  setUrl,
  setAllowCamera,
  addLog,
  resetLogs,
} = actions;

export {
  updateIFrame,
  setHeight,
  setWidth,
  setUrl,
  setAllowCamera,
  addLog,
  resetLogs,
};
