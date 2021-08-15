import React, { useState } from "react";
import classes from "./PostFeed.module.scss";
import Posts from "./Posts/Posts";
import NewPostButton from "./NewPostButton/NewPostButton";
import NewPostModal from "./NewPostModal/NewPostModal";
const PostFeed = (props) => {
  const [isWritingPost, setIsWritingPost] = useState(false);

  const toggleIsWritingPostHandler = () => {
    setIsWritingPost((prevState) => !prevState);
  };

  return (
    <div className={classes.PostFeed}>
      <NewPostButton toggleIsWritingPostHandler={toggleIsWritingPostHandler} />

      <Posts hidingComments={props.hidingComments} />

      <NewPostModal
        isWritingPost={isWritingPost}
        toggleIsWritingPostHandler={toggleIsWritingPostHandler}
      />
    </div>
  );
};

export default React.memo(PostFeed);
