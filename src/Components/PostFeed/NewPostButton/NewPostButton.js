import React from "react";
import classes from "./NewPostButton.module.scss";
import Button from "../../UI/Button/Button";
const NewPostButton = (props) => {
  return (
    <div className={classes.NewPost__Button}>
      <Button onClick={props.toggleIsWritingPostHandler}>
        What's on your mind?
      </Button>
    </div>
  );
};

export default NewPostButton;
