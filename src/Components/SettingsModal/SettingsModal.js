import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Modal/Modal";
import ToggleSlider from "../UI/ToggleSlider/ToggleSlider";
import classes from "./SettingsModal.module.scss";
import Button from "../UI/Button/Button";
import { AuthActions } from "../../Store/Auth-Slice";
import Select from "react-select";

const options = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "ReactJS", label: "ReactJS" },
  { value: "NodeJS", label: "NodeJS" },
  { value: "SQL", label: "SQL" },
  { value: "ASP.NET", label: "ASP.NET" },
  { value: "GoLang", label: "GoLang" },
  { value: "Python", label: "Python" },
  { value: "Java", label: "Java" },
  { value: "PHP", label: "PHP" },
  { value: "React Native", label: "React Native" },
  { value: "Ruby", label: "Ruby" },
  { value: "Scala", label: "Scala" },
  { value: "Swift", label: "Swift" },
  { value: "TypeScript", label: "TypeScript" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: "0.7rem",
  }),
};
const SettingsModal = (props) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const addToolHandler = (tools) => {
    dispatch(AuthActions.addTool(tools));
  };

  console.log(user.userData.toolbox);
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

      <div className={classes.Toolbox}>
        <Select
          isMulti
          styles={customStyles}
          name="colors"
          options={options}
          defaultValue={user.userData.toolbox}
          onChange={addToolHandler}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
    </Modal>
  );
};

export default SettingsModal;
