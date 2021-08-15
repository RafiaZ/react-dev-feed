import React from "react";
import classes from "./Backdrop.module.scss";

const Backdrop = (props) => (
  <div onClick={props.onClick} className={classes.Backdrop}></div>
);

export default Backdrop;
