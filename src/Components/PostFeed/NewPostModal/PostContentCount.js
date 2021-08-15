import React from "react";

const PostContentCount = (props) => {
  return (
    <span
      style={{
        textAlign: "center",
        display: "block",
        fontSize: "0.8rem",
        padding: "0.3rem",
      }}
    >
      {props.newPostContent.length}/250
    </span>
  );
};

export default PostContentCount;
