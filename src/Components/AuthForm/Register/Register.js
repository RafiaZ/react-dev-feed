import React from "react";
import classes from "./Register.module.scss";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import FormGroup from "../../UI/FormGroup/FormGroup";
import InfoBox from "../../UI/InfoBox/InfoBox";
import Transition from "react-transition-group/Transition";
const Register = (props) => {
  const handleCloseModal = () => {
    props.closeModal();
  };
  return (
    <Transition in={props.show} timeout={500} mountOnEnter unmountOnExit>
      {(state) => (
        <Modal
          show={state}
          header="Register"
          closeModal={props.closeModal}
          className={classes.AuthForm__Register}
          onClick={handleCloseModal}
        >
          <form autoComplete="off">
            <FormGroup>
              <input type="text" placeholder="First Name*" />
            </FormGroup>
            <FormGroup>
              <input type="text" placeholder="Last Name*" />
            </FormGroup>
            <FormGroup>
              <input type="email" placeholder="Email*" />
            </FormGroup>
            <FormGroup>
              <input type="password" placeholder="Password*" />
            </FormGroup>
            <FormGroup>
              <input type="email" placeholder="Confirm Password*" />
            </FormGroup>
            <InfoBox>
              <p>Registration is not online</p>
            </InfoBox>

            <Button className={classes.authBtn}>Create Account</Button>
          </form>
        </Modal>
      )}
    </Transition>
  );
};

export default Register;
