import React, { useState } from "react";
import classes from "./AuthForm.module.scss";
import Button from "../UI/Button/Button";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChangedHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChangedHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitSignInHandler = (e, emailInput, passwordInput) => {
    props.submitFormHandler(e, emailInput, passwordInput);
  };

  return (
    <form>
      <div className={classes.InputGroup}>
        <input
          type="text"
          placeholder="Email*"
          value={email}
          onChange={onEmailChangedHandler}
        />
        <input
          type="password"
          placeholder="Password*"
          onChange={onPasswordChangedHandler}
        />
        <p>Forgotten your password?</p>
      </div>
      <Button
        onClick={(e) => {
          submitSignInHandler(e, email, password);
        }}
        type="submit"
        className={classes.SigninButton}
      >
        Sign in
      </Button>
    </form>
  );
};
export default SignIn;
