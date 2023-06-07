import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter({
  selectIds: (user) => user.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await fetch(
      "http://api.zirecinema.azerenerji.az/zirecinema/users"
    );
    return await response.json();
  } catch (error) {
    throw new error(error);
  }
});

export const addUser = createAsyncThunk("user/addUser", async (user) => {
  try {
    const response = await fetch(
      "http://api.zirecinema.azerenerji.az/zirecinema/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    return await response.json();
  } catch (error) {
    throw new error(error);
  }
});

const usersSlice = createSlice({
  name: "user",
  initialState: usersAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "succeeded";
      usersAdapter.setAll(state, action.payload);
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [addUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [addUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      usersAdapter.addOne(state, action.payload);
    },
    [addUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const {
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
  selectById: selectUserById,
  
} = usersAdapter.getSelectors((state) => state.user);

export default usersSlice.reducer;
