import React from "react";
import classes from "./Posts.module.scss";
import Post from "../../Post/Post";
import { useSelector } from "react-redux";
const Posts = (props) => {
  const posts = useSelector((state) => state.posts.posts);
  return (
    <section className={classes.Posts}>
      <ul>
        {posts.length > 0 &&
          posts.map((post) => (
            <Post
              hidingComments={props.hidingComments}
              key={post.id}
              author={post.author}
              content={post.content}
              post={post}
            />
          ))}
      </ul>
    </section>
  );
};

export default Posts;
