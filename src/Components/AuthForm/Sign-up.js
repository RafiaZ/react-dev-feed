import React from "react";
import classes from "./AuthForm.module.scss";
import Button from "../UI/Button/Button";
const SignUp = (props) => {
  return (
    <form>
      <div className={classes.InputGroup}>
        <input type="text" placeholder="First Name*" />
        <input type="text" placeholder="Last Name*" />
        <input type="email" placeholder="Email*" />
        <input type="password" placeholder="Password*" />
      </div>
      <Button className={classes.SigninButton}>Create Account</Button>
    </form>
  );
};

export default SignUp;
