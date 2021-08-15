import React, { useState } from "react";
import classes from "./PostFeed.module.scss";
import Posts from "./Posts/Posts";
import NewPostButton from "./NewPostButton/NewPostButton";
import NewPostModal from "./NewPostModal/NewPostModal";
import Transition from "react-transition-group/Transition";
import ToggleSlider from "../UI/ToggleSlider/ToggleSlider";
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
