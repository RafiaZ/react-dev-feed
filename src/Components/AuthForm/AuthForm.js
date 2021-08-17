import React, { useState } from "react";
import classes from "./AuthForm.module.scss";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../Store/Auth-Slice";
import Spinner from "../UI/Spinner/Spinner";
import SignIn from "./Sign-in";
import SignUp from "./Sign-up";
import BottomContainer from "./BottomContainer";
import TopContainer from "./TopContainer";
import InfoBox from "../UI/InfoBox/InfoBox";
let loginTimer;

const AuthForm = (props) => {
  const dispatch = useDispatch();
  const [signingUp, setSigningUp] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const toggleIsSigningUp = () => {
    setLoading(false);
    clearTimeout(loginTimer);
    setTimeout(() => {
      setSigningUp((prevState) => !prevState);
      setError(null);
    }, 1000);
    handleExpanded();
  };

  const handleExpanded = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, 2300);
  };

  const submitFormHandler = (e, email, password) => {
    e.preventDefault();

    if (!email | !password) {
      return setError("All fields are required");
    }

    setLoading(true);
    loginTimer = setTimeout(() => {
      setLoading(false);
      dispatch(AuthActions.login());
    }, 2000);
  };

  return (
    <div className={classes.AuthForm}>
      <TopContainer expanded={expanded} signingUp={signingUp} />
      {!loading && error && <InfoBox>{error}</InfoBox>}

      {signingUp && !loading && <SignUp />}
      {!signingUp && !loading && (
        <SignIn submitFormHandler={submitFormHandler} />
      )}
      {loading && <Spinner />}
      <BottomContainer
        signingUp={signingUp}
        toggleIsSigningUp={toggleIsSigningUp}
      />
    </div>
  );
};

export default AuthForm;
