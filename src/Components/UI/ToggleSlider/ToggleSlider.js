import React from "react";
import { Fragment } from "react";
import classes from "./ToggleSlider.module.scss";

const ToggleSlider = (props) => {
  return (
    <Fragment>
      <div className={`${classes.ToggleSlider}`}>
        <div
          onClick={props.onClick}
          className={`${classes.ToggleSliderButton}`}
          style={{
            left: props.active ? "0" : "calc(100% - 25px)",
            background: props.active ? "rgb(20, 39, 56)" : "coral",
          }}
        >
          {props.active ? "On" : "Off"}
        </div>
      </div>
    </Fragment>
  );
};

export default ToggleSlider;
