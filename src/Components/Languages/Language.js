import React from "react";
import classes from "./Languages.module.scss";

const Language = (props) => {
  return (
    <div className={classes.Language}>
      <p>{props.label}</p>
    </div>
  );
};

export default Language;
