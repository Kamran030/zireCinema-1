import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "../redux/films/filmSlice";
import sessionSlice from "../redux/session/sessionSlice";
import langSlice from "../redux/lang/langSlice";
import userSlice from "../redux/user/userSlice"

const store = configureStore({
  reducer: {
    films: filmSlice,
    session: sessionSlice,
    user: userSlice,
    lang: langSlice,
  },
});

export default store;
