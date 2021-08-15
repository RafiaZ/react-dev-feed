import React from "react";
import classes from "./InfoBox.module.scss";

const InfoBox = (props) => {
  return (
    <div onClick={props.onClick} role="note" className={classes.InfoBox}>
      {props.children}
    </div>
  );
};

export default InfoBox;
