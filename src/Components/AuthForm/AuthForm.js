import React, { useState } from "react";
import { Fragment } from "react";
import Register from "./Register/Register";
import SignIn from "./SignIn/SignIn";

const AuthForm = (props) => {
  const [signingUp, setSigningUp] = useState(false);

  const toggleSigningUp = () => {
    setSigningUp((prevState) => !prevState);
  };

  return (
    <Fragment>
      <SignIn toggleSigningUp={toggleSigningUp} />
      <Register show={signingUp} closeModal={toggleSigningUp} />
    </Fragment>
  );
};

export default AuthForm;
