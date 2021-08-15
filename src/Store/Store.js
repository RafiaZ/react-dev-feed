import { configureStore } from "@reduxjs/toolkit";

import PostSlice from "./Post-Slice";
import AuthSlice from "./Auth-Slice";
import UsersSlice from "./Users-Slice";
const Store = configureStore({
  reducer: {
    posts: PostSlice.reducer,
    auth: AuthSlice.reducer,
    users: UsersSlice.reducer,
  },
});

export default Store;
