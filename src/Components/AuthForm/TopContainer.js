import React from "react";
import classes from "./AuthForm.module.scss";

const TopContainer = ({ signingUp, expanded }) => {
  return (
    <div className={classes.TopContainer}>
      <div
        className={`${classes.Backdrop} ${expanded && classes.SigningUp}`}
      ></div>
      <div className={classes.HeaderContainer}>
        <div className={classes.HeaderText}>
          <h2>{signingUp ? "Create" : "Welcome"}</h2>
          <h2>{signingUp ? "Account" : "Back"}</h2>
          <p>
            {signingUp ? "Create Account to continue" : "Signin to continue"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
