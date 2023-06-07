import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const filmAdapter = createEntityAdapter({
  selectId: (film) => film.filmId,
  // sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const fetchFilms = createAsyncThunk("film/fetchFilms", async () => {
  try {
    const response = await fetch(
      "http://api.zirecinema.azerenerji.az/zirecinema/films"
    );
    return await response.json();
  } catch (error) {
    throw new error(error);
  }
});

export const addFilm = createAsyncThunk("film/addFilm", async (film) => {
  try {
    const response = await fetch(
      "http://api.zirecinema.azerenerji.az/zirecinema/films",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(film),
      }
    );
    return await response.json();
  } catch (error) {
    throw new error(error);
  }
});

const filmSlice = createSlice({
  name: "films",
  initialState: filmAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: {
    [fetchFilms.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchFilms.fulfilled]: (state, action) => {
      state.status = "succeeded";
      filmAdapter.setAll(state, action.payload);
    },
    [fetchFilms.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const {
  selectIds: selectFilmIds,
  selectEntities: selectFilmEntities,
  selectAll: selectAllFilms,
  selectTotal: selectTotalFilms,
  selectById: selectFilmById,
} = filmAdapter.getSelectors((state) => state.films);

export default filmSlice.reducer;
