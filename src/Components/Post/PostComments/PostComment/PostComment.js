import React from "react";
import Avatar from "../../../UI/Avatar/Avatar";
import classes from "./PostComment.module.scss";

const PostComment = (props) => {
  return (
    <div className={classes.PostComment}>
      <Avatar />
      <div className={classes.PostComment__Data}>
        <p className={classes.Author}>{props.author}</p>
        <p className={classes.Content}>{props.content}</p>
      </div>
    </div>
  );
};

export default PostComment;
