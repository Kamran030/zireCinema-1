import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const sessionAdapter = createEntityAdapter({
  selectId: (session) => session.seansId,
  // sortComparer: (a, b) => a.time.localeCompare(b.time),
});

export const fetchSessions = createAsyncThunk(
  "session/fetchSessions",
  async () => {
    try {
      const response = await fetch(
        "http://api.zirecinema.azerenerji.az/zirecinema/seans"
      );
      return await response.json();
    } catch (error) {
      throw new error(error);
    }
  }
);

export const addSessions = createAsyncThunk(
  "session/addSessions",
  async (session) => {
    try {
      const response = await fetch(
        "http://api.zirecinema.azerenerji.az/zirecinema/seans",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(session),
        }
      );
      return await response.json();
    } catch (error) {
      throw new error(error);
    }
  }
);

const sessionSlice = createSlice({
  name: "session",
  initialState: sessionAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: {
    [fetchSessions.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSessions.fulfilled]: (state, action) => {
      state.status = "succeeded";
      sessionAdapter.setAll(state, action.payload);
    },
    [fetchSessions.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const {
  selectIds: selectSessionsIds,
  selectEntities: selectSessionsEntities,
  selectAll: selectAllSessions,
  selectTotal: selectTotalSessions,
  selectById: selectSessionById,
} = sessionAdapter.getSelectors((state) => state.session);

export default sessionSlice.reducer;
