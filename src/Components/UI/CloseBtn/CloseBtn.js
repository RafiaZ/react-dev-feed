import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./CloseBtn.module.scss";
import Button from "../Button/Button";

const CloseBtn = (props) => {
  return (
    <Button
      onClick={props.onClick}
      className={`${classes.Close} ${props.className}`}
    >
      <FontAwesomeIcon
        className={classes.Close__Icon}
        icon={faTimes}
      ></FontAwesomeIcon>
    </Button>
  );
};

export default CloseBtn;
