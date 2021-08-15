import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    isLoggedIn: false,
    user: {
      id: "u1",
      email: "test@test.com",
      password: "AwSd",
      userData: {
        firstName: "Test",
        lastName: "Account",
        DOB: new Date("12/08/1995").toISOString(),
        fRequests: [],
        friends: [],
        toolbox: [],
        likes: ["1", "2", "3", "4"],
        reputation: 0,
        comments: 0,
      },
    },
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
    addFriend: (state, action) => {
      state.user.userData.friends.push(action.payload);
    },
    addTool: (state, action) => {
      state.user.userData.toolbox = action.payload;
    },
  },
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice;
