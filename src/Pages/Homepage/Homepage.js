import React from "react";
import AuthForm from "../../Components/AuthForm/AuthForm";
import classes from "./Homepage.module.scss";
const Homepage = (props) => {
  return (
    <div className={classes.Homepage}>
      <AuthForm />
    </div>
  );
};

export default Homepage;
