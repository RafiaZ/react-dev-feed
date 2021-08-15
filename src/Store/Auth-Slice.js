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
        profileImageURL:
          "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
        coverImageURL:
          "https://images.unsplash.com/photo-1476522465286-b5b94c729d2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1899&q=80",
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
