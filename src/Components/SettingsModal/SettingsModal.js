import React from "react";
import Modal from "../UI/Modal/Modal";
import ToggleSlider from "../UI/ToggleSlider/ToggleSlider";
import classes from "./SettingsModal.module.scss";

const SettingsModal = (props) => {
  return (
    <Modal
      className={classes.SettingsModal}
      show={props.show}
      onClick={props.onClick}
      header="Settings"
    >
      <div className={classes.SettingsGroup}>
        <p>Hide All Posts</p>
        <ToggleSlider
          onClick={props.changeHidingPostsHandler}
          active={props.hidingPosts}
        />
      </div>
      <div className={classes.SettingsGroup}>
        <p>Hide All Comments</p>
        <ToggleSlider
          onClick={props.changeHidingCommentsHandler}
          active={props.hidingComments}
        />
      </div>
    </Modal>
  );
};

export default SettingsModal;
