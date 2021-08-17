import React from "react";
import classes from "./Modal.module.scss";
import CloseBtn from "../CloseBtn/CloseBtn";
import Backdrop from "../Backdrop/Backdrop";
import { Fragment } from "react";
import Transition from "react-transition-group/Transition";
const Modal = (props) => {
  return (
    <Transition in={props.show} timeout={500} mountOnEnter unmountOnExit>
      {(state) => (
        <Fragment>
          <Backdrop onClick={props.onClick} />
          <div
            className={`${classes.Modal} ${props.className} ${
              state === "entering"
                ? classes.ModalOpen
                : state === "exiting"
                ? classes.ModalClosed
                : null
            }`}
          >
            <div className={classes.Modal__Header}>
              <h3>{props.header}</h3>
              <CloseBtn
                onClick={() => {
                  props.onClick();
                  props.clearInput && props.clearInput();
                }}
              />
            </div>
            {props.children}
          </div>
        </Fragment>
      )}
    </Transition>
  );
};

export default Modal;
