import { createSlice } from "@reduxjs/toolkit";

function makeArray(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    if (i % 7 === 0) {
      // Pushs a different object if i / 7 = 0
      arr.push({
        author: "Adam Morris",
        content: "This is a post from another fake account " + i,
      });
    }
    arr.push({
      author: "Jack Fuller",
      content: i + 1,
    });
  }
  return arr;
}

const PostSlice = createSlice({
  name: "Post",
  initialState: {
    posts: [
      {
        id: "p1",
        author: "Adam Morris",
        content: "My name is Adam Morris Hello there Adam!",
        comments: makeArray(23),
        likes: [],
      },
      {
        id: "p2",
        author: "Adam Morris",
        content: "My name is Adam Morris Hello there",
        comments: makeArray(54),
        likes: [],
      },
      {
        id: "p3",
        author: "Adam Morris",
        content: "My name is Adam Morris Hello there",
        comments: makeArray(12),
        likes: [],
      },
      {
        id: "p4",
        author: "Adam Morris",
        content: "My name is Adam Morris Hello there",
        comments: makeArray(0),
        likes: [],
      },
      {
        id: "p5",
        author: "Adam Morris",
        content: "My name is Adam Morris Hello there",
        comments: makeArray(1003),
        likes: [],
      },
      {
        id: "p6",
        author: "Adam Morris",
        content: "My name is Adam Morris Hello there",
        comments: makeArray(75),
        likes: [],
      },
    ],
  },
  reducers: {
    addPost: (state, action) => {
      state = state.posts.unshift({
        id: "p" + Math.random(),
        author: "Adam Morris",
        content: action.payload.content,
        likes: [],
        comments: makeArray(50),
      });
    },
    deletePost: (state, action) => {
      //.... delete a post
    },
    editPost: (state, action) => {
      //... edit a post
    },
    likePost: (state, action) => {
      const { postID, userID } = action.payload;

      const index = state.posts.findIndex((p) => p.id === postID);

      if (index !== -1) {
        const postLikeIndex = state.posts[index].likes.findIndex(
          (likeID) => likeID === userID
        );
        if (postLikeIndex !== -1) {
          state.posts[index].likes.splice(postLikeIndex, 1);
        } else {
          state.posts[index].likes.push(userID);
        }
      } else {
        alert("no posts found");
      }
    },
  },
});

export const post_Actions = PostSlice.actions;
export default PostSlice;
