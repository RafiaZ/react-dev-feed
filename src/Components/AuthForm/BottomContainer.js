import React from "react";
import classes from "./AuthForm.module.scss";

const BottomContainer = (props) => {
  return (
    <div className={classes.BottomContainer}>
      {!props.signingUp ? (
        <p>
          Don't have an account?{" "}
          <span onClick={props.toggleIsSigningUp}>Sign up</span>
        </p>
      ) : (
        <p>
          Have an account?{" "}
          <span onClick={props.toggleIsSigningUp}>Sign in</span>
        </p>
      )}
    </div>
  );
};
export default BottomContainer;
