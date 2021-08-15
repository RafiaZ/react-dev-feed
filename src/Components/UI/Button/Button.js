import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => (
  <button
    onClick={props.onClick}
    type={props.type ? props.type : "button"}
    className={`${classes.Button} ${props.className}`}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default Button;
