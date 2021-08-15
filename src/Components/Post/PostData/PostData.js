import React from "react";
import classes from "./PostData.module.scss";

const PostData = (props) => {
  return (
    <div className={classes.Post__Data}>
      <p className={classes.Likes}>
        <span className={classes.TotalNumber}>{props.likes.length}</span>
        Likes
      </p>
      <p>
        <span className={classes.TotalNumber}>{props.postComments.length}</span>
        Comments
      </p>
    </div>
  );
};

export default PostData;
