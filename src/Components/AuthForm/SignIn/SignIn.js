import React, { useState } from "react";
import classes from "./SignIn.module.scss";
import Button from "../../UI/Button/Button";
import FormGroup from "../../UI/FormGroup/FormGroup";
import InfoBox from "../../UI/InfoBox/InfoBox";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../../Store/Auth-Slice";
const SignIn = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const clearErrorHandler = () => {
    setError(null);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (email !== user.email) {
      return setError("This account is not registered");
    } else if (password !== user.password) {
      return setError("Invalid username or password");
    }

    dispatch(AuthActions.login());
  };

  return (
    <form
      onSubmit={submitFormHandler}
      autoComplete="off"
      className={classes.SignIn__Form}
    >
      {error && (
        <InfoBox onClick={clearErrorHandler}>
          <p>{error}</p>
        </InfoBox>
      )}
      <FormGroup>
        <input
          onChange={onEmailChangeHandler}
          type="text"
          placeholder="Email*"
        />
      </FormGroup>
      <FormGroup>
        <input
          onChange={onPasswordChangeHandler}
          type="password"
          placeholder="Password*"
        />
      </FormGroup>

      <InfoBox>
        <p>
          Email: <b>test@test.com</b>
        </p>
        <p>
          Password: <b>AwSd</b>
        </p>
      </InfoBox>

      <Button type="submit" className={classes.authBtn}>
        Sign In
      </Button>
      <Button onClick={props.toggleSigningUp} className={classes.authBtn}>
        Register
      </Button>
    </form>
  );
};

export default SignIn;
