import React from "react";
import classes from "./Avatar.module.scss";

const Avatar = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${classes.Avatar} ${props.className}`}
    >
      <img
        style={props.style}
        className={`${classes.Avatar__Image}`}
        src="https://www.icwukltd.co.uk/wp-content/uploads/2016/12/avatar-placeholder.png"
        alt="avatar"
      />
      {props.name ? <p>{props.name}</p> : null}
    </div>
  );
};

export default Avatar;
