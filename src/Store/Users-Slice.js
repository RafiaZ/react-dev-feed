import { createSlice } from "@reduxjs/toolkit";

const FIRST_NAMES = [
  "Adam",
  "Jack",
  "Mick",
  "Rachel",
  "Connor",
  "Conor",
  "Daisy",
  "Sophie",
];
const LAST_NAMES = [
  "Turs",
  "Hurst",
  "Han",
  "Goodwell",
  "Birch",
  "Hill",
  "Frankie",
];

function makeArray(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push({
      id: "user " + i,
      userData: {
        firstName: FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)],
        lastName: LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)],
        fRequests: [],
        friends: [],
        toolbox: [],
        likes: ["1", "2", "3", "4"],
        reputation: Math.floor(Math.random() * 15533),
        comments: Math.floor(Math.random() * 5223),
      },
    });
  }
  return arr;
}

const initialState = makeArray(50);

const UsersSlice = createSlice({
  name: "Users",
  initialState: { users: initialState },
  reducers: {},
});

export const UsersActions = UsersSlice.actions;
export default UsersSlice;
