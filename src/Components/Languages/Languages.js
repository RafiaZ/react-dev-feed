import React from "react";
import Language from "./Language";
import classes from "./Languages.module.scss";

const Languages = (props) => {
  const { user } = props;
  return (
    <div className={classes.Languages}>
      {user.userData.toolbox.map((tool) => (
        <Language key={tool.label} label={tool.label} />
      ))}
    </div>
  );
};

export default Languages;
