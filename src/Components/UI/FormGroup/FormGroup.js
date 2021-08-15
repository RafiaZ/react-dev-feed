import React from "react";
import classes from "./FormGroup.module.scss";

const FormGroup = (props) => {
  return (
    <div
      className={`${classes.FormGroup} ${props.active ? classes.Active : null}`}
    >
      {props.children}
    </div>
  );
};

export default FormGroup;
